import typescript from '@typescript-eslint/eslint-plugin';

/**
 * @type {import('eslint').Linter.Config}
 */
const defaultConfig = {
  rules: {
    'no-console': ['warn',
      {
        allow: ['warn', 'error'],
      }],
    'no-debugger':          'error',
    'no-alert':             'error',
    'no-var':               'error',
    'no-duplicate-imports': 'error',
  },
};

/**
 * @type {import('eslint').Linter.Config}
 */
const typescriptConfig = {
  plugins: {
    '@typescript-eslint': typescript,
  },
  files: ['**/*.{ts,mts,cts,tsx}'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars':  ['error',
      {
        varsIgnorePattern:              '^_',
        caughtErrorsIgnorePattern:      '^_',
        destructuredArrayIgnorePattern: '^_',
        argsIgnorePattern:              '^_',
      }],
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
  plugins: {
    '@typescript-eslint': typescript,
  },
  files: ['**/*.{js,mjs,cjs,jsx}'],
  rules: {
    'no-unused-vars': ['error',
      {
        varsIgnorePattern:              '^_',
        caughtErrorsIgnorePattern:      '^_',
        destructuredArrayIgnorePattern: '^_',
        argsIgnorePattern:              '^_',
      }],
    'no-redeclare': 'error',
  },
};

export default [defaultConfig, typescriptConfig, javascriptConfig];
