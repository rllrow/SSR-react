const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require("html-webpack-plugin");


/*-------------------------------------------------*/
const srcPath = path.resolve(__dirname, "./src/");
module.exports = {
  mode: ( 'development' === process.env.NODE_ENV ? 'development' : 'production' ),
  entry: ('development' === process.env.NODE_ENV ? path.resolve(srcPath, "index.dev.js") : path.resolve(srcPath, "index.prod.js")),
  output: {
    path: path.resolve( __dirname, 'dist' ),
    clean: true,
    filename: 'build/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'build/styles.css'
    } ),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: path.join(__dirname, 'src', 'index.html')
    }),
  ],

  resolve: {
    extensions: [ '.js', '.jsx', '.scss' ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/,
        }
      }
    }
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    open:true
  },
  devtool: 'source-map'

};