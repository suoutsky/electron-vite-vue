module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'esnext',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#supported-rules
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    semi: ['error', 'always'],
    quotes: ['warn', 'single'],
  },
  ignorePatterns: [
    'node_modules/**',
    'dist/**',
    'release/**',
    '.github',
    '.vscode',
    'docker*',
    'vite.config.ts',
    '.eslintrc.js',
  ],
}
