import React from 'react';
import { LinkedList } from '../src/';

export default () => {
  let arr = [];
  // const result = delete arr[100]
  const res = arr.splice(4, 1, 5, 6);
  // debugger

  const linkedList = new LinkedList();
  linkedList.insert(5, 1);

  return <div>this is playground page</div>;
};
