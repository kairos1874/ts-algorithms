import React, { useState, useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import loadTheme from './sandboxTheme';
import styles from './index.less';

export default () => {
  const [code, setCode] = useState('');
  const monacoRef = useRef();

  let monacoEditor = null;

  function onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  function editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  async function loadJs() {
    const javascriptCode = await import('!raw-loader!../../demos/stack/index');

    if (monacoEditor) {
      monacoEditor.setValue(javascriptCode.default);
    }
  }

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
    loadJs();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.side}>this is side area</div>
      <div className={styles.editor} ref={monacoRef}></div>
      <div className={styles.log}>this is log</div>
    </div>
  );
};
