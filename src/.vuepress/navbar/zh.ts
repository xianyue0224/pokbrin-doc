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
        text: "Array",
        link: "array/castArray"
      },
      {
        text: "String",
        link: "string/capitalize"
      }
    ]
  },
]);
