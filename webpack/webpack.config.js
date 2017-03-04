import path from 'path';
import webpack from 'webpack';
import reporter from 'postcss-reporter';
import cssNext from 'postcss-cssnext';

const rootFolder = path.resolve(__dirname, '..');
const config = {
  context: rootFolder,

  entry: {
    main: './src/client'
  },

  output: {
    path: path.resolve(rootFolder, 'static/assets'),
    publicPath: '/assets/',
    filename: '[name].[hash].js'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        use: 'file-loader'
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NoErrorsPlugin(),

    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          cssNext({
            browsers: ['last 1 version']
          }),
          reporter
        ]
      }
    })
  ],

  resolve: {
    extensions: ['*', '.js', '.css', '.html'],
    modules: ['src', 'node_modules'],
    alias: {
      app: path.resolve(rootFolder, 'src/app')
    }
  }
};

export default config;
