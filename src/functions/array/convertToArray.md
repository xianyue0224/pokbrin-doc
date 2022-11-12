---
title: convertToArray
shortTitle: convertToArray
order: 1
pageInfo:
  - Tag
---

**将任意类型的数据转换为数组。**

::: code-tabs#shell

@tab JS
```javascript
const convertToArray = (value) => (Array.isArray(value) ? value : [value]);
```

@tab TS
```typescript
const convertToArray = <T,_>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value]);
```

:::

| 参数 | 类型 | 是否必填 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: |
| value | any | 是 | ---- | 需要被转换为数组的值 |

| 返回值类型 | 说明 |
| :---: | :---: |
| Array | 参数value转换为数组的结果 |


