import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import { makeStyles } from "@material-ui/core/styles"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import theme from "../../theme"
import * as layoutStyles from "./layoutFooterAbs.module.scss"


const useStyles = makeStyles(theme => ({
  div: {
    // added to move footer to the bottom in about
    // position: "relative",
    // minHeight: "100vh",
    // display: "block",
    // overflow: "auto",
    // display: "flex",
    // flexDirection: "column"
  },
  wrapper: {
    alignSelf: "center",
    maxWidth: 1200,
    margin: "0 auto",
    // marginTop: 54,
    flexGrow: 1,

    [theme.breakpoints.up("sm")]: {
      // marginTop: 74,
    },
  },
}))
const Layout = props => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main className={layoutStyles.wrapper}>{props.children}</main>
      <Footer />
    </MuiThemeProvider>
  )
}

export default Layout
