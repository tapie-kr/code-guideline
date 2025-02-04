import { defineConfig } from 'tsup';
import { dependencies, peerDependencies } from './package.json';

export default defineConfig({
  entry:        ['index.mjs'],
  outDir:       'dist',
  format:       ['esm', 'cjs'],
  target:       'node20',
  minify:       false,
  outExtension: ({ format }) => format === 'esm'
    ? { js: '.mjs' }
    : { js: '.cjs' },
  dts:      true,
  external: [...Object.keys(peerDependencies || {}), ...Object.keys(dependencies || {})],
});
