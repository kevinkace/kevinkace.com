module.exports = () => ({
    plugins: [
        require(`postcss-nested`)(),
        require(`postcss-color-mod-function`)()
    ],
});
