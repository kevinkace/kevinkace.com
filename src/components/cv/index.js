import React from "react";
import PropTypes from "prop-types";

import css from "./index.module.css";

import data from "./data";

const ListItem = ({ attrs, idx }) => {
  const { label, sole, href, desc } = attrs;

  return <li style={{ animationDelay : `${idx * 100 + 800}ms` }}>
    <a href={href}>
      {label}{sole ? <sup>*</sup> : ""}
    </a>
    <p dangerouslySetInnerHTML={{ __html : desc }}/>
  </li>
};

ListItem.propTypes = {
  attrs : PropTypes.object,
  idx   : PropTypes.number
};

ListItem.defaultProps = {
  attrs : {},
  idx   : 0
};

const list = data.map((attrs, idx) =>
  <ListItem  key={attrs.label} attrs={attrs} idx={idx} />
);

const Cv = () => (
  <div className={css.cv}>
    <h2>Projects</h2>

    <ul>
      {list}
    </ul>

    <p className={css.small}>* sole contributor</p>
  </div>
);

export default Cv;
