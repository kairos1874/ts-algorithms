import React, { useState, useEffect, useRef } from 'react';
import demoList from '../../../demos/demoList';

export default () => {
  function switchCode(src) {}

  return (
    <div>
      {demoList.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.label}</div>
            {item?.demos
              ? item.demos.map((subItem, subIndex) => {
                  return (
                    <div key={subIndex} onClick={() => switchCode(subItem.src)}>
                      {subItem.label}
                    </div>
                  );
                })
              : null}
          </div>
        );
      })}
    </div>
  );
};
