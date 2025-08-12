import { dirname } from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';

import { includeIgnoreFile } from '@eslint/compat';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfigs: js.configs.all,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  includeIgnoreFile(gitignorePath),
];

export default eslintConfig;
