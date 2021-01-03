const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const path = require("path");
// let htmlPageNames = ['blizniaczki', 'blizniaczki-profil', 'blizniaczki-opis', 'blizniaczki-urodziny'];
// let multipleHtmlPlugins = htmlPageNames.map(name => {
//   return new HtmlWebpackPlugin({
//     template: `./src/${name}.html`, // relative path to the HTML files
//     filename: `${name}.html`, // output HTML files
//     chunks: [`${name}`] // respective JS filesurodziny
//   })
// });

module.exports = {
    watch: true,
    mode: 'development',
    entry: [
        "./src/index.js",
        "./src/index.html",
        "./src/styles/style.scss",
        "./src/blog.html",
        "./src/blog-entry.html",
        "./src/shop-catalogue.html",
        "./src/shop-product.html",
        "./src/shop-basket.html",
        "./src/shop-order.html",
        "./src/shop-order-complete.html",
        "./src/kawiarnie.html",
        "./src/palarnia.html",
    ],
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'js/app.bundle.js',
        publicPath:  '',
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: false }
              }
            ]
        },
        {
            test: /\.scss$/,
            use: [{
               loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: "css-loader"
            }, {
                loader: "postcss-loader"
            }, {
                loader: "sass-loader"
            }],
        },
        {
            test: /\.(jpg|jpeg|gif|png|svg|mp4)$/,
            exclude: /node_modules/,
            loader:'url-loader?limit=1024&name=images/[name].[ext]'
        }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/blog.html",
            filename: "./blog.html"
          }),
        new HtmlWebPackPlugin({
          template: "./src/blog-entry.html",
          filename: "./blog-entry.html"
        }),
        new HtmlWebPackPlugin({
          template: "./src/shop-catalogue.html",
          filename: "./shop-catalogue.html"
        }),
        new HtmlWebPackPlugin({
          template: "./src/shop-product.html",
          filename: "./shop-product.html"
        }),
        new HtmlWebPackPlugin({
          template: "./src/shop-basket.html",
          filename: "./shop-basket.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/shop-order.html",
            filename: "./shop-order.html"
          }),
        new HtmlWebPackPlugin({
          template: "./src/shop-order-complete.html",
          filename: "./shop-order-complete.html"
        }),
        new HtmlWebPackPlugin({
          template: "./src/kawiarnie.html",
          filename: "./kawiarnie.html"
        }),
        new HtmlWebPackPlugin({
          template: "./src/palarnia.html",
          filename: "./palarnia.html"
        }),

    
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
   
        new CopyPlugin([
            { from: './src/images', to: './images' },
            { from: './src/js', to: './js'}
        ]),
      ]
  };
  