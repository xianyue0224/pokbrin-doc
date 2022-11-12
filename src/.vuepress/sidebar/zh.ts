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
      text: "数组",
      prefix: "array/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "字符串",
      prefix: "string/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "校验器",
      prefix: "validator/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "高阶函数",
      prefix: "function/",
      collapsable: true,
      children: "structure"
    },
  ]
});
