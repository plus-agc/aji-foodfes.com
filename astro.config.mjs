import { defineConfig } from "astro/config";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks()],
  output: "static",
  compressHTML: false,
  build: {
    // 例: ビルド時に`page/index.html`ではなく`page.html`を生成します。
    format: "file",
  },
});
