const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

module.exports = {
    entry: "./src/js/index.js",

    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(js)$/,
                use: "babel-loader",
            },

            {
                test: /\.(svg)$/,
                use: "svg-url-loader"
            },
        ],
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: `./src/index.html`,
            chunks: ['main']
          }),

          new HtmlWebpackInlineSVGPlugin(),

    ],
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
};