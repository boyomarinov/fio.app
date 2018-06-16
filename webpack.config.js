const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolvePath = (folder) => path.resolve(__dirname, folder);

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: resolvePath('src/main.js'),
    output: {
        filename: 'bundle.js',
        path: resolvePath('./dist')
    },
    resolve: {
        alias: {
            'styl': resolvePath('src/styl'),
            '@': resolvePath('src')
        }
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { 
                test: /\.(png|svg|jpg)$/,
                exclude: [
                    resolvePath('src/assets/fonts'),
                    resolvePath('../node_modules/fio-font/fonts')
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            },
            { 
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                include: [
                    resolvePath('src/assets/fonts'),
                    resolvePath('../node_modules/fio-font/fonts')
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'FIO Lunch',
            template: resolvePath('src/index.html'),
            filename: resolvePath('./dist/index.html')
        })
    ]
}