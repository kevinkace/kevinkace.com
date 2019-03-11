import React from "react";

import css from "./index.module.css";

import GithubIcon from "./icons/github.svg";
import InstagramIcon from "./icons/instagram.svg";
import LinkedinIcon from "./icons/linkedin.svg";
import TwitterIcon from "./icons/twitter.svg";

const footerLinks = [{
  href  : "https://github.com/kevinkace",
  label : "GitHub",
  icon  : <GithubIcon />
}, {
  href  : "https://linkedin.com/kevinkace",
  label : "LinkedIn",
  icon  : <LinkedinIcon />
}, {
  href  : "https://twitter.com/kevinkace",
  label : "Twitter",
  icon  : <TwitterIcon />
}, {
  href  : "https://instagram.com/kacekevin",
  label : "Instagram",
  icon  : <InstagramIcon />
}].map(({ href, label, icon }) =>
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
    {label}
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
