module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "vue/block-order": [
      "error",
      {
        order: ["template", "script", "style"],
      },
    ],
  },
};
