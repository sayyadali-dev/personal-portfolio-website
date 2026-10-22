import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getSiteOrigin } from "../lib/site-origin";
import "./globals.scss";

const siteOrigin = getSiteOrigin();

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: siteOrigin,
    alternates: { canonical: "/" },
    title: {
      default: "Sayyad Ali | Frontend, React & WordPress Developer",
      template: "%s | Sayyad Ali",
    },
    description:
      "Meet Sayyad Ali, an early-career frontend developer building practical experiences with React, JavaScript, and WordPress.",
    applicationName: "Sayyad Ali Portfolio",
    keywords: [
      "Sayyad Ali",
      "Frontend Developer",
      "React Developer",
      "WordPress Developer",
      "JavaScript",
      "Portfolio",
    ],
    authors: [{ name: "Sayyad Ali" }],
    creator: "Sayyad Ali",
    openGraph: {
      type: "website",
      title: "Sayyad Ali | Frontend, React & WordPress Developer",
      description:
        "A personal documentary about learning to turn ideas into useful digital experiences.",
      siteName: "Sayyad Ali Portfolio",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sayyad Ali | Beyond the Interface" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sayyad Ali | Frontend, React & WordPress Developer",
      description:
        "A personal documentary about learning to turn ideas into useful digital experiences.",
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#090a0c",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const personSchema = {
    "@type": "Person",
    "@id": new URL("#person", siteOrigin).toString(),
    name: "Sayyad Ali",
    jobTitle: "Frontend Developer, React Developer, WordPress Developer",
    description:
      "An early-career developer and university student focused on frontend development, React, JavaScript, and WordPress.",
    email: "sayyadali.dev@gmail.com",
    url: siteOrigin.toString(),
    sameAs: [
      "https://github.com/sayyadali-dev",
      "https://www.linkedin.com/in/sayyad-ali-react/",
    ],
    knowsAbout: [
      "Frontend development",
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive web design",
      "WordPress",
      "Elementor",
      "WooCommerce",
    ],
    address: { "@type": "PostalAddress", addressCountry: "Pakistan" },
  };
  const websiteSchema = {
    "@type": "WebSite",
    "@id": new URL("#website", siteOrigin).toString(),
    name: "Sayyad Ali Portfolio",
    url: siteOrigin.toString(),
    inLanguage: "en",
    about: { "@id": new URL("#person", siteOrigin).toString() },
  };

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [personSchema, websiteSchema],
            }),
          }}
        />
      </body>
    </html>
  );
}
