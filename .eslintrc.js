module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    wx: true,
    swan: true,
    tt: true,
    my: true,
    uni: true,
    getCurrentPages: true,
    getApp: true,
    __wxConfig: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    // '@vue/airbnb',
    // 'airbnb-base',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'], // space here to support sprockets directives
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-undef': 'error',
    'no-label-var': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],
    'prettier/prettier': [
      'error',
      // 如果插件配置中修改了相关选项，
      // 则必须在此添加相对应的自定义规则否则就会出现编辑器格式化后ESlint检查无法通过的情况。
      {
        useTabs: false,
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        printWidth: 120,
        htmlWhitespaceSensitivity: 'ignore',
        vueIndentScriptAndStyle: false,
        trailingComma: 'es5',
        arrowParens: 'always',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
