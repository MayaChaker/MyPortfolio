# Maya Chaker | Portfolio

Portfolio of Maya Chaker, full-stack developer. A home page with projects, experience and skills, and a case study page for each project (`/projects/:slug`).

## Stack

- React 19, React Router 7
- Vite 7
- Plain CSS (custom properties), one dark theme
- Self-hosted fonts: Bodoni Moda and Manrope

The design ("Spotlight") was prototyped as static HTML first; that prototype is kept in `design/spotlight/`.

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run type-check
npm run build
```

The production build is generated in `dist/`. `vercel.json` sends every route to `index.html`, so case study URLs work when opened directly or refreshed.

## Structure

- `src/components` — page sections, the case study page, and the browser frame used for screenshots
- `src/Data` — profile, projects (including case study content), experience, skills, and testimonials
- `public/projects/<slug>` — screenshots in WebP, each with an `-800.webp` copy for smaller screens
- `public/fonts` — font files, preloaded in `index.html`
- `public` — résumé, portrait, favicons, and the link preview image (`og.jpg`)

## Editing content

- **Projects:** `src/Data/projects.js`. Every fact should come from the project's README or code. Add `video: "/projects/<slug>/walkthrough.mp4"` to show a walkthrough on the case study page.
- **Testimonials:** `src/Data/testimonials.js`. The section stays hidden until the list has an entry.
- **University and "Currently":** `src/Data/profile.js`. Each is shown only when filled in.

## Role-specific links

Add `?role=frontend` or `?role=backend` to the URL to change the headline and put the matching projects and skills first.
