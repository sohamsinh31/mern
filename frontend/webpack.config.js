var path = require('path');
var webpack = require('webpack');

module.exports = {

    // Set 'context' for Rails Asset Pipeline
    context: __dirname,

    entry: {
        App: [
            'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            './app/frontend/javascripts/app.js' // Your appʼs entry point
        ],
        vendor: ['jquery', 'react', 'react-dom', 'react-redux', 'redux','redux-thunk']
    },

    devtool: 'inline-source-map',

    // Require the webpack and react-hot-loader plugins
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin(
        {
            name: 'vendor',
            chunks: [''],
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=es2015&presets[]=react'
                ],
                cacheDirectory: true
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'app', 'assets', 'javascripts', 'webpack'), // Save to Rails Asset Pipeline
        filename: 'bundle.js', // Will output App_wp_bundle.js
        publicPath: 'http://localhost:8080/assets/webpack',

        //publicPath: 'http://localhost:8080/assets/webpack' // Required for webpack-dev-server
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules'],
    },
    experiments: {
        topLevelAwait: true
      }

};