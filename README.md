# Sai Bharadwaj — Portfolio

Personal site with an about section, in-depth project write-ups (problem, what I built, tech stack, source and demo links), experience, and links to my resume and LinkedIn.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Every page is statically generated.

## Editing content

All content lives in [`lib/site.ts`](lib/site.ts): profile and links, experience, and projects. Adding an entry to `projects` creates its page at `/projects/<slug>` automatically. The resume is served from `public/Sai_Bharadwaj_Resume.pdf`; replace that file to update it.

## Run locally

```bash
npm install
npm run dev
```
