import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['eslint.config.mjs', 'prettier.config.mjs'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  minify: true,
  outExtension: ({ format }) => (format === 'esm' ? { js: '.mjs' } : { js: '.cjs' }),
});
