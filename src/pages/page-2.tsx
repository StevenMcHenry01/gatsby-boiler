// 3rd party imports
import React from 'react'
import { Link } from 'gatsby'

// my imports
import Layout from '../components/layout/Layout'
import SEO from '../components/seo/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
