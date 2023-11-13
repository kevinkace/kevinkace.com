/**
 * Build the title for the page
 * @param {string} title
 * @param {string} [value]
 * @returns {string}
 */
export function pageTitle(title, value) {
    if (!value || value === title) {
        return title;
    }

    return `${title} | ${value}`;
}
