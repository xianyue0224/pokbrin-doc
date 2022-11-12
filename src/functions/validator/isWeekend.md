---
title: isWeekend
shortTitle: isWeekend
order: 1
pageInfo:
  - Tag
---

**检测指定日期对象是否为周末。**

::: code-tabs#shell

@tab JS
```javascript
const isWeekend = (date = new Date()) => date.getDay() % 6 === 0;
```

@tab TS
```typescript
const isWeekend = (date = new Date()): boolean => date.getDay() % 6 === 0;
```

:::

| 参数 | 类型 | 是否必填 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: |
| date | Date | 否 | 当前时刻日期对象 | 需要检测的日期对象 |

| 返回值类型 | 说明 |
| :---: | :---: |
| Boolean | 是否为周末 |


