const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');// 自动创建html
const CleanWebpackPlugin = require('clean-webpack-plugin');// 清理dist不用的文件   


module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
     new HtmlWebpackPlugin({title: 'Production'}),
     new CleanWebpackPlugin(['dist'])   //dist不需要时会被清除
  ]
};