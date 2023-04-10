const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        // should use babel-loader for all ts js tsx and jsx files
        test: /\.(jsx|js)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        // should use style-loader and css-loader for all css files
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // v5 supports image loaders out of box
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
    resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
      new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['**/*', '!index.html'],
  }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
};
