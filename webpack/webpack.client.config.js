/**
 * Created by guiulianaheran on 23-01-17.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./source/client.js",
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2016', 'es2017', 'react'],
                    plugins: ['transform-es2015-modules-commonjs'
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules')
            }
        ]
    },
    output: {
        path: "./built/statics",
        filename: "app.js"
    },
    target: 'web',
    plugins: [
        new ExtractTextPlugin('../statics/styles.css'),
    ],
};
