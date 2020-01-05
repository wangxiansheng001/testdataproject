const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const Vtc = require('vue-template-compiler');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-main.js'
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'main-styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({  // Also generate a test.html
            title: 'My Vue Title',
            filename: 'test.html',
            template: 'src/assets/test.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
            // chunkFilename: '[id].css',
        }),
        
        new VueLoaderPlugin(),
        // new Vtc(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader','vue-style-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, "./src"),
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                ]
            },
        ],

    },
    
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}