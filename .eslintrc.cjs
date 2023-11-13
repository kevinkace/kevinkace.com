module.exports = {
    root          : true,
    extends       : [ 'eslint:recommended', 'plugin:svelte/recommended', 'arenanet' ],
    parserOptions : {
        sourceType          : 'module',
        ecmaVersion         : 'latest',
        extraFileExtensions : [ '.svelte' ]
    },
    env : {
        browser : true,
        es2017  : true,
        node    : true
    },
    rules : {
        quotes : [ 'error', 'single', { avoidEscape : true }],
    }
};
