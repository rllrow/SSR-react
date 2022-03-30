const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require("html-webpack-plugin");


/*-------------------------------------------------*/
const srcPath = path.resolve(__dirname, "./src/");
module.exports = {

  // режим webpack оптимизации
  mode: ( 'development' === process.env.NODE_ENV ? 'development' : 'production' ),
  entry: ('development' === process.env.NODE_ENV ? path.resolve(srcPath, "index.dev.js") : path.resolve(srcPath, "index.prod.js")),
  // выходные файлы и чанки
  output: {
    path: path.resolve( __dirname, 'dist' ),
    clean: true,
    filename: 'build/[name].js',
  },

  // module/loaders configuration
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

  // webpack плагины
  plugins: [

    // выделение css во внешний файл таблицы стилей
    new MiniCssExtractPlugin( {
      filename: 'build/styles.css'
    } ),

    // подготовка HTML файла с ресурсами
    new HtmlWebpackPlugin({
      title: 'My App',
      template: path.join(__dirname, 'src', 'index.html')
    }),
  ],

  // настройка распознавания файлов
  resolve: {

    // расширения файлов
    extensions: [ '.js', '.jsx', '.scss' ],
  },

  // webpack оптимизации
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          chunks: 'all', // both : consider sync + async chunks for evaluation
          name: 'vendor', // имя чанк-файла
          test: /node_modules/, // test regular expression
        }
      }
    }
  },

  // настройки сервера разработки
  devServer: {
    port: 3001,
    historyApiFallback: true,
    open:true
  },

  // генерировать source map
  devtool: 'source-map'

};