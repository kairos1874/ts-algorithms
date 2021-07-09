import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'ts-algorithms',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/ts-algorithms/',
  publicPath: '/ts-algorithms/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  hash: true,
  navs: [
    null,
    {
      title: 'github',
      path: 'https://github.com/aishen1874/ts-algorithms',
    },
  ],
});
