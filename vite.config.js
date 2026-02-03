import {viteStaticCopy} from 'vite-plugin-static-copy'

export default {
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `fonts/[name].js`,
        chunkFileNames: `fonts/[name].js`,
        assetFileNames: `fonts/[name].[ext]`
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/lucide/dist/umd/lucide.min.js',
          dest: 'icons',
        },
      ],
    }),
  ],
}
