import { defineConfig } from 'tsup';
import { peerDependencies, dependencies } from './package.json';

export default defineConfig({
  entry: ['eslint.config.mjs', 'prettier.config.mjs'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  target: 'node20',
  minify: false,
  outExtension: ({ format }) => (format === 'esm' ? { js: '.mjs' } : { js: '.cjs' }),
  dts: true,
  external: [...Object.keys(peerDependencies || {}), ...Object.keys(dependencies || {})],
});
