import React from "react"
import { Typography, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"

const useStyles = makeStyles(theme => ({
  container: {
    // position: "absolute",
    // bottom: 0,
    // left: "50%",
    // transform: "translateX(-50%)",
    backgroundColor: theme.palette.secondary.main,
    minHeight: 100,
    marginTop: "auto auto 0 auto",

    // position: "absolute",
    // bottom: 0,
    width: "100%",
    // maxWidth: 1200,
  },
  copy: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 16px",
  },
}))

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <footer className={classes.container}>
      <Typography color="primary" className={classes.copy} align="center">
        infomadmaterials@gmail.com | © 2020 Mad Materials all rights reserved |
        by {data.site.siteMetadata.author}
        <span>
          | created with the support from
          <a href="https://fundacja.orange.pl/en" target="_blank">
            the Orange Foundation
          </a>
        </span>
      </Typography>
    </footer>
  )
}

export default Footer
