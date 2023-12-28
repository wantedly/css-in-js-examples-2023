const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CompiledExtractPlugin } = require('@compiled/webpack-loader');

module.exports = {
  entry: {
    basic: './src/basic.tsx',
    parameterized: './src/parameterized.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: '@compiled/webpack-loader',
            options: {
              extract: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CompiledExtractPlugin(),
  ],
};
