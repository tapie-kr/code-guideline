import stylistic from '@stylistic/eslint-plugin';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  plugins: { '@stylistic': stylistic },
  files:   ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
  rules:   { '@stylistic/padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev:      '*',
      next:      '*',
    },
    {
      blankLine: 'any',
      prev:      'import',
      next:      'import',
    },
    {
      blankLine: 'never',
      prev:      'singleline-export',
      next:      'singleline-export',
    },
    {
      blankLine: 'never',
      prev:      'singleline-const',
      next:      'singleline-const',
    },
    {
      blankLine: 'never',
      prev:      'let',
      next:      'let',
    },
  ] },
};

export default config;
