import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    relativeLinks(),
    sitemap(),
    robotsTxt(),
    sentry(),
    spotlightjs(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    robotsTxt({
      sitemap: [
        "https://aji-foodfes.com/sitemap-0.xml",
        "https://aji-foodfes.com/sitemap-index.xml",
      ],
    }),
    sentry(),
    spotlightjs(),
  ],
  output: "static",
  compressHTML: false,
  build: {
    format: "file",
  },
  site: "https://aji-foodfes.com",
});
