const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const bootstrapEntryPoints = require('./webpack.bootstrap.config')
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
// const fileContent = require("php!./file.php");


const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: './dist'
});
const cssConfig = isProd ? cssProd : cssDev;

// const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {


    entry: {
        app: './src/js/main.js',
        // bootstrap: bootstrapConfig
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
       
    },


    module: {
        rules: [
            { test: /\.js/, use: 'imports-loader?define=>false' }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
            //  {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader', 'sass-loader'],
            //         publicPath: './dist'
            //             // ['style-loader,css-loader,sass-loader']
            //     })
            // },
            , {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: 'file-loader?name=img/[name].[ext]'

            }, {
                test: /\.ttf$/,
                use: 'file-loader?name=fonts/[name].[ext]'
            }
            // , { test: /\.(woff2?|svg)$/, use: 'url-loader?limit=10000' }, {
            //     test: /\.(ttf|eot)$/,use: 'file-loader'
            // }

        ]
    },
    plugins: [

        // new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        // new PurifyCSSPlugin({
        //     // Give paths to parse for rules. These should be absolute!
        //     paths: glob.sync(path.join(__dirname, './*.php'))
        // }),
        new ExtractTextPlugin({
            filename: 'application.css',
            // disabled: false,
            allChunks: true
        })

    ]




};
