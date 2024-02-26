### Note: Need to add steps how to configure webpack. 

# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm run start:dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:9000) to view it in your browser.

### `npm run build`

### Install webpack devDependencies configuration 

npm install @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin react react-dom style-loader uglifyjs-webpack-plugin url-loader webpack webpack-cli webpack-dev-server

### webpack configuration list 
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
 
