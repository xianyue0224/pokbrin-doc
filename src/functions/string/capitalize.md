---
title: 首字母大写
shortTitle: capitalize
order: 1
pageInfo:
  - tag
---

**将字符串的第一个英文字母转换为大写。**

::: code-tabs#shell

@tab JS
```javascript
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Or
const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;

// Or
const capitalize = (str) => str.replace(/^([a-z])/, (first) => first.toUpperCase());
```

@tab TS
```typescript
const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Or
const capitalize = ([first, ...rest]: string): string => `${first.toUpperCase()}${rest.join('')}`;

// Or
const capitalize = (str: string): string => str.replace(/^([a-z])/, (first) => first.toUpperCase());
```

:::

| 参数 | 类型 | 是否必填 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: |
| str | String | 是 | ---- | 源字符串 |

| 返回值类型 | 说明 |
| :---: | :---: |
| String | 首字母大写的字符串 |