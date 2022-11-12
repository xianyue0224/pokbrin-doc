import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "指南",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "快速上手",
        icon: "creative",
        link: "get-started"
      }
    ],
  },
  {
    text: "函数",
    icon: "note",
    prefix: "/functions/",
    children: [
      {
        text: "数组",
        link: "array/compareArrays"
      },
      {
        text: "字符串",
        link: "string/capitalize"
      },
      {
        text: "校验器",
        link: "validator/isWeekend"
      },
      {
        text: "高阶函数",
        link: "function/boxHandler"
      },
    ]
  },
]);
