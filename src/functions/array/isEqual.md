---
title: isEqual
shortTitle: isEqual
order: 1
pageInfo:
  - Tag
---

**比较两个数组是否相同。**

:::tip 
getType 是一个获取数据类型的方法，可以在[这里](../misc/getType.md)看它的详细信息。
:::

## 判断步骤
1) 两个数组`arr1、arr2`长度是否相等，相等进入下一步，否则返回false
2) 对应索引下的两个元素的数据类型`typeof arr1[i] === typeof arr2[i]`是否相同，相同进入下一步，否则返回false
3) 逐一比较`arr1[i]、arr2[i]`  
  - boolean、string、number直接比较值是否相等  
  - null、undefined、function直接判断为相等
  - object、map、weakMap、set、weakSet比较每一个键值对是否相等
4) getType函数有可能返回`unknown`，当数组中存在数据类型为`unknown`时，直接判断两个数组不相等

## 源码
::: code-tabs#shell

@tab JS
```javascript
import { getType } from "../../misc/getType"

function isEqual(arr1 = [], arr2 = []) {
    const l1 = arr1.length
    const l2 = arr2.length

    if (l1 !== l2) return false

    let idx = -1

    while (++idx < l1) {
        const left = arr1[idx]
        const right = arr2[idx]
        const typeLeft = getType(left)
        const typeRight = getType(right)

        if (typeLeft !== typeRight) return false

        switch (typeLeft) {
            case "Number":
            case "String":
            case "Boolean": {
                if (left !== right) return false
                break
            }
            case "Undefined":
            case "Null":
            case "Function":
                break;
            case "Object": {
                const arr1: any[] = []
                for (const item of Object.entries(left)) {
                    arr1.push(item)
                }
                const arr2: any[] = []
                for (const item of Object.entries(right)) {
                    arr2.push(item)
                }
                if (arr1.length !== arr2.length) return false
                for (let i = 0; i < arr1.length; i++) {
                    const res = isEqual(arr1[i], arr2[i])
                    if (!res) return false
                }
                break
            }
            case "Array": {
                const res = isEqual(left, right)
                if (!res) return false
                break
            }
            case "Map":
            case "WeakMap": {
                if (left.size !== right.size) return false
                const arr1: any[] = []
                for (const item of left.entries()) {
                    arr1.push(item)
                }
                const arr2: any[] = []
                for (const item of right.entries()) {
                    arr2.push(item)
                }
                for (let i = 0; i < arr1.length; i++) {
                    const res = isEqual(arr1[i], arr2[i])
                    if (!res) return false
                }
                break
            }
            case "Set":
            case "WeakSet": {
                if (left.size !== right.size) return false
                const arr1: any[] = []
                for (const item of left.values()) {
                    arr1.push(item)
                }
                const arr2: any[] = []
                for (const item of right.values()) {
                    arr2.push(item)
                }
                const res = isEqual(arr1, arr2)
                if (!res) return false
                break
            }
            case "Symbol": {
                if (left.description !== right.description) return false
                break
            }
            case "unknown": {
                return false
            }
        }
    }
    return true
}
```

@tab TS
```typescript
import { getType } from "../../misc/getType"

function isEqual(arr1: any[] = [], arr2: any[] = []): boolean {
    const l1 = arr1.length
    const l2 = arr2.length

    if (l1 !== l2) return false

    let idx = -1

    while (++idx < l1) {
        const left = arr1[idx]
        const right = arr2[idx]
        const typeLeft = getType(left)
        const typeRight = getType(right)

        if (typeLeft !== typeRight) return false

        switch (typeLeft) {
            case "Number":
            case "String":
            case "Boolean": {
                if (left !== right) return false
                break
            }
            case "Undefined":
            case "Null":
            case "Function":
                break;
            case "Object": {
                const arr1: any[] = []
                for (const item of Object.entries(left)) {
                    arr1.push(item)
                }
                const arr2: any[] = []
                for (const item of Object.entries(right)) {
                    arr2.push(item)
                }
                if (arr1.length !== arr2.length) return false
                for (let i = 0; i < arr1.length; i++) {
                    const res = isEqual(arr1[i], arr2[i])
                    if (!res) return false
                }
                break
            }
            case "Array": {
                const res = isEqual(left, right)
                if (!res) return false
                break
            }
            case "Map":
            case "WeakMap": {
                if (left.size !== right.size) return false
                const arr1: any[] = []
                for (const item of left.entries()) {
                    arr1.push(item)
                }
                const arr2: any[] = []
                for (const item of right.entries()) {
                    arr2.push(item)
                }
                for (let i = 0; i < arr1.length; i++) {
                    const res = isEqual(arr1[i], arr2[i])
                    if (!res) return false
                }
                break
            }
            case "Set":
            case "WeakSet": {
                if (left.size !== right.size) return false
                const arr1: any[] = []
                for (const item of left.values()) {
                    arr1.push(item)
                }
                const arr2: any[] = []
                for (const item of right.values()) {
                    arr2.push(item)
                }
                const res = isEqual(arr1, arr2)
                if (!res) return false
                break
            }
            case "Symbol": {
                if (left.description !== right.description) return false
                break
            }
            case "unknown": {
                return false
            }
        }
    }
    return true
}
```

:::

## 参数、返回值

| 参数 | 类型 | 是否必填 | 默认值 | 说明 |
| :---: | :---: | :---: | :---: | :---: |
| arr1 | any[] | 是 | ---- | 第一个数组 |
| brr2 | any[] | 是 | ---- | 第二个数组 |

| 返回值类型 | 说明 |
| :---: | :---: |
| Boolean | 两个数组是否相同 |


