import React from "react"
import { Link } from "gatsby"
import SimpleLineIcons from "react-simple-line-icons"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <header className="masthead text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">A free library open for all.</h1>
        </div>
 
      </div>
    </div>
  </header>
  <section className="features-icons bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <div className="features-icons-icon d-flex">
              <i className="icon-calendar m-auto text-primary"></i>
            </div>
            <h3>Open 24/7/365</h3>
            <p className="lead mb-0">We're open year round. Just come by any time.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-book-open m-auto text-primary"></i>
            </div>
            <h3>Thousands of Titles </h3>
            <p className="lead mb-0">We have over six thousand titles available</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-badge m-auto text-primary"></i>
            </div>
            <h3>No Account necessary</h3>
            <p className="lead mb-0">Just come borrow a book. Return it when you can. We use the honor system.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="showcase">
    <div className="container-fluid p-0">
      <div className="row no-gutters">

        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: "url('img/our-books.jpg')"}}></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Many Titles Available</h2>
          <p className="lead mb-0">We have over 6000 titles available including many current best sellers! Have a book you read
            and loved? Donate it so others can enjoy it as well or check out amazon list.</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: "url('img/smaller-signy-sign-sign.jpg')"}}></div>
        <div className="col-lg-6 my-auto showcase-text">
          <h2>Over 100 Years of History</h2>
          <p className="lead mb-0">Founded in 1894 and built in 1904 throught he efforts of the Seelye - Eggleston Family and
            Andrew Carnegie</p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: "url('img/bg-showcase-3.jpg')"}}></div>
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Children's Story Hour</h2>
          <p className="lead mb-0">Are you a child? Do you have a child? If so come to the children's story hour (bring your
            child).
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="testimonials text-center bg-light">
    <div className="container">
      <h2 className="mb-5">Connect with us</h2>
      <div className="row">
        <div className="col-lg-6">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <h5>Mailing Address</h5>
            Friends of Mountainside Library<br /> PO Box 260<br /> Cleverdale
            <br /> NY 12820<br />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <h5>Physical Address</h5>
            Corner of Joshua Rock Rd and Ridge Rd<br />Lake George<br /> NY 12845<br />
          </div>
        </div>

      </div>
    </div>
  </section>

   <section className="call-to-action text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h2 className="mb-4">Ready to get started? Come sign out a book!</h2>
        </div>
      </div>
    </div>
  </section>
  </Layout>
)

export default IndexPage
