export default {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  preCommit: {
    eslint: true,
    prettier: true,
  },
  extraBabelPlugins: [
    ["@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ],
  ],
};
