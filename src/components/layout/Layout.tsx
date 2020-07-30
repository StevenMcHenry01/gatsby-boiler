// third party imports
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '@material-ui/core/styles'

// my imports
import Header from '../header/Header'
import Footer from  '../footer/Footer'
import './layout.scss'
import { theme } from '../../styles/theme'

const Layout = ({ children }: { children: any }) => {
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
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
