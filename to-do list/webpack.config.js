const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HTMLWebpackPlugin({           
            template: './index.html',
        }),

       new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpeg|gif|svg)$/,
                use: ['file-loader'], 
            },
            {
                test: /\.(otf|ttf)$/,
                use: ['file-loader']
            }
        ],
    },
}