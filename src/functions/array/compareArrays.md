---
title: compareArrays
shortTitle: compareArrays
order: 1
pageInfo:
  - Tag
---

**比较两个数组是否相同。**

::: code-tabs#shell

@tab JS
```javascript
function compareArrays(a,b){
    const str_a = JSON.stringify([...new Set(a)].sort())
    const str_b = JSON.stringify([...new Set(b)].sort())
    return str_a === str_b
}
```

@tab TS
```typescript
const compareArrays = <T, _>(a: T[], b: T[]): boolean => JSON.stringify([...(new Set(a))].sort()) === JSON.stringify([...(new Set(b))].sort())
```

:::

| 参数 | 类型 | 是否必填 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: |
| a | Array | 是 | ---- | 第一个数组 |
| b | Array | 是 | ---- | 第二个数组 |

| 返回值类型 | 说明 |
| :---: | :---: |
| Boolean | 两个数组是否相同 |


