import tsParser from '@typescript-eslint/parser';

import formatConfig from './configs/format.mjs';

import baseConfig from '@tapie-kr/code-guideline-base';

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
const config = [
  {
    files:           ['**/*.{jsx,tsx}'],
    languageOptions: {
      ecmaVersion:   'latest',
      sourceType:    'module',
      parser:        tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: 'detect' } },
  },
  {
    ignores: [
      '**/.next/**',
      '**/next-env.d.ts',
    ],
  },
  ...baseConfig,
  formatConfig,
];

export default config;
