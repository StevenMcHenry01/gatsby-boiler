// 3rd party imports
import React from 'react'
import { Link } from 'gatsby'

// my imports
import Layout from '../components/layout/Layout'
import Image from '../components/image/Image'
import SEO from '../components/seo/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
