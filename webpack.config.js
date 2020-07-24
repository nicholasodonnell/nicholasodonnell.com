const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    inline: true,
    port: 3000
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/react']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets'
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './public/favicon.ico'
    })
  ],
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src/actions/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      constants: path.resolve(__dirname, 'src/constants.js'),
      reducer: path.resolve(__dirname, 'src/reducer.js'),
      state: path.resolve(__dirname, 'src/state.js')
    }
  }
}
