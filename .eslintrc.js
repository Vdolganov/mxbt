module.exports = {
  root: true,
  env: { node: true },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: { ecmaVersion: 2020 },
  rules: {
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: true },
        ObjectExpression: {
          multiline: true,
          minProperties: 6,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 6,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 6,
        },
      },
    ],
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
  },
};
