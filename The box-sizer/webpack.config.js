const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
 
module.exports = {
    entry: './src/index.tsx',
    mode: 'development', 
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'index.js' 
    },
    devServer: { 
        contentBase: 'build/static/',
        contentBasePublicPath: '/static',
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        hotOnly: true,
        inline: true,
        port: 8080,
        clientLogLevel: 'warning'
    },
    resolve: { 
        extensions: [ '.js', '.ts', '.tsx' ]
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: [ /node_modules/ ],
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader', options: { url: false } }
                ]
            },
            {
                test: /\.(svg|png|jpe?g)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defer: 'index.js'
        }),
        new HotModuleReplacementPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/**/*.css', to: 'static/styles/style.css' },
                { from: './src/assets', to: 'static/', noErrorOnMissing: true }
            ]
        })
    ]
}
