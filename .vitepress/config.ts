import { defineConfig } from "vitepress";
import { getSideBarMenu } from "./functions";

const MainSidebar = getSideBarMenu()

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
    sidebar: [
      {
        text: "Guide",
        items: [{ text: "介绍", link: "/guide/" }],
      },
      ...MainSidebar
    ],
    footer: {
      message: "Stay Hungry Stay Foolish.",
      copyright: "Copyright © 2022-present Gaaming Wu",
    },
  },
});
