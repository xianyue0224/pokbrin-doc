---
title: boxHandler
shortTitle: boxHandler
order: 1
pageInfo:
  - Tag
---

**数据装箱处理高阶函数。**

::: code-tabs#shell

@tab JS
```javascript
function boxHandler(x){
    return {
        next: f => boxHandler(f(x)),
        done: f => f(x)
    }
}
```

@tab TS
```typescript
todo
```

:::

| 参数 | 类型 | 是否必填 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: |
| x | any | 是 | ---- | 需要处理的数据 |

## 解释
正常情况下，有些数据的处理不能一步达到最终的结果，需要拆解成多步，例如，把一个百分数解析为对应的小数，50% -> 0.5，第一步要先得到去掉百分号的字符串，第二步解析字符串为数字，第三步把数值除以100得到最终结果。  
这些步骤是分开的，也许你的代码中会多出三个函数，占用三个变量，因此，你可以使用这个高阶函数把这些散落的“零件”组装起来，形成一个机器，使它们看起来像是一体的，井然有序，并且功能没有变化。

```javascript
function getPercentNumber(str){
    return boxHandler(str)
            .next(str => str.replace(/\%/,""))
            .next(str => parseFloat(str))
            .done(res => res * 0.01)
}

getPercentNumber("50%") // 0.5
```


