module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  // globals: {
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  //   actor: 'readonly',
  //   Feature: 'readonly',
  //   Scenario: 'readonly',
  // },
  rules: {
    'import/extensions': 'off',
  },
};
