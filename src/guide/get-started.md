---
title: 快速上手
shortTitle: 快速上手
order: 1
pageInfo:
  - Tag
comment: false
---

## 安装

::: code-tabs#shell

@tab npm
```shell
npm install pokbrin
```

@tab pnpm
```shell
pnpm install pokbrin
```

@tab yarn
```shell
yarn add pokbrin
```

:::

## 导入
```javascript
// 想用哪个就导入哪个
import { isEmpty } from "pokbrin"

console.log(isEmpty([1,2,3])) // true

// 我全都要
import * as pok from "pokbrin"

console.log(pok.isEmpty([])) // false

// 一个符合作者直觉的用法，你可以不喜欢这样用，上面的用法也不错
import pok from "pokbrin"

console.log(pok.string.capitalize("abc")) // Abc

console.log(pok.array.compare([1,2,3],[3,2,1,1])) // true

/**compare这个方法用于比较两个数组的元素是否相同，具体怎么用可以在文档中查看，
 * 但在文档中这个函数的名字叫compareArrays，显而易见，有的函数根据导入的方式不同，
 * 会有不同的名字。再次强调，第三种导入方式是完全根据作者的意愿实现的。 */
```
