import importNewLines from 'eslint-plugin-import-newlines';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  plugins: {
    'simple-import-sort': simpleImportSort,
    'import-newlines':    importNewLines,
    'unused-imports':     unusedImports,
  },
  settings: { 'import/resolver': {
    typescript: {},
    node:       { extensions: [
      '.js',
      '.mjs',
      '.cjs',
      '.jsx',
      '.ts',
      '.mts',
      '.cts',
      '.tsx',
    ] },
  } },
  rules: {
    'simple-import-sort/imports': [
      'error',
      { groups: [
        ['^.+\\.css$'],
        [
          '^@cottons-kr/react-foundation',
          '@tapie-kr/inspire-react',
          '^@/components/(?!.*?/shared$)',
        ],
        [
          '^@?\\w',
          '^@/',
          '^\\.',
        ],
        ['^\\u0000'],
      ] },
    ],
    'import-newlines/enforce':          ['error', { items: 3 }],
    'unused-imports/no-unused-imports': 'error',
    'no-restricted-imports':            ['error', { patterns: ['../*'] }],
    'no-restricted-syntax':             [
      'error',
      {
        selector: ':not(ImportDeclaration[source.value=/\.css$/]) > ImportNamespaceSpecifier',
        message:  'Importing entire module is not allowed.',
      },
    ],
  },
};

export default config;
