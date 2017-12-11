const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({
    	sourceMap: true
    }),
    // 像 react 这样的 library，在添加此 DefinePlugin 插件后，你应该看到 bundle 大小显著下降。
    new webpack.DefinePlugin({
    	'process.env':{ 
    		'NODE_ENV':JSON.stringify('production')

    	}
    })
  ]
});