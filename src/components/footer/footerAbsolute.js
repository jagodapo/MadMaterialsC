import React from "react"
import { Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FooterCopyandLogo from "../footerCopyandLogo/footerCopyandLogo"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: 70,
    zIndex: 1234567897654,
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.container}>
      <FooterCopyandLogo />
    </footer>
  )
}

export default Footer
