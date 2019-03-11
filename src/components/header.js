import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import css from "./header.module.css";

const Header = ({ siteTitle }) => (
  <header className={css.header}>
    <div className={css.fixed}>
      <h1 className={css.logotype}>
        <Link className={css.link} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
