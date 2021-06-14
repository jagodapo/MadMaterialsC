import React from "react"
import { Typography, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  container: {
    // position: "absolute",
    // bottom: 0,
    // left: "50%",
    // transform: "translateX(-50%)",
    backgroundColor: theme.palette.secondary.main,
    minHeight: 100,
    zIndex: 1234567897654,

    position: "fixed",
    bottom: 0,
    left: 0,
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
  const classes = useStyles()
  return (
    <footer className={classes.container}>
      <Typography color="primary" className={classes.copy} align="center">
        infomadmaterials@gmail.com | © 2020 Mad Materials all rights reserved |
        created with the support from{" "}
        <a href="https://fundacja.orange.pl/en" target="_blank">
          the Orange Foundation
        </a>
      </Typography>
    </footer>
  )
}

export default Footer
