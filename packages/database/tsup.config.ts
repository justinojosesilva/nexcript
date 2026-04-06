import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: [
    '@prisma/adapter-pg',
    '@prisma/client',
    '@prisma/client-runtime-utils',
    /generated\/client/,
  ],
})
