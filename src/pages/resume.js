import React from "react";
import { graphql, Link } from 'gatsby'

import BackIcon    from "../components/layout/back.svg";
import DownloadIcon from "../components/layout/download.svg";

import Layout from "../components/layout";
import SEO    from "../components/seo";

import css from "./index.module.css";

export default function ResumePage({ data }) {
    return (
        <Layout noHeader={true}>
            <SEO title="Kevin Cameron's Resume" />

            <div className={css.links}>
                <Link to="/" className={css.back}><BackIcon/>back</Link>
                <a href="/resume.md"><DownloadIcon/>markdown</a>
            </div>

            <div className={css.resume} dangerouslySetInnerHTML={{ __html : data.markdownRemark.html }}>
            </div>
        </Layout>
    );
}

export const query = graphql`
    {
        markdownRemark(children: {}, frontmatter: {title: {}}) {
            html
            frontmatter {
                title
            }
        }
    }
`;
