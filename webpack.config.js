const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Specify the static directory
    port: 9000,
    open: true,
  },
  // commented because to check webpack plugins is working
  // optimization: {

  //   splitChunks: {
  //     chunks: 'all',
  //     name: 'vendors', // Provide a name for the common chunks
  //   },
  // },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: [{ loader: 'url-loader' }, { loader: 'file-loader' }],
      },
    ],
  },
};
