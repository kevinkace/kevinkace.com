import React from "react";

import css from "./index.module.css";

import data from "./data.js";

function FooterLinks() {
  return <nav data-noprint>
    {data.map(({ href, label, icon }) =>
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={css.floatOff}
      >
        {icon}
        <span>{label}</span>
      </a>
    )}
  </nav>;
}

export default function Footer() {
  return (
    <footer className={css.footer}>
      <FooterLinks />
    </footer>
  );
};
