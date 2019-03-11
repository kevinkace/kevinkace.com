import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Cv from "../components/cv";

import css from "./index.module.css";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Kevin Cameron's contact and portfolio site"
      // keywords={[`gatsby`, `application`, `react`]}
    />

    <p className={css.overview}>
      I’m a full-stack web developer, specializing in front-end. I love building great things with brilliant people. I have an obsession with user experience, performance, and maintainable code.
    </p>

    <Cv />
  </Layout>
)

export default IndexPage;
