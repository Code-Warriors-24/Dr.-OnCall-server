import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    rules: {
      'no-unused-vars': 2,
      'no-unused-expressions': 2,
      'prefer-const': 2,
      'no-console': 1,
    },
  },
  {
    ignores: ['node_modules/*', 'dist/*'],
  },
];
