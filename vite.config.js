import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const plugins = [react()]

  if (mode === 'development') {
    plugins.push(basicSsl())
  }

  return {
    plugins,
  }
})
