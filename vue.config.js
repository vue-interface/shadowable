module.exports = {
    transpileDependencies: [
        /@vue-interface\/.+/
    ],
    configureWebpack: {
        optimization: {
            usedExports: true,
        }
    }
};