import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/guide/": [
    {
      text: "Get Started",
      link: "get-started"
    }
  ],
  "/en/functions/": [
    {
      text: "Array",
      prefix: "array/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "String",
      prefix: "string/",
      collapsable: true,
      children: "structure"
    }
  ]
});
