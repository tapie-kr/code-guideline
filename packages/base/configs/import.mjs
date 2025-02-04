import importNewLines from 'eslint-plugin-import-newlines';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  plugins: {
    'simple-import-sort': simpleImportSort,
    'import-newlines':    importNewLines,
  },
  settings: { 'import/resolver': {
    typescript: {},
    node:       { extensions: [
      '.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx',
    ] },
  } },
  rules: {
    'simple-import-sort/imports': [
      'error',
      { groups: [
        ['^.+\\.css$'],
        ['^@cottons-kr/react-foundation', '^@/components/(?!.*?/shared$)'],
        ['^@?\\w', '^@/', '^\\.'],
        ['^\\u0000'],
      ] },
    ],
    'import-newlines/enforce': ['error',
      { 'max-len': 120 }],
  },
};

export default config;
