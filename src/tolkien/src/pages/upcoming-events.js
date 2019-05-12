import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const UpcomingEvents = () => (
  <Layout>
    <SEO title="Upcoming Events" />
    <header className="masthead-secondary text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">Upcoming Events</h1>
        </div>
 
      </div>
    </div>
  </header>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UpcomingEvents
