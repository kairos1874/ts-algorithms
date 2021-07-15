import React, { useState, useEffect, useRef } from 'react';
import loadTheme from './sandboxTheme';

export default () => {
  const monacoRef = useRef();

  return <div ref={monacoRef}>this is sandbox</div>;
};
