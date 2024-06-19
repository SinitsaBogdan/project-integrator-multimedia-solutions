const path = require('path');
const constants = require('./constants');
const multipage = require('./multipage.config');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildType = process.env.BUILD_TYPE ? process.env.BUILD_TYPE : constants.modes.dev;

const result = {};

const htmlPlugins = multipage.pages.map((page) => {
	return new HtmlWebpackPlugin({
		inject: true,
		template: page.template,
		filename: page.page,
		chunks: [...page.chunks],
	});
});

result.plugins = [
	new MiniCssExtractPlugin({
		filename: 'css/[name].css',
	}),
	...htmlPlugins,
	new CleanWebpackPlugin(),
];

result.module = {
	rules: [
		// TODO : Проблемный код
		// не формируются ссылки на другие html документы после запуска сервера
		{
			test: /\.html$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: 'pages/[name].[ext]'
					}
				}
			],
			exclude: path.resolve(__dirname, 'src/pages/home/Home.html'),
		},
		// TODO : -----------------
		{
			test: /\.js$/,
			use: 'babel-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.(png|jpg|gif)$/,
			type: 'asset/resource',
			generator: {
				filename: 'assets/img/[name]-[hash][ext][query]',
			},
		},
		{
			test: /\.(svg)$/,
			type: 'asset/resource',
			generator: {
				filename: 'assets/svg/[name]-[hash][ext][query]',
			},
		},
		{
			test: /\.(woff(2)?|eot|ttf|otf)$/,
			type: 'asset/resource',
			generator: {
				filename: 'assets/fonts/[name]-[hash][ext][query]',
			},
		},
		{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: { importLoaders: 1 },
				},
				'postcss-loader',
			],
		},
	],
};

result.optimization = {
	splitChunks: {
		chunks: 'all',
	},
};

if (buildType === constants.modes.prod) {
	result.optimization = {
		...result.optimization,
		minimize: true,
		minimizer: [new TerserPlugin()],
	};
}

module.exports = result;
