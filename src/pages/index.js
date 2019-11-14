import React from "react";

import Layout from "../components/layout";
import SEO    from "../components/seo";
import Cv     from "../components/cv";

import css from "./index.module.css";
import { Link } from "gatsby";

export default function IndexPage() {
  return <Layout>
    <SEO
      title="Kevin Cameron's contact and portfolio site"
      // keywords={[`gatsby`, `application`, `react`]}
    />

    <p className={css.overview}>
      I’m a full-stack web developer, specializing in front-end. I love building great things with brilliant people. I'm obsessed with user experience, performance, and maintainable code.
    </p>

    <Cv />

    <Link to={"/resume"} className={css.button}>Full resume</Link>

  </Layout>
};
