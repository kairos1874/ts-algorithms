---
title: 栈
nav:
  title: 数据结构
  path: /data-structures
group:
  title: 栈
  path: /stack
---

# 栈

## 基本概念

栈是一种遵从 **后进先出（LIFO, Last In First Out）** 原则的 **有序集合**,是一种线性数据结构, 新添加和待删除的元素都保存在同一端，称为栈顶，而另一端就叫做栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

生活中，很多栈的例子。以前打了粮食，会放到一个筒形的容器里，这个筒形的容器，大家叫它栈。它的特点是先放进去的粮食要最后才能取出来，后放进去的粮食是最先被取出来。

栈作为一种数据结构，是一种只能在一端进行插入和删除操作的特殊线性表。栈具有记忆作用，对栈的插入与删除操作中，不需要改变栈底指针。所以栈可以用来在函数调用的时候存储断点。

## 基本使用

```ts
import { Stack } from '@hyrule/ts-algorithms';

const stack = new Stack<number>();
stack.push(2);
stack.push(3);

stack.peek();
stack.pop();
```

## 方法

### push(...)

```ts
push(element: T): void
```

往栈添加一个元素

### pop()

```ts
pop(): T | undefined
```

从栈移除元素，并删除返回的元素

### peek()

```ts
peek(): T | undefined
```

查看栈顶元素

### isEmpty()

```ts
isEmpty() : boolean
```

判断栈是否为空

### size()

```ts
size() : number
```

返回栈的元素数量，类似 Array 的 length

### clear()

```ts
clear() : void
```

清空栈

### toString()

```ts
toString() : string
```

转为字符串
