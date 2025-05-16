import withNuxt from './.nuxt/eslint.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default withNuxt(
  {
    rules: {
      quotes: ['error', 'double', { avoidEscape: true }],
      'no-console': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
    },
  },
  eslintConfigPrettier, // Отключает ESLint-правила, конфликтующие с Prettier
  prettierPlugin // Добавляет Prettier как ESLint-плагин
);
