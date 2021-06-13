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
    marginTop: "auto auto 0 auto",

    // position: "absolute",
    bottom: 0,
    width: "100%",
    // maxWidth: 1200,
  },
  copy: {
    maxWidth: 600,
    margin: "0 auto",
    padding: "16px 16px",
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.container}>
      <Typography color="primary" className={classes.copy} align="center">
        need more information on biomaterials? get in touch!
        infomadmaterials@gmail.com © 2020 Mad Materials all rights reserved
        created with the support from the Orange Foundation
      </Typography>
    </footer>
  )
}

export default Footer
