const path = require('path');
// const webpack = require('webpack');

// 自动创建html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理dist不用的文件   
// const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = {
  entry: {
    index: './src/index.js'
    // , another: './src/another-module.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    })
    // , new webpack.optimize.CommonsChunkPlugin({
    //    name: 'common' 
    // })

  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
 
  // devServer: {
  //     contentBase: './dist'
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         'style-loader',
  //         'css-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(png|jpg|gif)$/,
  //       use: [
  //         {
  //           loader: 'file-loader',
  //           options: {}
  //         }
  //       ]
  //     },
  //    {
  //      test: /\.(woff|woff2|eot|ttf|otf)$/,
  //      use: [
  //        'file-loader'
  //      ]
  //    },
  //     {
  //        test: /\.(csv|tsv)$/,
  //        use: [
  //          'csv-loader'
  //        ]
  //      },
  //      {
  //        test: /\.xml$/,
  //        use: [
  //          'xml-loader'
  //        ]
  //      }
  //   ]
  // }

};