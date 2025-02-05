import tsParser from '@typescript-eslint/parser';
import formatConfig from './configs/format.mjs';
import importConfig from './configs/import.mjs';
import paddingLineConfig from './configs/padding-line.mjs';
import restrictConfig from './configs/restrict.mjs';

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
const config = [
  { languageOptions: {
    ecmaVersion:   'latest',
    sourceType:    'module',
    parser:        tsParser,
    parserOptions: { ecmaFeatures: { jsx: true } },
  } },
  { ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
  ] },
  formatConfig,
  importConfig,
  paddingLineConfig,
  ...restrictConfig,
];

export default config;
