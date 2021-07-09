import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'ts-algorithms',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/ts-algorithms',
  navs: [
    null,
    {
      title: 'github',
      path: 'https://github.com/aishen1874/ts-algorithms',
    },
  ],
});
