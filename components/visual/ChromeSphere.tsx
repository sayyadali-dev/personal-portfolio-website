"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./ChromeSphere.module.scss";

const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewPosition = -viewPosition.xyz;
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uPointer;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDirection = normalize(vViewPosition);
    vec3 keyLight = normalize(vec3(-0.45 + uPointer.x * 0.12, 0.72 - uPointer.y * 0.08, 0.62));

    float diffuse = max(dot(normal, keyLight), 0.0);
    float fresnel = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.4);
    float brushedLine = sin((vUv.y * 10.0 + uTime * 0.018) * 6.28318) * 0.5 + 0.5;
    float brushed = smoothstep(0.1, 0.9, brushedLine) * 0.11;
    float specular = pow(max(dot(reflect(-keyLight, normal), viewDirection), 0.0), 26.0);
    float warmRim = pow(max(dot(normal, normalize(vec3(0.8, 0.12, -0.5))), 0.0), 8.0);

    vec3 base = mix(vec3(0.018, 0.022, 0.029), vec3(0.48, 0.52, 0.58), diffuse * 0.42 + brushed);
    vec3 color = base + specular * vec3(0.9, 0.94, 1.0);
    color += fresnel * vec3(0.38, 0.47, 0.58) * 0.52;
    color += warmRim * vec3(0.52, 0.12, 0.06) * 0.2;

    gl_FragColor = vec4(color, 0.62 + fresnel * 0.28);
  }
`;

export default function ChromeSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
        premultipliedAlpha: false,
      });
    } catch {
      canvas.hidden = true;
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40);
    camera.position.z = 3.6;

    const uniforms = {
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
    };
    const geometry = new THREE.SphereGeometry(1.12, 56, 48);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(0.1, 0, 0);
    scene.add(sphere);

    let frameId = 0;
    let lastFrame = 0;
    let isVisible = false;
    const fpsInterval = 1000 / 30;

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, width < 640 ? 1 : 1.25));
      renderer.setSize(width, height, false);
    };

    const render = (time: number) => {
      if (!isVisible || document.hidden) {
        frameId = 0;
        return;
      }

      frameId = window.requestAnimationFrame(render);
      if (time - lastFrame < fpsInterval) return;
      lastFrame = time;
      uniforms.uTime.value = time * 0.001;
      sphere.rotation.y = Math.sin(time * 0.00012) * 0.16;
      sphere.rotation.x = Math.sin(time * 0.00009) * 0.07;
      renderer.render(scene, camera);
    };

    const start = () => {
      if (isVisible && !document.hidden && frameId === 0) {
        frameId = window.requestAnimationFrame(render);
      }
    };
    const stop = () => {
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
      frameId = 0;
    };
    const onVisibilityChange = () => (document.hidden ? stop() : start());
    const onPointerMove = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      uniforms.uPointer.value.set(
        ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
        ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
      );
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      isVisible ? start() : stop();
    });
    intersectionObserver.observe(host);
    host.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas className={styles.canvas} ref={canvasRef} aria-hidden="true" />;
}
