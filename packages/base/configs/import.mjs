import importPlugin from 'eslint-plugin-import';

import simpleImportSort from 'eslint-plugin-simple-import-sort';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  plugins: {
    import:               importPlugin,
    'simple-import-sort': simpleImportSort,
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node:       {
        extensions: [
          '.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx',
        ],
      },
    },
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^.+\\.css$'],
          ['^@cottons-kr/react-foundation', '^@/components/(?!.*?/shared$)'],
          ['^@?\\w', '^@/', '^\\.'],
          ['^\\u0000'],
        ],
      },
    ],
  },
};

export default config;
