import typescript from '@typescript-eslint/eslint-plugin';

/**
 * @type {import('eslint').Linter.Config}
 */
const defaultConfig = {
  rules: {
    'no-console':              ['warn', { allow: ['warn', 'error'] }],
    'no-debugger':             'error',
    'no-alert':                'error',
    'no-var':                  'error',
    'no-unused-vars':          'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-duplicate-imports':    'error',
    'no-undef':                'off',
    'no-redeclare':            'off',
  },
};

/**
 * @type {import('eslint').Linter.Config}
 */
const typescriptConfig = {
  plugins: { '@typescript-eslint': typescript },
  files:   ['**/*.{ts,mts,cts,tsx}'],
  rules:   {
    '@typescript-eslint/no-explicit-any':         'error',
    '@typescript-eslint/no-unused-vars':          ['error', { varsIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer:                  'type-imports',
        fixStyle:                'inline-type-imports',
        disallowTypeAnnotations: true,
      },
    ],
  },
};

/**
 * @type {import('eslint').Linter.Config}
 */
const javascriptConfig = {
  plugins: { '@typescript-eslint': typescript },
  files:   ['**/*.{js,mjs,cjs,jsx}'],
  rules:   {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-undef':       'off',
  },
};

export default [defaultConfig, typescriptConfig, javascriptConfig];
