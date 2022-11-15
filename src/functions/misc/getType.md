---
title: getType
shortTitle: getType
order: 1
pageInfo:
  - Tag
---

**获取数据类型。**

## 常见数据类型
Pokbrin想让类型系统更简单一点，或者说对于那些极少见的数据类型，Pokbrin保持视而不见的态度，因此，在这个工具函数库中，具体的数据类型好像只有常见的number、string、boolean、symbol、function、object、array、map、weakMap、set、weakSet、null、undefined，除了这些之外出现的数据，Pokbrin把它们归为unknown。另外，为了更方便些，null和undefined也是分开的两个具体的类型。


## 源码
::: code-tabs#shell

@tab JS
```javascript
const dataTypes = [
    "Number",
    "String",
    "Boolean",
    "Undefined",
    "Null",
    "Array",
    "Symbol",
    "Object",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "Function"
]

function getType(...args){
    const arr: string[] = []
    args.forEach(data => {
        const s = Object.prototype.toString.call(data) as string
        const result = s.split(" ")[1].split("]")[0]
        arr.push(dataTypes.includes(result) ? result : "unknown")
    })
    return arr.length === 1 ? arr[0] : arr
}
```

@tab TS
```typescript
const dataTypes = [
    "Number",
    "String",
    "Boolean",
    "Undefined",
    "Null",
    "Array",
    "Symbol",
    "Object",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "Function"
]

function getType(...args: any[]): string | string[] {
    const arr: string[] = []
    args.forEach(data => {
        const s = Object.prototype.toString.call(data) as string
        const result = s.split(" ")[1].split("]")[0]
        arr.push(dataTypes.includes(result) ? result : "unknown")
    })
    return arr.length === 1 ? arr[0] : arr
}
```

:::

## 参数、返回值
这个函数允许你传递任意数量的参数。

1) 当只传一个参数时，返回值就是该参数的数据类型
```javascript
getType(1) // "Number"
```
2) 当传多个参数时，返回值是一个数组，其中的元素是所有参数的数据类型
```javascript
getType(1,"hello",()=>{}) // ["Number","String","Function"]
```
3) 你甚至可以不传参，会返回一个空数组
```javascript
getType() // []
```



