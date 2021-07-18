const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'app.bundle.js'
	},
  resolve: {
    extensions: ['.js', '.jsx'],
		alias: {
			Components: path.resolve(__dirname, 'src/components'),
			Context: path.resolve(__dirname, 'src/context'),
			Data: path.resolve(__dirname, ''),
		}
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        use: [
          { 
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
          }
        ],
      },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		})
	]
}