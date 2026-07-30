import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "dist/**",
      "coverage/**",
      "node_modules/**",
    ],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  ...pluginVue.configs["flat/essential"],

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        sourceType: "module",
      },
    },
  },

  {
    files: ["src/views/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
]);