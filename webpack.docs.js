/*
VOIR LE FICHIER webpack.prod.js PRÉSENT DANS LE DOSSIER setup POUR UNE VERSION COMMENTÉE
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const buildPath = path.resolve(__dirname, 'docs');
const stagingPath = "";

module.exports = {
	devtool: '',
	entry: {
		docs: './src/docs.js',
	},
	output: {
		filename: '[name].js',
		path: buildPath,
		publicPath: stagingPath
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						attrs: ['img:src', 'link:href'],
						root: path.resolve(__dirname, 'src'),
						interpolate: true,
						removeAttributeQuotes: false
					},
				}]
			},
			{
				test: /\.(png|jpg)$/,
				exclude: /node_modules/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/',
					publicPath: stagingPath + "/assets"
				}
			},
			{
				test: /\.(scss|css|sass)$/,
				use: [{
						loader: MiniCssExtractPlugin.loader
					},
					{
						// translates CSS into CommonJS
						loader: "css-loader",
						options: {
							sourceMap: false
						}
					},
					{
						// translates CSS into CommonJS
						loader: "postcss-loader"
					},
					{
						// compiles Sass to CSS
						loader: "sass-loader",
						options: {
							outputStyle: 'expanded',
							sourceMap: false,
							sourceMapContents: false
						}
					}
				]
			},
			{
				test: /\.(woff|woff2)$/,
				use: [{
					//génère les fichiers + remplace le chemin par celui du fichier généré
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/',
						publicPath: stagingPath + "/fonts"
					}
				}]
			},
			{
				test: /\.svg$/,
				use: {
					loader: 'svg-url-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'assets/',
						publicPath: stagingPath + "assets"
					}
				}
			}
		]
	},
	plugins: [
		//plugin de génération de fichier HTML (gère les includes HTML présent)
		new HtmlWebpackPlugin({
			template: './src/docs.html',
			// Injecte le bundle à la fin du fichier (avant </body>)
			inject: "body"
		}),

		new CleanWebpackPlugin(buildPath),

		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			publicPath: stagingPath + "/css",
			sourceMap: false
		}),

		new OptimizeCssAssetsPlugin({
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				map: {
					inline: false,
				},
				discardComments: {
					removeAll: true
				}
			},
			canPrint: true
		})
	]
};