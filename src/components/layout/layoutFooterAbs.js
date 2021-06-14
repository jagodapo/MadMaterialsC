/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
// import Header from "../header/header"
import Header2 from "../header/header"
import * as globalStyles from "../../styles/index.scss"
import * as layoutStyles from "./layoutFooterAbs.module.scss"

import FooterAbsolute from "../footer/footerAbsolute"
import { makeStyles } from "@material-ui/core/styles"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { CssBaseline, Container } from "@material-ui/core"
import theme from "../../theme"

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
  // wrapper: {
  //   alignSelf: "center",
  //   maxWidth: 1200,
  //   margin: "0 auto",
  //   // marginTop: 54,
  //   flexGrow: 1,
  //   height: `calc(100% - ${header}px - ${footer}px)`,

  //   [theme.breakpoints.up("sm")]: {
  //     // marginTop: 74,
  //   },
  // },
}))
const LayoutFooterAbs = props => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header2 />
      <main className={layoutStyles.wrapper}>{props.children}</main>
      <FooterAbsolute />
    </MuiThemeProvider>
  )
}

export default LayoutFooterAbs
