/**
 * Created by guiulianaheran on 23-01-17.
 */

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
            }
        ]
    },
    output: {
        path: "./built/server",
        filename: "index.js",
        publicPath: "/js/"
    },
    target: 'node',
};