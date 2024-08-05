import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    }
  }
];