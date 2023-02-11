const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode: mode,
    devtool: (mode === 'development') ? 'inline-source-map' : false,
    entry: {
        index: './src/js/index.js',
    },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['babel-plugin-styled-components'],
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
}