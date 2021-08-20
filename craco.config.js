const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1AAE9F',
              '@text-color': '#293845',
              '@select-border-color': '#D3D3D3FF',
              '@border-width-base': '1px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};