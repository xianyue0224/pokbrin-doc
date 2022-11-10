import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/guide/": [
    {
      text: "快速上手",
      link: "get-started"
    }
  ],
  "/functions/": [
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
