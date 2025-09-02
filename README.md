Ajigasawa Food Fes 2025 — content package

This folder contains structured content extracted from the 2025 flyer and a migration checklist to refresh the current Astro site (https://aji-foodfes.com/) for the 2025 edition.

What this is
- YAML under `content/2025/` describing event basics, stage schedule, experiences, and venue.
- Alt-text and copy blocks that can replace text-in-image assets to improve SEO and accessibility.
- A migration checklist for the existing Astro site.

How to use
1) Copy `content/2025/*.yml` into your Astro repo (e.g. `src/data/2025/`).
2) Replace hard-coded strings and images on pages with data-driven components reading these files.
3) Update `<title>`, meta description, OGP images, and canonical URLs to 2025.

Notes
- Some fine-grained times/names were unreadable from the flyer image and are marked as `TBD`. Please confirm via final manuscript (.ai) and update the fields.
- All times are local (JST).

