import React, { useState, useEffect, useRef } from 'react';

export default () => {
  return (
    <div>
      选择语言
      <select>
        <option value="javascript">javascript</option>
        <option value="typescript">typescript</option>
      </select>
      | 选择主题
      <select>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
      <button>run</button>
    </div>
  );
};
