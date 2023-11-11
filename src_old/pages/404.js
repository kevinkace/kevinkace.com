import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default function NotFoundPage() {
  return <Layout>
    <SEO title="404: Not found" />
    <h1>404 :[</h1>
    <p>Perhaps I could interest you in the <Link to='/'>home page</Link>, or my <Link to='/resume'>resume</Link>?</p>
  </Layout>;
};
