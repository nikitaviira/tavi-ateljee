module.exports = {
  root: true,
  reportUnusedDisableDirectives: true,
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: 'vuetify',
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': 'error',
    curly: 'error',
    'eol-last': 'error',
    eqeqeq: 'error',
    'linebreak-style': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'no-var': 'error',

    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: ['const', 'let', 'block-like', 'directive', 'import'],
      next: '*'
    }, {
      blankLine: 'always',
      prev: '*',
      next: ['const', 'let', 'return', 'block-like']
    }, {
      blankLine: 'never',
      prev: ['singleline-const', 'singleline-let'],
      next: ['singleline-const', 'singleline-let']
    }, {
      blankLine: 'never',
      prev: 'directive',
      next: 'directive'
    }, {
      blankLine: 'never',
      prev: 'import',
      next: 'import'
    }, {
      blankLine: 'never',
      prev: 'case',
      next: 'case'
    }, {
      blankLine: 'always',
      prev: 'block-like',
      next: 'case'
    }],

    quotes: ['error', 'single'],

    // disabled in favor of @typescript-eslint
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'func-call-spacing': 'off',
    'init-declarations': 'off',
    'keyword-spacing': 'off',
    'lines-between-class-members': 'off',
    'no-dupe-class-members': 'off',
    'no-duplicate-imports': 'off',
    'no-empty-function': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-invalid-this': 'off',
    'no-loss-of-precision': 'off',
    'no-magic-numbers': 'off',
    'object-curly-spacing': 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',

    // Rules from `@typescript-eslint/eslint-plugin`

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'off',

    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/brace-style': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/comma-dangle': 'error',
    '@typescript-eslint/comma-spacing': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',

    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as'
    }],

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'no-public'
    }],

    '@typescript-eslint/explicit-module-boundary-types': ['error', {
      shouldTrackReferences: true
    }],

    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/init-declarations': 'error',
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/member-naming': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/method-signature-style': 'error',

    '@typescript-eslint/naming-convention': ['error', {
      selector: 'variableLike',
      format: ['strictCamelCase', 'UPPER_CASE']
    }, {
      selector: 'parameter',
      format: ['strictCamelCase']
    }, {
      selector: ['interface', 'enum', 'class', 'typeParameter'],
      format: ['StrictPascalCase']
    }, {
      selector: 'enumMember',
      format: ['UPPER_CASE']
    }],

    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    '@typescript-eslint/no-extra-parens': ['error', 'all', {
      nestedBinaryExpressions: false
    }],

    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars-experimental': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'off', // we're using requires for vue-loader
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/sort-type-union-intersection-members': 'off',

    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'off',

    '@typescript-eslint/triple-slash-reference': ['error', {
      path: 'never',
      types: 'never',
      lib: 'never'
    }],

    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/unified-signatures': 'error'
  },
  overrides: [{
    files: ['*.vue'],

    rules: {
      '@typescript-eslint/indent': 'off'
    }
  }]
};
