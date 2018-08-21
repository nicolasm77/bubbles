/*
VOIR LE FICHIER webpack.dev.js PRÉSENT DANS LE DOSSIER setup POUR UNE VERSION COMMENTÉE
*/

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: {
        main: './src/index.js',
        anims: './src/anims.js'
    },
    output: {
        filename: '[name].js',
        path: buildPath
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate : true
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        // creates style tag in html
                        loader: "style-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: {
			        loader: 'svg-url-loader',
			        options: {}
			    }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        })
    ]
};
