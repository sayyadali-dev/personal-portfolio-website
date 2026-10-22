import type { MetadataRoute } from "next";
import { getSiteOrigin } from "../lib/site-origin";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();

  return [
    {
      url: new URL("/", origin).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
