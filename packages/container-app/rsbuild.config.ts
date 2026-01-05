import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const moduleFederationOptions = {
  name: '_container',
  remotes: {
    _components: '_components@http://localhost:3002/mf-manifest.json',
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
    port: 3001,
  }
});
