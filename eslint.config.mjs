import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  // 1. Base TypeScript rules (Strict + Stylistic for complete coverage)
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // 2. Next.js ESLint rules (wrapped via FlatCompat)
  ...compat.config({
    extends: [
      "next", 
      "next/core-web-vitals"
    ],
  }),

  // 3. Language & Type-Checking Options
  {
    languageOptions: {
      parserOptions: {
        // Tells the TypeScript parser to find and use your tsconfig.json
        projectService: true, 
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // 4. Custom Project Rules & Overrides
  {
    rules: {
      // Add custom rule overrides here
    },
  }
);
