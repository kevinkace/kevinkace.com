import adapter from '@sveltejs/adapter-netlify';

// import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions : [ '.md' ],
};


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions : [ '.svelte', '.md' ],
    preprocess : [
        // preprocess({
        //     // postcss : true,
        // }),
        vitePreprocess(), mdsvex(mdsvexOptions)
    ],
    kit : {
        adapter : adapter()
    }
};

export default config;
