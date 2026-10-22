/**
 * One canonical origin for metadata, structured data, robots, and sitemap.
 * Set NEXT_PUBLIC_SITE_URL on the production deployment for custom domains.
 */
export function getSiteOrigin(): URL {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const deploymentHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const origin = configuredOrigin || (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");

  return new URL(origin.startsWith("http") ? origin : `https://${origin}`);
}
