import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-light bg-light static-top">
    <div className="container"> 
      <Link to="/" className="navbar-brand">Mountain Side Library</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
           
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/catalog" className="nav-link">Catalog</Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/upcoming-events" className="nav-link">Upcoming Events</Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/how-you-can-help" className="nav-link">How You Can Help</Link>
        </li>
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
