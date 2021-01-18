// webpack.config.js example
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index_other.html",
            filename: "../templates/index.html"
         })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.inline.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    output: {
        publicPath: '',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'static'),
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}