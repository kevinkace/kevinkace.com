import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import css from "./index.module.css";

function splitByLineBreaks(str) {
  return str.split("").map((char, idx) => {
    return char === " " ?
      <br key={idx} /> :
      <span
        key={idx}
        style={{ animationDelay : `${Math.random() * 0.5 + 0.1}s` }}
        data-char={`${char}-${idx}`}
      >{char}</span>;
  })
};

function Header({ siteTitle, noHeader }) {
  return noHeader ? <div></div> : <header className={css.header}>
    <div className={css.fixed}>
      <h1 className={css.logotype}>
        <Link to="/">
          {splitByLineBreaks(siteTitle)}
        </Link>
      </h1>
    </div>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
