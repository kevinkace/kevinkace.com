import resume from '$lib/data/resume.md';

console.log(resume.render());

/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        resume : resume.render()
    };
}
