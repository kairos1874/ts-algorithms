import React, { useState, useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import loadTheme from './sandboxTheme';

// interface

export default (prop) => {
  const monacoRef = useRef();
  let monacoEditor: any = null;

  function initMonaco() {
    loadTheme(monaco);

    monacoEditor = monaco.editor.create(monacoRef.current, {
      language: 'typescript',
      automaticLayout: true,
      theme: 'active4d',
      minimap: {
        enabled: false,
      },
      smoothScrolling: true,
      scrollBeyondLastLine: false,
    });
  }

  useEffect(() => {
    initMonaco();
  }, []);

  return <div ref={monacoRef}>this is sandbox</div>;
};
