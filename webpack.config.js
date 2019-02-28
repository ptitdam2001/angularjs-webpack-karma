const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    stats: 'none',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    module: {
        strictExportPresence: true,
        rules: [
            // Load raw HTML files for templates
            {
                test: /\.(html)$/,
                loader: 'raw-loader'
            },
            // Load js files through Babel
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            // Load SASS & SCSS files
            {
                test: /\.(sass|scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 5000,
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/',
        hot: true,
        overlay: true,
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html',
            filename: 'index.html'
        })
    ]
};
