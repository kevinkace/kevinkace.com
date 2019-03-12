import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import css from "./index.module.css";

function splitByLineBreaks(str) {
  return str.split(" ").reduce((acc, cur, idx) => {
    if (idx) {
      acc.push(<br key={"br"}/>);
    }

    acc.push(cur);

    return acc;
  }, []);
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
