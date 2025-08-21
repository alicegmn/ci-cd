// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react"; // 👈 lägg till
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    plugins: {
      react, // 👈 registrera pluginen
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // TS-parsern förstår TSX automatiskt på .tsx-filer,
      // men vill du vara explict kan du aktivera JSX:
      // parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      "react/jsx-no-undef": "error", // 👈 fångar <FailLint />
      "react/react-in-jsx-scope": "off", // för nya JSX-transformen
      "no-undef": "off", // TS hanterar detta bättre
    },
    settings: {
      react: { version: "detect" }, // bra att ha för vissa regler
    },
  },
]);
