import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <header className="masthead-secondary text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">About Us</h1>
        </div>
 
      </div>
    </div>
  </header>

<div className="container">

<p>
        The library has a long and rich history.  Edward Eggleston a noted 19th century writer and historian, conceived the idea for it in 1894.
    </p>

    <p>
        Elwyn Seelye - Edward's son in law - donated the parcel of land for the building.  Their descendants still live on the adjacent property and help maintain the library.
    </p>

    <p>The library is an original Carnegie Library.  Mountainside was built in 1904 with funds from private donors and Andrew Carnegie, the famous industrialist.  Carnegie established 2500 public libraries around the world between 1883 and 1929.</p>

</div>

  </Layout>
)

export default About
