import adapter from '@sveltejs/adapter-netlify';

// import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess : [
        // preprocess({
        //     // postcss : true,
        // }),
        vitePreprocess()
    ],
    kit : {
        adapter : adapter()
    }
};

export default config;
