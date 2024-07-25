import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    relativeLinks(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "static",
  compressHTML: false,
  build: {
    format: "file",
  },
  site: "https://aji-foodfes.com",
});
