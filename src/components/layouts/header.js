import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container } from 'semantic-ui-react'

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
