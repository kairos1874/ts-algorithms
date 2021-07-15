export default async () => {
  const [html, javascript, css] = await Promise.all([
    import('!raw-loader!../index.html'),
    import('!raw-loader!./index.ts'),
    import('!raw-loader!../style.css'),
  ]);

  return {
    javascript: javascript.default,
    html: {
      code: html.default,
    },
    css: {
      code: css.default,
    },
    packages: {
      js: [],
    },
  };
};
