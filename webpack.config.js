const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bootstrapEntryPoints = require('./webpack.bootstrap.config')
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');


const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: './dist'
});
const cssConfig = isProd ? cssProd : cssDev;

const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;
module.exports = {


    entry: {
        app: './src/js/main.js',
        bootstrap: bootstrapConfig
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },


    module: {
        rules: [
            { test: /\.js/, use: 'imports-loader?define=>false' }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader,sass-loader'],
                    publicPath: './dist'
                        // ['style-loader,css-loader,sass-loader']
                })
            }

        ]
    },
    plugins: [

        new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, './*.php'))
        }),
        new ExtractTextPlugin({
            filename: 'application.css',
            // disabled: false,
            allChunks: true
        })

    ]




};
