export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  customSyntax: 'postcss-html',
  rules: {
    'block-no-empty': true,
    'unit-allowed-list': ['em', 'rem', '%', 's'],
  },
};
