import stylistic from '@stylistic/eslint-plugin'
/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/jsx-child-element-spacing': 'off',

    '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],

    '@stylistic/jsx-closing-tag-location': ['error', 'line-aligned'],

    '@stylistic/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'never',
      propElementValues: 'always',
    }],

    '@stylistic/jsx-curly-newline': ['error', 'consistent'],

    '@stylistic/jsx-curly-spacing': ['error', 'never', {
      allowMultiline: false,
    }],

    '@stylistic/jsx-equals-spacing': ['error', 'never'],

    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

    '@stylistic/jsx-function-call-newline': ['error', 'multiline'],

    '@stylistic/jsx-indent': ['error', 2],

    '@stylistic/jsx-indent-props': ['error', 2],

    '@stylistic/jsx-max-props-per-line': ['error', {
      maximum: 2,
      when: 'multiline',
    }],

    '@stylistic/jsx-newline': ['error', {
      prevent: true,
      allowMultiline: true,
    }],

    '@stylistic/jsx-one-expression-per-line': ['error', {
      allow: 'non-jsx',
    }],

    '@stylistic/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      allowNamespace: true,
    }],

    '@stylistic/jsx-props-no-multi-spaces': 'error',

    '@stylistic/jsx-quotes': ['error', 'prefer-single'],

    '@stylistic/jsx-self-closing-comp': 'error',

    '@stylistic/jsx-sort-props': ['error', {
      ignoreCase: true,
      callbacksLast: true,
      shorthandFirst: true,
      multiline: 'last',
      noSortAlphabetically: true,
      reservedFirst: true,
    }],

    '@stylistic/jsx-tag-spacing': ['error', {
      closingSlash: 'allow',
      beforeClosing: 'never',
    }],

    '@stylistic/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      propertyValue: 'parens'
    }],
  },
}

export default config
