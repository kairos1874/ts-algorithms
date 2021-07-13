import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import styles from './index.less';

export default () => {
  let code = `
    import { Stack } from '@hyrule/ts-algorithms';

    const stack = new Stack<number>();
    stack.push(2);
    stack.push(3);
    
    stack.peek();
    stack.pop();
  `;

  const options = {
    selectOnLineNumbers: true,
  };

  function onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  function editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  return (
    <div className={styles.container}>
      <div className={styles.side}>this is side area</div>
      <div className={styles.editor}>
        <MonacoEditor
          width="700"
          height="600"
          language="typescript"
          theme="vs"
          value={code}
          options={options}
          onChange={onChange}
          editorDidMount={editorDidMount}
        />
      </div>
      <div className={styles.log}>this is log</div>
    </div>
  );
};
