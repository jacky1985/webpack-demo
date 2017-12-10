const path = require('path');
// 自动创建html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理dist不用的文件   
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
    ,publicPath:'/'     //中间件服务器启用此句
  },
  plugins: [
     new HtmlWebpackPlugin({title: 'Output Management'}),
     // new CleanWebpackPlugin(['dist'])   //会删除webpack-server启动 下的dist
  ],
  devServer: {
      contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: [
         'file-loader'
       ]
     },
      {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       }
    ]
  }

};