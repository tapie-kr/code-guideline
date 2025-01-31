import stylistic from '@stylistic/eslint-plugin';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  plugins: { '@stylistic': stylistic },
  rules:   {
    '@stylistic/array-bracket-newline': ['error', 'consistent'],

    '@stylistic/array-bracket-spacing': ['error', 'never'],

    '@stylistic/array-element-newline': ['error',
      {
        consistent: true,
        multiline:  true,
      }],

    '@stylistic/arrow-parens': ['error', 'as-needed'],

    '@stylistic/arrow-spacing': ['error',
      {
        after:  true,
        before: true,
      }],

    '@stylistic/block-spacing': ['error', 'always'],

    '@stylistic/brace-style': ['error', '1tbs'],

    '@stylistic/comma-dangle': ['error', 'always-multiline'],

    '@stylistic/comma-spacing': ['error',
      {
        after:  true,
        before: false,
      }],

    '@stylistic/comma-style': ['error', 'last'],

    '@stylistic/computed-property-spacing': ['error', 'never'],

    '@stylistic/curly-newline': ['error', 'always'],

    '@stylistic/dot-location': ['error', 'property'],

    '@stylistic/eol-last': ['error', 'always'],

    '@stylistic/function-call-argument-newline': ['error', 'consistent'],

    '@stylistic/function-call-spacing': ['error', 'never'],

    '@stylistic/function-paren-newline': ['error',
      { minItems: 5 }],

    '@stylistic/generator-star-spacing': ['error',
      {
        after:  true,
        before: false,
      }],

    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

    '@stylistic/indent': ['error', 2],

    '@stylistic/indent-binary-ops': ['error', 2],

    '@stylistic/key-spacing': ['error',
      {
        align: {
          beforeColon: false,
          afterColon:  true,
          mode:        'minimum',
          on:          'value',
        },
      }],

    '@stylistic/keyword-spacing': ['error',
      {
        before: true,
        after:  true,
      }],

    '@stylistic/line-comment-position': ['error',
      {
        position:                   'above',
        applyDefaultIgnorePatterns: false,
      }],

    '@stylistic/linebreak-style': ['error', 'unix'],

    '@stylistic/lines-around-comment': ['error',
      {
        beforeLineComment:          true,
        allowClassStart:            false,
        allowClassEnd:              false,
        allowObjectStart:           false,
        allowObjectEnd:             false,
        allowArrayStart:            false,
        allowArrayEnd:              false,
        allowEnumStart:             false,
        allowEnumEnd:               false,
        allowInterfaceStart:        false,
        allowInterfaceEnd:          false,
        allowModuleStart:           false,
        allowModuleEnd:             false,
        allowTypeStart:             false,
        allowTypeEnd:               false,
        applyDefaultIgnorePatterns: false,
        afterHashbangComment:       true,
      }],

    '@stylistic/lines-between-class-members': ['error',
      {
        enforce: [
          {
            blankLine: 'never',
            prev:      'method',
            next:      'method',
          },
        ],
      }],

    '@stylistic/max-len': ['error',
      {
        code:                   100,
        tabWidth:               2,
        comments:               100,
        ignoreComments:         false,
        ignoreTrailingComments: false,
        ignoreUrls:             true,
        ignoreStrings:          true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals:   true,
      }],

    '@stylistic/max-statements-per-line': ['error',
      {
        max:          1,
        ignoredNodes: ['BreakStatement', 'ContinueStatement', 'ReturnStatement'],
      }],

    '@stylistic/member-delimiter-style': 'error',

    '@stylistic/multiline-comment-style': ['error', 'starred-block'],

    '@stylistic/multiline-ternary': ['error', 'always-multiline'],

    '@stylistic/new-parens': ['error', 'never'],

    '@stylistic/newline-per-chained-call': ['error',
      { ignoreChainWithDepth: 2 }],

    '@stylistic/no-confusing-arrow': ['error',
      {
        allowParens:        false,
        onlyOneSimpleParam: true,
      }],

    '@stylistic/no-extra-parens': ['error',
      'all',
      {
        nestedBinaryExpressions:         false,
        ternaryOperandBinaryExpressions: false,
        ignoreJSX:                       'multi-line',
        nestedConditionalExpressions:    false,
      }],

    '@stylistic/no-extra-semi': 'error',

    '@stylistic/no-floating-decimal': 'error',

    '@stylistic/no-mixed-operators': ['error',
      { allowSamePrecedence: false }],

    '@stylistic/no-mixed-spaces-and-tabs': 'error',

    '@stylistic/no-multi-spaces': ['error',
      {
        exceptions: {
          Property:        true,
          ImportAttribute: true,
        },
      }],

    '@stylistic/no-multiple-empty-lines': ['error',
      {
        max:    1,
        maxBOF: 0,
        maxEOF: 1,
      }],

    '@stylistic/no-tabs': 'error',

    '@stylistic/no-trailing-spaces': 'error',

    '@stylistic/no-whitespace-before-property': 'error',

    '@stylistic/nonblock-statement-body-position': ['error', 'beside'],

    '@stylistic/object-curly-newline': ['error',
      { multiline: true }],

    '@stylistic/object-curly-spacing': ['error',
      'always',
      { arraysInObjects: true }],

    '@stylistic/object-property-newline': 'error',

    '@stylistic/one-var-declaration-per-line': ['error', 'always'],

    '@stylistic/operator-linebreak': ['error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      }],

    '@stylistic/padded-blocks': ['error', 'never'],

    '@stylistic/padding-line-between-statements': ['error',
      {
        blankLine: 'always',
        prev:      '*',
        next:      '*',
      }],

    '@stylistic/quote-props': ['error', 'as-needed'],

    '@stylistic/quotes': ['error',
      'single',
      { avoidEscape: true }],

    '@stylistic/rest-spread-spacing': 'error',

    '@stylistic/semi': 'error',

    '@stylistic/semi-spacing': ['error',
      {
        before: false,
        after:  true,
      }],

    '@stylistic/semi-style': 'error',

    '@stylistic/space-before-blocks': 'error',

    '@stylistic/space-before-function-paren': ['error',
      {
        anonymous:  'never',
        named:      'never',
        asyncArrow: 'always',
      }],

    '@stylistic/space-in-parens': 'error',

    '@stylistic/space-infix-ops': 'error',

    '@stylistic/space-unary-ops': 'error',

    '@stylistic/spaced-comment': ['error', 'always'],

    '@stylistic/switch-colon-spacing': 'error',

    '@stylistic/template-curly-spacing': 'error',

    '@stylistic/template-tag-spacing': 'error',

    '@stylistic/type-annotation-spacing': 'error',

    '@stylistic/type-generic-spacing': 'error',

    '@stylistic/type-named-tuple-spacing': 'error',

    '@stylistic/wrap-iife': ['error', 'inside'],

    '@stylistic/wrap-regex': 'error',

    '@stylistic/yield-star-spacing': ['error', 'after'],
  },
};

export default config;
