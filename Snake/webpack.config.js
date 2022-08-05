const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "index.js",
        // 告诉webpack不使用箭头,兼容ie浏览器
        environment:{
            arrowFunction: false,
            const: false
        },
        clean: true  // 每次重构代码
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets:[[
                                "@babel/preset-env",
                                {
                                    // 指定corejs的版本
                                    "corejs":"3",
                                    // 使用corejs的方式 "usage" 表示按需加载
                                    "useBuiltIns":"usage"
                                }
                            ]]
                        }
                    },
                    "ts-loader"
                ],
                exclude: /node_modules/,
            },
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env", // 能解决大多数样式兼容性问题
                                ],
                            },
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"public/index.html")
        })
    ],
    resolve: {  // 支持模块化
        extensions: ['.ts', '.js']
    },
    devServer: {
        host:"localhost",
        port:"3000",
        open:true
    },
    mode:"production"
}