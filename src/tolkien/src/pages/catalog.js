import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Catalog = () => (
  <Layout>
    <SEO title="Catalog" />    <header className="masthead-secondary text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">Catalog</h1>
        </div>
 
      </div>
    </div>
  </header>
    <p>Welcome to Catalog</p>

  </Layout>
)

export default Catalog
