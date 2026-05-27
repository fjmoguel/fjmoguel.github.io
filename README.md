# Francisco Moguel — Personal Website

A rebuild of the personal site, moved from 9 hand-copied HTML files to an
[Astro](https://astro.build) project. The navigation bar, footer and styling
now live in **one place each**, and all page content lives in plain editable
data files. Change a link once — every page updates.

---

## Quick start (run it on your computer)

You need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install      # one time — downloads dependencies
npm run dev      # starts a live preview at http://localhost:4321
```

Edit any file and the browser refreshes instantly. To produce the final
files: `npm run build` (output goes to the `dist/` folder).

---

## ⚠️ First thing to do: add your images

This project does **not** include your photos, logos or videos. Copy your
existing folders into the `public/` folder so they end up like this:

```
public/images/   ← all your photo files
public/logos/    ← marathon + music logos
public/videos/   ← the ML assignment videos
```

Anything in `public/` is served from the site root, so
`public/images/photo.jpg` is referenced as `/images/photo.jpg`.

**HEIC files will not display in browsers.** Several images in the slideshows
end in `.HEIC`. Convert those to `.jpg` and update the names in
`src/data/galleries.js`, or those slides will appear blank.

---

## How to make changes

All content is in `src/data/` — no HTML required.

| To change…                    | Edit this file                  |
|--------------------------------|----------------------------------|
| The navigation menu / links    | `src/data/site.js`               |
| Your name, socials, contact    | `src/data/site.js`               |
| The home page bio & stats      | `src/data/about.js`              |
| Work history & education       | `src/data/experience.js`         |
| Python projects                | `src/data/pythonProjects.js`     |
| React projects                 | `src/data/reactProjects.js`      |
| Machine learning projects      | `src/data/mlProjects.js`         |
| Marathons / races              | `src/data/marathons.js`          |
| Music artists & profiles       | `src/data/music.js`              |
| Slideshow image lists          | `src/data/galleries.js`          |
| Colors and fonts (the theme)   | `src/styles/global.css`          |

Each data file has comments explaining the format. To add a marathon, for
example, copy one `{ ... }` block in `marathons.js` and fill it in — the
running page picks it up automatically.

> Note: a few music artists (AC/DC, Arctic Monkeys, etc.) had placeholder
> links on the old site. They are set to `null` in `music.js` and show
> "Links coming soon" until you add real URLs.

---

## Project structure

```
src/
  data/         all editable content (see table above)
  components/   Nav, Footer, Slideshow, ProjectCard — written once, reused
  layouts/      BaseLayout.astro — the shared page shell (head, fonts, nav)
  pages/        one file per page; the filename becomes the URL
  styles/       global.css — the design system
public/         images, logos, videos, favicon (served as-is)
```

The `pages/` filenames map directly to URLs, matching the old site:
`work-experience.astro` → `/work-experience`, `assignments.astro` →
`/assignments`, and so on, so existing links keep working.

---

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and publishes
the site automatically on every push to `main`.

One-time setup:

1. Put these files in your `fjmoguel.github.io` repository (replacing the old
   HTML files — but keep your `images` / `logos` / `videos` by moving them
   into `public/` as described above).
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main`. The Actions tab will show the build; when it finishes,
   the site is live at https://fjmoguel.github.io.

After that, every push to `main` redeploys automatically — no build step on
your end.
