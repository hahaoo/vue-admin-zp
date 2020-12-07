module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars": ["error", {"args": "none" }]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        mocha: true
      }
    }
  ],
  extends: ["plugin:vue/essential", "@vue/prettier"]
};
