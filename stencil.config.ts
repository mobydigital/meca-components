import { Config } from '@stencil/core';
const sass = require('@stencil/sass');

export const config: Config = {
  namespace: 'mobylab-components',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/scss/variables.scss"]
    })
  ]
};
