# Gedsliey Inc. — Website

Editorial, typography-led marketing site for Gedsliey Inc., an independent technical
research and consulting practice ("Asking the Unasked") covering materials, chemicals,
bridge bearings, and R&D.

## Tech stack

- **Next.js 16** (App Router, React Server Components, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme`, with `tailwind.config.ts` loaded via `@config`)
- **Framer Motion** — animations with `prefers-reduced-motion` support
- **Zod** — contact form validation (client and API)
- **gray-matter** + **next-mdx-remote** — MDX-driven Knowledge Hub
- **n8n webhook** — contact form delivery integration

## Getting started

Requires Node.js 20.9+ (see `AGENTS.md` — this is Next.js 16 with breaking changes).

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (Turbopack)     |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Environment variables

Copy `.env.example` to `.env.local` and populate:

| Variable                    | Purpose                                                        |
| --------------------------- | ------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | Canonical site origin (used for metadata, sitemap, robots)    |
| `NEXT_PUBLIC_BOOKING_URL`   | External booking link; falls back to `/consultation`          |
| `NEXT_PUBLIC_LINKEDIN_URL`  | LinkedIn profile link in the footer                           |
| `CONTACT_EMAIL`             | Contact email (for future use)                                |
| `FROM_EMAIL`                | Sending address (for future use)                              |
| `N8N_WEBHOOK_URL`           | Contact form POST target; if empty, submissions are skipped   |
| `N8N_WEBHOOK_SECRET`        | Sent as the `X-Webhook-Secret` header                         |
| `SUPABASE_URL`              | Reserved for future data integration                          |
| `SUPABASE_ANON_KEY`         | Reserved for future data integration                          |

No secrets are committed — `.env*` is gitignored.

## Editing content

Knowledge Hub articles are MDX files in `content/articles/`.

1. Duplicate an existing file (e.g. `content/articles/placeholder-article.mdx`).
2. Update the frontmatter:

   ```yaml
   ---
   title: "Article title"
   slug: "article-slug"
   summary: "One or two sentence summary."
   category: "Technical Story" # Article | Case Study | White Paper | Industry Update | Publication | Resource
   tags: ["tag-one", "tag-two"]
   author: "Gedsliey Inc."
   publishedAt: "2025-01-15"
   seoTitle: "Optional SEO title"
   seoDescription: "Optional SEO description"
   ---
   ```

3. Write the body in Markdown / MDX. Articles appear automatically in the Knowledge Hub,
   sitemap, and are statically rendered at `/knowledge/[slug]`.

Service content (Expertise pages) lives in `lib/services.ts`.

## Design system

Brand tokens are defined in `app/globals.css` (`@theme`) and mirrored in
`tailwind.config.ts`:

- `brand-brown` `#4A382E` · `brand-gray` `#6E6A67` · `brand-plum` `#40364D`
- `brand-blue` `#315A7D` · `off-white` `#F7F7F5` · `near-black` `#171717`
- Fonts: `font-display` (Plus Jakarta Sans), `font-body` (Inter)

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new) — the framework is auto-detected.
3. Add the environment variables above in **Project Settings → Environment Variables**.
   Set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Deploy. Vercel runs `npm run build` and serves the App Router output.
