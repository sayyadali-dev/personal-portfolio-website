import { ImageResponse } from "next/og";

export const alt = "Sayyad Ali | Beyond the Interface";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #090a0c 0%, #171a1f 62%, #252a31 100%)",
          color: "#f1f0ec",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center", color: "#a7abb3", fontSize: 18, letterSpacing: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: 8, background: "#ff5a36" }} />
          DEVELOPER PORTFOLIO / PAKISTAN
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#ff5a36", fontSize: 18, letterSpacing: 5 }}>BEYOND THE INTERFACE</div>
          <div style={{ fontSize: 82, fontWeight: 600, lineHeight: 1.02, letterSpacing: -4 }}>Sayyad Ali</div>
          <div style={{ color: "#c0c3c8", fontSize: 28 }}>Frontend · React · WordPress</div>
        </div>
        <div style={{ width: "100%", height: 1, background: "#555a61" }} />
      </div>
    ),
    size,
  );
}
