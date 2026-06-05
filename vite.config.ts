// @lovable.dev/vite-tanstack-config already includes the default TanStack/Lovable plugins.
// This config adds GitHub Pages support for client prototype previews.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const githubPagesBase = process.env.GITHUB_PAGES_BASE;
const base = githubPagesBase && githubPagesBase.startsWith("/") ? githubPagesBase : "/";

export default defineConfig({
  vite: {
    // GitHub Pages project sites live at /<repo-name>/.
    // The GitHub Actions workflow sets GITHUB_PAGES_BASE automatically.
    base,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },

    // GitHub Pages is static-only, so prerender the visible prototype pages.
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: true,
    },
    pages: [
      { path: "/" },
      { path: "/o-nama" },
      { path: "/delatnosti" },
      { path: "/projekti" },
      { path: "/kontakt" },
    ],
  },
});
