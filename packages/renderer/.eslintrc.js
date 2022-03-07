module.exports = {
  env: {
    browser: true,
    node: false,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'esnext',
    project: ['./tsconfig.json'],
    // FIXME:
    // Error: Error while loading rule '@typescript-eslint/await-thenable': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
    // Occurred while linting /electron-vue-vite/packages/renderer/src/App.vue
    extraFileExtensions: ['vue'],
  },
  extends: ['plugin:vue/vue3-recommended'],
  // https://eslint.vuejs.org/rules/
  rules: {
    'vue/no-unused-vars': 'error',
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/component-api-style': ['error', ['script-setup']],
    semi: ['error', 'always'],
  },
  ignorePatterns: ['node_modules/**', 'vite.config.ts'],
}
