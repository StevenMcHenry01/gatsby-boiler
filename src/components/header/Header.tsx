import { Link } from 'gatsby'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  header: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
    marginBottom: '1.45rem',
  },
}))

const Header = ({ siteTitle = '' }: { siteTitle?: string }) => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
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
      </div>
    </header>
  )
}

export default Header
