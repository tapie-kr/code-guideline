import tsParser from '@typescript-eslint/parser';

import formatConfig from './configs/format.mjs';

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
const config = [
  {
    files:           ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType:  'module',
      parser:      tsParser,
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
    ],
  },
  formatConfig,
];

export default config;
