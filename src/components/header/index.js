import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import css from "./index.module.css";

function splitByLineBreaks(str) {
  return str.split("").map((char, idx) => {
    return char === " " ?
      <br key={idx} /> :
      <span key={idx} style={{ animationDelay : `${Math.random() + 0.4}s` }}>{char}</span>;
  })
};

const Header = ({ siteTitle }) => (
  <header className={css.header}>
    <div className={css.fixed}>
      <h1 className={css.logotype}>
        <Link to="/">
          {splitByLineBreaks(siteTitle)}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
