import React, { useState, useEffect, useRef } from 'react';
import styles from './index.less';

import DemoList from '../components/demoList';
import Sandbox from '../components/sandbox';
import Toolbar from '../components/toolbar';

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <DemoList />
      </div>
      <div className={styles.editor}>
        <div className={styles.toolbar}>
          <Toolbar />
        </div>
        <div className={styles.code}>
          <Sandbox />
        </div>
      </div>
      <div className={styles.log}>this is log</div>
    </div>
  );
};
