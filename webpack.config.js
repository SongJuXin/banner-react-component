var path=require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
module.exports={
    entry:'./app/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css/,
                loader:'style!css'
            },
            {
                test: /\.(png|jpg|gif)/,
                loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]',
                /*query: { mimetype: "image/png" }*/
            }
        ]
    },
    /*devServer:{
        inline:true,
        stats:{colors:true},
        port:80,
        contentBase:'./build'
    },
    plugins:[
        //创建一个自动产出html的插件
        new HtmlWebpackPlugin({
            //指定生成依据的模板
            template:'./app/index.html'
        }),
        //创建一个自动打开浏览器的插件
        new OpenBrowserWebpackPlugin({
            url:'http://localhost:80'
        })
    ]*/
}