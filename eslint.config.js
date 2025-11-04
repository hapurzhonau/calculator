import js from '@eslint/js';
import unicorn from 'eslint-plugin-unicorn';

export default [
  {
    ignores: ['node_modules', 'dist', '.husky', '**/*.html'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    plugins: {
      unicorn,
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'unicorn/prevent-abbreviations': 'error',
      'unicorn/prefer-dom-node-append': 'error',
      'unicorn/prefer-dom-node-remove': 'error',
      'unicorn/prefer-module': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-set-has': 'error',
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: false,
        },
      },
    },
  },
];
