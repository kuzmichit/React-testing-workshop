/**
 * npm install --save-dev globals @eslint/js eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-prettier eslint-config-prettier prettier 
 **/

import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  eslintReact.configs.flat.recommended,

  {
    plugins: {
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ["dist", "node_modules", "coverage", "eslint.config.mjs"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
        ...globals.jest,
      },
      parserOptions: {
        parserOptions: eslintReact.configs.recommended.parserOptions,
      },
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" },
      ],
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "max-lines": ["warn", { max: 124 }],
      "max-params": ["error", 3],
      "prefer-const": 1,
      "no-unused-vars": "warn",
      "newline-before-return": 2,
      // "quotes": ["error", "single", { "avoidEscape": true }],
      'react/react-in-jsx-scope': 0,
      'react/no-find-dom-node': 2,
      "prettier/prettier": ["error", { "endOfLine": "lf" }],
      "prettier/prettier": ["error", { "singleQuote": true, "avoidEscape": true } ],
			"prettier/prettier": ["error", {"endOfLine": "auto"} ],
    },
  },
];
