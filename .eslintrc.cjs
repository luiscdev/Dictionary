module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "space-before-function-paren": "off",
    "react/react-in-jsx-scope": "off",
    quotes: ["error", "double"],
    "@typescript-eslint/quotes": ["error", "double"],
    semi: "off",
    "@typescript-eslint/space-before-function-paren": ["error", "never"],
    "react/jsx-uses-react": "off",
  },
}
