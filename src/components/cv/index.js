import React from "react"

import css from "./index.module.css";

const list = [{
    label : "Lyrite",
    sole  : true,
    href  : "https://github.com/kevinkace/lyrite",
    desc  : "SPA for formatting lyrics. MithrilJs, modular-css, Webpack. Hosted on GitHub Pages at <a href='http://lyrite.com'>lyrite.com</a>."
}, {
    label : "Animation-Resolve",
    sole  : true,
    href  : "https://github.com/kevinkace/animation-resolve",
    desc  : "Tool providing a function that returns a Promise, which resolves when a CSS animation completes."
}, {
    label : "cssJoin",
    sole  : true,
    href  : "https://github.com/kevinkace/cssJoin",
    desc  : "Tool to conditionally join CSS classes."
}, {
    label : "PostHTML-Pseudo",
    sole  : true,
    href  : "https://npmjs.com/package/posthtml-pseudo",
    desc  : "PostHTML plugin to add pseudo classes (<span class='mono'>:first-child</span>, <span class='mono'>:last-child</span>, etc) to HTML (for use with HTML emails)."
}, {
    label : "SVG-Spritzer",
    sole  : true,
    href  : "https://npmjs.com/package/svg-spritzer",
    desc  : "Tool to join separate SVGs into a single sprite."
}, {
    label : "Crucible CMS",
    href  : "https://npmjs.com/package/crucible",
    desc  : "SPA, headless CMS backed by <a href='https://firebase.google.com'>Firebase</a>."
}, {
    label : "Mithril-SSG",
    sole  : true,
    href  : "https://github.com/kevinkace/mithril-ssg",
    desc  : "CLI static site generator for MithrilJs."
  }, {
      label : "kevinkace.dev",
      sole  : true,
      href  : "https://github.com/kevinkace/kevinkace.com",
      desc  : "Statically generated (Gatsby) portfolio site, hosted on Netlify."
}].map(({ label, sole, href, desc }, idx) =>
  <li key={label} style={{ animationDelay : `${idx * 100 + 800}ms` }}>
    <a href={href}>
      {label}{sole ? <sup>*</sup> : ""}
    </a>
    <p dangerouslySetInnerHTML={{ __html : desc }}/>
  </li>
);


const Cv = () => (
  <div className={css.cv}>
    <h2>Projects</h2>

    <ul>
      {list}
    </ul>

    <p className={css.small}>* sole contributor</p>
  </div>
)

export default Cv
