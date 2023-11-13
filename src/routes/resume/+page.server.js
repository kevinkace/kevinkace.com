import resume from '$lib/data/resume.md';

/** @type {import('./$types').PageServerLoad} */
export function load() {
    return {
        resume : resume.render(),
        meta   : {
            title : 'resume'
        }
    };
}
