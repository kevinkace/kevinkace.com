import React from "react";
import { graphql, Link } from 'gatsby'

import BackIcon from "../components/layout/back.svg";

import Layout from "../components/layout";
import SEO    from "../components/seo";

import css from "./index.module.css";

const ResumePage = ({ data }) => {
    return (
        <Layout noHeader={true}>
            <SEO title="Kevin Cameron's Resume" />

            <Link to="/" className={css.back}><BackIcon/>back</Link>
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
`

export default ResumePage;
