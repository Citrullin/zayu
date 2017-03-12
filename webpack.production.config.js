var path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css')
    ],
    resolve: {
        modules: [
            path.resolve('src/'),
            "node_modules"
        ],
        alias: {
            BlogFrontPage: 'containers/Blog/BlogFrontPage',
            AboutMe: 'containers/Personal/AboutMe',
            CV: 'containers/Personal/CV',
            ActionTypes: 'constants/ActionTypes',
            BlogConfigurations: 'constants/BlogConfigurations',
            APIEndpointConfiguration: 'constants/APIEndpointConfiguration',
            ActionTypeCreationHelper: 'constants/ActionTypeCreationHelper',
            BlogHeader: 'components/Header/Header',
            NavigationBar: 'components/Navigation/NavigationBar',
            NavigationBarElement: 'components/Navigation/NavigationElement',
            App: 'App',
            AppRouter: 'AppRouter',
            appReducers: 'reducers',
            articleListReducer: 'reducers/articleList',
            ArticleAPI: 'api/articles',
            AboutMeAPI: 'api/aboutMe',
            URLChangeFlowHandler: 'middleware/URLChangeFlowHandler'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.woff$|\.ttf$|\.wav$|\.mp3$/,
                use: [{
                    loader: "file-loader"
                }]
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
                    },
                    {
                        loader: 'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    }
};
