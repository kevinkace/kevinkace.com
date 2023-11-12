module.exports = () => ({
    plugins : [
        require('postcss-nested')(),
        require('postcss-color-mod-function')(),
        // require('postcss-composes'), // breaks majority of css
        require('postcss-import')(),
        // require('postcss-modules-values')(), // doesn't work with mq

        require('postcss-custom-media')()
    ],
});
