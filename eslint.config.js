import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import { defineConfig, globalIgnores } from "eslint/config"
import { Quote } from "lucide-react"
import react from "eslint-plugin-react"

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        plugins: { react },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        rules: {
            quotes: ["warn", "double"],
            indent: ["warn", 4],
            "comma-dangle": ["error", "never"],
            semi: ["warn", "never"],
            "max-lines": ["error", {
                max: 200,
                skipBlankLines: true,
                skipComments: true,
            }],
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "object-curly-spacing": ["error", "always"],
            "react/jsx-curly-spacing": ["error", { "when": "always", "children": true }],
            "react/jsx-key": "error",
            "react/no-unused-prop-types": "warn",
            "react/jsx-no-useless-fragment": "warn",
            "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }]
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
])
