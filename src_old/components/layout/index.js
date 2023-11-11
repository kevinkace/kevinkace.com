import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../header";
import Footer from "../footer";
import css from "./index.module.css"

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ noHeader, children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              header
            }
          }
        }
      `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.header} noHeader={noHeader} />
          <div className={css.content}>

            <main>{children}</main>

            <Footer />

          </div>
          {/* <video
            className={css.videoBg}
            autoPlay
            muted
            loop
          >
            <source src={'../../../bg.mp4'} type='video/mp4'></source>
          </video> */}
        </>
      )}
    />
  );
};
