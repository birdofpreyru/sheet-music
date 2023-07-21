var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        opensheetmusicdisplay: [
            './src/polyfills.ts',
            './src/index.ts'
        ] // Main index (OpenSheetMusicDisplay and other classes)
    },
    externals: [
        'jszip',
        'loglevel',
        'typescript-collections'

        /* VexFlow should be bundled-in to not have to separately handle it
         * at the server side (the VexFlow itself is not compiled from ES6). */
        // 'vexflow'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        library: 'opensheetmusicdisplay',
        libraryTarget: 'umd',

        // Workaround to fix umd build, restore webpack v3 behaviour
        // https://github.com/webpack/webpack/issues/6677
        // https://github.com/webpack/webpack/issues/6642
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
        fallback: {
          util: false,
        },
    },
    module: {
        rules: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                // loader: 'awesome-typescript-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.glsl$/,
                type: "asset/source",
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.EnvironmentPlugin({
            STATIC_FILES_SUBFOLDER: false, // Set to other directory if NOT using webpack-dev-server
            DEBUG: false,
            DRAW_BOUNDING_BOX_ELEMENT: false //  Specifies the element to draw bounding boxes for (e.g. 'GraphicalLabels'). If 'all', bounding boxes are drawn for all elements.
        }),
    ],
    devServer: {
        static: [
            path.join(__dirname, 'test/data'),
            path.join(__dirname, 'build'),
        ],
        port: 8000,
        compress: false
    }
}
