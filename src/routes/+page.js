import { cv }    from '$lib/data/cv.js';
import { title } from '$lib/data/common.js';

/** @type {import('./$types').LayoutLoad} */
export function load() {
    return {
        title,
        cv
    };
}
