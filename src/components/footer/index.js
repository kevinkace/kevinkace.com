import React from "react";

import css from "./index.module.css";

import GithubIcon from "./icons/animated/github.svg";
// import InstagramIcon from "./icons/animated/instagram.svg";
import LinkedinIcon from "./icons/animated/linkedin.svg";
import TwitterIcon from "./icons/animated/twitter.svg";
import CodePen from "./icons/animated/codepen.svg";

const footerLinks = [{
  href  : "https://github.com/kevinkace",
  label : "GitHub",
  icon  : <GithubIcon />
}, {
  href  : "https://codepen.io/kevinkace",
  label : "CodePen",
  icon  : <CodePen />
}, {
  href  : "https://www.linkedin.com/in/kevinkace/",
  label : "LinkedIn",
  icon  : <LinkedinIcon />
}, {
  href  : "https://twitter.com/kevinkace",
  label : "Twitter",
  icon  : <TwitterIcon />
// }, {
//   href  : "https://instagram.com/kacekevin",
//   label : "Instagram",
//   icon  : <InstagramIcon />
}].map(({ href, label, icon }) =>
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
);

const Footer = () => (
    <footer className={css.footer}>
      <nav>
          {footerLinks}
      </nav>
    </footer>
);

export default Footer;
