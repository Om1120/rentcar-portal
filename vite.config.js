import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'es-toolkit/compat/get': 'lodash-es/get.js',
      'es-toolkit/compat/omit': 'lodash-es/omit.js',
      'es-toolkit/compat/range': 'lodash-es/range.js',
      'es-toolkit/compat/maxBy': 'lodash-es/maxBy.js',
      'es-toolkit/compat/sumBy': 'lodash-es/sumBy.js',
      'es-toolkit/compat/sortBy': 'lodash-es/sortBy.js',
      'es-toolkit/compat/throttle': 'lodash-es/throttle.js',
      'es-toolkit/compat/minBy': 'lodash-es/minBy.js',
      'es-toolkit/compat/last': 'lodash-es/last.js',
      'es-toolkit/compat/isPlainObject': 'lodash-es/isPlainObject.js',
      'es-toolkit/compat/uniqBy': 'lodash-es/uniqBy.js',
    }
  }
})
