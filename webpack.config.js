const path = require('path');
const port = process.env.port | 8081;
const HtmlWebpackplugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MinicssExtractPl = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    
    //mode: "development",
    entry: "./src/index.js",
    output: {
         path: path.join(__dirname,'dist'),
         filename:'output.js',
         clean: true,
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devServer:{
        host: 'localhost',
        port: port,
        historyApiFallback:true,
        open: true
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
    module: {
            rules: [
                {
                    test: /\.js|.jsx$/,
                    exclude: '/node_modules/',
                    use: ["babel-loader"]
                },
                {
                  test: /\.(sa|sc|c)ss$/,
                  exclude: '/node_modules/',
                  use: [
                    MinicssExtractPl.loader,
                    //"style-loader",
                    "css-loader",
                    "sass-loader"
                   ]
                },
                {
                  test: /\.png|.jpeg|.jpg|.svg|.webp$/,
                  use: [
                      {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext][query]',
                          },
                      },
                    ],
                  },
            
            ]
        },
    plugins:[

        new HtmlWebpackplugin({
            template: './public/index.html'
        }),
        new CopyPlugin({
            patterns: [
              { from: "public", to: "images" }
            ],
          }),
          new MinicssExtractPl({filename: '[name].[fullhash].css'}),

    ],
  

}