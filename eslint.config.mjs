import { nextConfig } from "eslint-config-next/flat";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...nextConfig,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
