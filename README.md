# Sayyad Ali | Portfolio

A responsive, story-led portfolio for Sayyad Ali, built with the Next.js App Router, React 19, and SCSS modules. The visual direction follows **Beyond the Interface**: an honest early-career story told through editorial typography, restrained chrome, and real photography.

## Run locally

This ready-to-run package includes installed Windows dependencies. Extract the ZIP, then double-click `RUN-PORTFOLIO.bat`. Keep its terminal window open while using the site; Next.js prints the local URL there (usually `http://localhost:3000`).

To start it from PowerShell instead:

```bash
npm run dev
```

Node.js 20.9 or newer is required. If you remove `node_modules` or extract the source-only archive, restore dependencies with `npm install` first. For a production build, use `npm run build` and then `npm run start`.

Add the real deployment origin to `.env.local` before publishing:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

This value powers the canonical URL, Open Graph metadata, structured data, `robots.txt`, and `sitemap.xml`. Vercel's deployment host is used as a fallback; always set the production value for a custom domain.

## Project map

```text
app/                         App Router page, metadata, robots, sitemap, OG image
components/site/             Navigation, story sections, footer, scroll director
components/visual/           Deferred Three.js / GLSL visual
styles/                      SCSS design tokens and shared mixins
public/images/               Supplied personal photography
public/llms.txt              Plain-text profile and project facts for discovery
```

The page and story sections are server-rendered. Client code is limited to navigation, scroll orchestration, the small animated label, and the optional WebGL visual.

## Motion system

- **GSAP + ScrollTrigger** handle the reading progress line, a restrained hero-image parallax, and one-time reveals below the fold. Their code loads after browser idle time and animations are reverted when the page unmounts.
- **Lenis** smooths wheel scrolling and runs from the GSAP ticker. ScrollTrigger receives Lenis scroll updates; there is one animation loop.
- **Framer Motion** is limited to the mobile navigation panel, which is split into an on-demand chunk and respects `prefers-reduced-motion`.
- **Anime.js** is imported only after hydration for the short letter reveal above the hero heading. It is skipped when reduced motion is requested.
- **Three.js + GLSL** draw a single procedural chrome sphere. The chunk is loaded after idle time, skipped for reduced motion, data saver, and very low-memory devices, and pauses off-screen or in a hidden tab. It is capped at 30 fps and a modest pixel ratio. The CSS lighting remains as its static fallback.
- CSS handles small hover and focus states. No custom cursor, scroll pinning, mandatory long intro, or competing animation timelines are used.

## Performance and accessibility

- `next/image` serves responsive AVIF/WebP renditions for local portraits. The hero portrait is prioritized; the second portrait can load lazily.
- Space Grotesk, Inter, and IBM Plex Mono use local system-font stacks, avoiding third-party font requests and blocking font downloads.
- WebGL, text animation, scroll animation, and the mobile animation library are deferred. The initial page content and metadata do not depend on them.
- The hero image `sizes` reflects its actual rendered width, and a lower image quality setting reduces the largest portrait rendition.
- `@next/bundle-analyzer` is available with `pnpm analyze` to inspect production bundle composition.
- Semantic sections, canonical metadata, a Person and WebSite schema graph, a sitemap, an AI-readable `llms.txt`, skip navigation, keyboard-operable controls, visible focus, meaningful image alt text, and reduced-motion fallbacks are included.

The optional GSAP/Lenis layer stays off for reduced-motion and data-saver preferences, and on very low-memory devices. Native scroll and the server-rendered page remain usable if an animation chunk cannot load.

Performance measurements vary by device, network, hosting, and image cache. The app uses the controls above to reduce avoidable work; measure deployed Core Web Vitals before making numeric LCP/FCP claims.

## Content accuracy

The portfolio uses the supplied profile facts and the two supplied photographs. Project entries are presented as practice or learning projects, with SkinLuxe marked **in progress**. Repository and live-demo URLs are not invented; only the supplied GitHub and LinkedIn profile URLs are linked. No degree title, graduation date, client work, project metrics, or unverified internship duties are added.

The generated Open Graph image uses the supplied name and professional positioning. There is no separate wordmark or logo.
