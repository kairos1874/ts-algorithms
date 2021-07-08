---
title: 单向链表
nav:
  title: 数据结构
  path: /data-structures
group:
  title: 链表
  path: /linked-list
---

# 链表

## 基本概念

在计算机科学中, 一个 **链表** 是数据元素的线性集合, 元素的线性顺序不是由它们在内存中的物理位置给出的。 相反, 每个元素指向下一个元素。它是由一组节点组成的数据结构,这些节点一起,表示序列。

在最简单的形式下，每个节点由数据和到序列中下一个节点的引用(换句话说，链接)组成。这种结构允许在迭代期间有效地从序列中的任何位置插入或删除元素。

更复杂的变体添加额外的链接，允许有效地插入或删除任意元素引用。链表的一个缺点是访问时间是线性的(而且难以管道化)。

更快的访问，如随机访问，是不可行的。与链表相比，数组具有更好的缓存位置。

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## 基本使用

```ts
import { LinkedList } from '@hyrule/ts-algorithms';

const linkedList = new LinkedList<number>();
linkedList.push(1);
```

或者

```ts
interface IFish {
  name: string;
  swim(): void;
}
const linkedList = new LinkedList<IFish>();

const fish: Ifish = {
  name: 'tom',
  swim() {
    console.log('i am swimming!');
  },
};

linkedList.push(fish);
```

## 构造方法 constructor

接受判断元素相等的函数作为入参

```ts
class Person {
  constructor(public name: string, public id: string) {
    this.name = name;
    this.id = id;
  }

  toString () {
    return `${this.name}'s id is ${this.id}`
  }
}

function equalFn(a, b) {
  return a === b || a.id === b || a = b.id || a.id === b.id
}

const players = new LinkedList<Person>(equalFn);
players.push(new Person('Jack', 23));
players.push(new Person('Mary', 18));
// 根据 id 即可找到对于的元素
players.remove(23) // 移除 Jack
```

## 方法

#### push(...)

```ts
push(element: T): void
```

往链尾推入一个元素

#### getElementAt(...)

```ts
getElementAt(index: number): T | undefined
```

获取第 index 个元素

#### insert(...)

```ts
insert(element: T, index: number): boolean
```

往 index 的位置插入元素

#### removeAt(...)

```ts
removeAt(index: number): T | undefined
```

移除第 index 个元素

#### remove(...)

```ts
remove(element: T): T | undefined
```

移除元素，根据 constructor 中的 equalFn 来判断是那个元素的

#### indexOf(...)

```ts
indexOf(element: T): number
```

获取元素在链表中的位置，-1 代表不存在

#### isEmpty()

```ts
isEmpty() : boolean
```

判断链表是否为空

#### size()

```ts
size() : number
```

返回链表的元素数量，类似 Array 的 length

#### getHead()

```ts
getHead() : T
```

获取链头的元素

#### clear()

```ts
clear() : void
```

清空链表

#### toString()

```ts
toString() : string
```

转为字符串
