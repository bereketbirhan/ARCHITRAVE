# Site Content Panel — Setup Guide

This is your private admin panel for adding architects and buildings.
Because your site is on GitHub Pages, there's no live database — you
edit content in the panel, export it as JSON, and push it to GitHub
like any other file update. Your real `architects.html` and
`buildings.html` pages now read that JSON directly and show a
"Recently Added" section pulling from it, with each entry getting its
own profile page automatically.

## What's in this folder

```
site-admin/
└── admin.html   ← your private admin panel (do NOT publish a link to this)
```

## Where the data lives

```
/data/architects.json   ← read by architects.html and architect-profile.html
/data/buildings.json    ← read by buildings.html and building-profile.html
```

## Everyday workflow

1. Open `site-admin/admin.html` in your browser (double-click it, or
   open it via GitHub Pages at yoursite.com/site-admin/admin.html).
2. First thing each session: click **Import JSON** on each tab and
   load the current `data/architects.json` / `data/buildings.json`
   from your repo, so you're editing the latest version and not
   starting from old browser data.
3. Add / edit / delete architects and buildings using the forms. Your
   changes save automatically in that browser as you work.
4. When you're happy with the changes, click **Export JSON** on each
   tab. This downloads `architects.json` and `buildings.json`.
5. Replace the old files in `/data/` (repo root) with the newly
   downloaded ones.
6. Commit and push:
   ```
   git add data/architects.json data/buildings.json
   git commit -m "Update architects and buildings"
   git push
   ```
7. GitHub Pages rebuilds automatically (usually within a minute), and
   the "Recently Added" section on `architects.html` / `buildings.html`
   — plus each entry's own profile page — will show the new content.

## Notes

- **The panel's memory is per-browser.** Always Import the current
  `/data/*.json` before editing on a different computer or browser.
- **Photos** are just URLs — upload images to your repo (e.g. into
  `/images/`) and reference them like `images/my-photo.jpg`, or link
  to any image already hosted online.
- **Linking a building to an architect**: the building form has an
  "Architect" dropdown pulled from whatever architects you've already
  added — add the architect first, then the building.
- **Deleting an entry**: use the DELETE button in the panel, export,
  and push — same as adding. It's gone from the live site as soon as
  that push goes through.
- Keep `admin.html` off your site's navigation menu. Anyone with the
  link can edit content in their own browser, but nothing publishes
  until you export and push, so it's low-risk — just don't advertise it.
