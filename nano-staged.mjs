export default {
  // eslint
  'packages/**/*.{js,ts,tsx,vue}': 'eslint --cache --fix',
  // typecheck
  'packages/renderer/**/{*.ts,*.tsx,*.vue}': () =>
    'npm run typecheck',
}
