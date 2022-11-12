---
title: isEmpty
shortTitle: isEmpty
order: 1
pageInfo:
  - Tag
---

**判断数组是否为空。**

::: code-tabs#shell

@tab JS
```javascript
function isEmpty(arr){
  return Array.isArray(arr) && !arr.length
}
```

@tab TS
```typescript
const convertToArray = <T,_>(value: T | T[]): T[] => Array.isArray(value) ? value : [value]
```

:::

| 参数 | 类型 | 是否必填 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: |
| arr | Array | 是 | ---- | 需要检测的数组 |

| 返回值类型 | 说明 |
| :---: | :---: |
| Boolean | 数组是否为空 |


