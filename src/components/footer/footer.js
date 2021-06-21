import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FooterCopyandLogo from "../footerCopyandLogo/footerCopyandLogo"

const useStyles = makeStyles(theme => ({
  container: {
    // position: "absolute",
    // bottom: 0,
    // left: "50%",
    // transform: "translateX(-50%)",
    backgroundColor: theme.palette.secondary.main,
    minHeight: 70,
    margin: "auto auto 0 auto",
    padding: 0,
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
