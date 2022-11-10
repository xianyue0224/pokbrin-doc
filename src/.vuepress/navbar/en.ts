import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Get Started",
        link: "get-started"
      },
    ],
  },
  {
    text: "Functions",
    icon: "note",
    prefix: "functions/",
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
