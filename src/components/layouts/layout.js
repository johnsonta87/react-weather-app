/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from 'semantic-ui-react'
import Header from "./header"
import 'semantic-ui-css/semantic.min.css'
import '../../theme/theme.scss'
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="app">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="app-main">
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
