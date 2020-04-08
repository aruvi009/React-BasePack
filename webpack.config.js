const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
module.exports = function (env, options) {
  var value = JSON.parse(process.env.npm_config_argv);
  var code;
  if(value.cooked.length > 2) {
    var code = value.cooked[3];
  } else {
    code = 'dev';
  }

  return {
    performance: {
      maxEntrypointSize: 5120000,
      maxAssetSize: 5120000
    },
    //entry: path.join(__dirname, "src", "index.js"),
    entry: ['babel-polyfill', path.join(__dirname, "src", "index.js")],
    output: {
      path: path.join(__dirname, "build"),
      chunkFilename: "chunk-[name].[contenthash].js",
      filename: "bundle.js",
      //publicPath: "/sites/all/modules/custom/react_ui/ReactUI/",
      publicPath: ""
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader'
            }, 
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: []
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg|otf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name]-[hash:8].[ext]"
              }
            }
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      //https: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(__dirname, "public", "index.html")
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),

      new CopyPlugin([
        {
          from: 'assets/images/**/*',
          to: '',
        },
      ]),
    ],


    externals: {
      // 'Config': JSON.stringify('production' ? require('./config/config.' + code + '.json') : "")
    }
  }
};
