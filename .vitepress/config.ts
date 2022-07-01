import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DailyUp",
  description: "daily handwrite docs",
  base: "/daily-hand-write/",
  outDir: "docs",
  themeConfig: {
    logo: "/battery-charging.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/gumingWu/daily-hand-write" },
    ],
  },
});
