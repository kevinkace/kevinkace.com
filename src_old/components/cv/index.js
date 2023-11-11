import React from "react";
import PropTypes from "prop-types";

import css from "./index.module.css";

import data from "./data";

function ListItem ({ attrs, idx }) {
  const { label, sole, href, desc } = attrs;

  return <li style={{ animationDelay : `${idx * 70 + 800}ms` }}>
    <h3>
        <a href={href} className={css.gradient}>
        {label}{false && sole ? <sup>*</sup> : ""}
      </a>
    </h3>
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

function List() {
  return <ul>
      {data.map((attrs, idx) =>
        <ListItem  key={attrs.label} attrs={attrs} idx={idx} />
      )}
    </ul>;
};

export default function Cv() {
  return (
    <div className={css.cv}>
      <h2>Projects</h2>

      <List />

      {/* <p className={css.small}>* sole contributor</p> */}
    </div>
  );
};
