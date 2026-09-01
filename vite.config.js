import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'txt-utf8',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.split('?')[0].endsWith('.txt')) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          }
          next()
        })
      },
    },
  ],
})