/**
 * Created by guiulianaheran on 23-01-17.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: "./source/server.js",
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
                    presets: ['latest-minimal', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules', 'isomorphic-style-loader')
            }
        ]
    },
    output: {
        path: "./built/server",
        filename: "index.js",
        publicPath: "/js/"
    },
    target: 'node',
    plugins: [
        new ExtractTextPlugin('../statics/styles.css'),
    ],
};
