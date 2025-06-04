import { defineConfig } from '@rslib/core'

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: ['esnext', 'node 18'],
      dts: true,
    },
  ],
})
