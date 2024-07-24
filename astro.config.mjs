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
      // add
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "static",
  compressHTML: false,
  build: {
    // 例: ビルド時に`page/index.html`ではなく`page.html`を生成します。
    format: "file",
  },
  site: "https://aji-foodfes.com",
});
