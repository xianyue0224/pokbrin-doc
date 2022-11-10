import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Pokbrin",
      description: "实用工具函数库Pokbrin的在线文档",
    },
    "/en/": {
      lang: "en-US",
      title: "Pokbrin",
      description: "A utility function library containing two versions of JS and TS.",
    },
  },

  theme,

  shouldPrefetch: false,
});
