var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        root: path.resolve('src/'),
        alias: {
            BlogFrontpage: 'containers/Blog/BlogFrontpage',
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
            actions: 'actions',
            appReducers: 'reducers',
            articleListReducers: 'reducers/articleList',
            ArticleAPI: 'api/articles'
        },
        modulesDirectory: ['node_modules', './src'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.json$/,
                loaders: ['json']
            },
            {
                test: /\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file"
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            }
        ]
    }
};
