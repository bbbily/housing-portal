const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public"
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./public",
        proxy: {
          "/api/": {
            target: "http://localhost:3000",
            secure: false
          }
        }
    },
    module: {
        loaders: [
            {
                test: /\.s?css$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "babel-preset-es2015",
                            "babel-preset-react"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
