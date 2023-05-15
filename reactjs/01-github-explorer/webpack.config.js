const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';


module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    // arquivo principal de entrada
    entry: path.resolve(__dirname, 'src', 'index.tsx' ),

    // arquivo que vai gerar com o webpack
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // para conseguir usar as extenssoes .jsx
    resolve:{
        extensions: ['.js', '.jsx', '.ts', '.tsx', ],
    },
    devServer:{
        static: path.resolve(__dirname, 'public'),
        hot: true,
    },
    plugins:[
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    //  configuracoes de como a aplicacao vai funcionar quando importar cada um
    // dos tipos de arquivos, quando importar arquivos .js, a forma de lidar vai ser de um jeito
    // css e imagem, vai ser de outra forma
    module: {
        rules:[
            {
                test:/\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        plugins:[
                            isDevelopment && require.resolve('react-refresh/babel')
                        ]
                    }
                }
            },
            {
                test:/\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ],
    }
}