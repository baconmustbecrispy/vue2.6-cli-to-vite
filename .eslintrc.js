module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'all',
        printWidth: 160,
        htmlWhitespaceSensitivity: 'strict',
        bracketSameLine: true,
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
  },
};
