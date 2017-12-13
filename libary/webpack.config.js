const path = require('path');
// const webpack = require('webpack');

// 自动创建html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理dist不用的文件   
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  entry: {
    main: './index.js'  
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    })

    //缓存 - 防止vendor随其他新模块添加修改 引起HASH变化
    // ,new webpack.HashedModuleIdsPlugin()  //适合生产环境
    // ,new webpack.NamedModulesPlugin()
    //缓存 -提取模板   
    // ,new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'       // 对应entry.vendor
    // })
    // // 代码分离-防止重复 
    // ,new webpack.optimize.CommonsChunkPlugin({
    //   name: 'runtime'
    // })

  ],
  output: {
    filename: 'webpack-numbers.js',
    path: path.resolve(__dirname, './dist'),

    // filename: '[name].[chunkhash].js',
    // chunkFilename: '[name].[chunkhash].js',
    // path: path.resolve(__dirname, 'dist')
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