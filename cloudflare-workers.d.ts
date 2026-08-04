// The Cloudflare runtime provides this virtual module. Declaring the small
// portion used by the optional D1 helper lets static Next.js builds type-check
// without requiring a Cloudflare Worker runtime.
declare module "cloudflare:workers" {
  export const env: {
    DB?: D1Database;
  };
}

interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

interface D1Database {
  readonly __cloudflareD1Brand?: unknown;
}
