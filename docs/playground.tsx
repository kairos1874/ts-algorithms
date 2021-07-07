import React from 'react';
import { LinkedList } from '../src/';

export default () => {
  let arr = [];
  // const result = delete arr[100]
  const res = arr.splice(4, 1, 5, 6);
  // debugger

  const linkedList = new LinkedList();
  linkedList.insert(5);

  debugger;
  return <h1 style={{ position: 'fixed', top: 0, left: 0 }}>我不会飞出去</h1>;
};
