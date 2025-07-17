# Sandy Select

Sandy Select is a small landing page showcasing handmade almond toffee and premium cakes. It is built with **Next.js** and **Tailwind CSS** and deployed on **Cloudflare Pages**.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser to view the site.

## Deployment to Cloudflare Pages

1. Create a new project in Cloudflare Pages and connect this repository.
2. Set the build command to `npm run build`.
3. Use `.vercel/output` as the publish directory.
4. Set these environment variables for the Google Forms used on the site:

```
NEXT_PUBLIC_TOFFEE_FORM_URL=<Google form>
NEXT_PUBLIC_CAKE_FORM_URL=<Google form>
```

Copy `.env.example` to `.env` and fill in your URLs before running the build.

## Branding

The site uses a light cream background with forest‑green and amber highlights
defined in `tailwind.config.mjs`. You can tweak these brand colors in that file
if you want a different look.

## Assets

Product photos and the site logo are stored in the `images` directory and loaded via `next/image`.

<!-- Force new deployment to fix content issue -->
