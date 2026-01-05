import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const moduleFederationOptions = {
  name: '_components',
  exposes: {
    './Button': './src/button/Button.tsx',
    './Theme': './src/theme/Theme.ts',
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: '^18.3.1',
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: '^18.3.1',
    },
    '@emotion/react': {
      singleton: true,
      eager: true,
      requiredVersion: '^11.14.0',
    },
    '@emotion/styled': {
      singleton: true,
      eager: true,
      requiredVersion: '^11.14.0',
    },
  },
};

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationOptions)],
  server: {
    port: 3002,
  }
});
