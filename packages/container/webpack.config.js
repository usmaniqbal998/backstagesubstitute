const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = (env) => {
    return {
        mode: env.production ? "production" : "development",
        entry: path.join(__dirname, "src", "index.js"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].[contenthash].js",
        },
        devtool: "inline-source-map",
        cache: false,
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },

            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "public", "index.html"),
            })
        ],
        devServer: {
            open: true,
            port: 3000,
            compress: true,
            hot: true,
            headers: {
                "Cache-Control": "no-store",
            },
        },
    };
};