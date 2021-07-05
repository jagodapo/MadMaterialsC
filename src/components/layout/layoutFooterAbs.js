/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
// import Header from "../header/header"
import Header2 from "../header/header"
import * as layoutStyles from "./layoutFooterAbs.module.scss"
import Footer from "../footer/footer"
import FooterAbsolute from "../footer/footerAbsolute"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { CssBaseline, useMediaQuery } from "@material-ui/core"
import theme from "../../theme"


const LayoutFooterAbs = props => {
  const isMedium = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header2 />
      <main className={layoutStyles.wrapper}>{props.children}</main>
      {isMedium ? <Footer /> : <FooterAbsolute />}
    </MuiThemeProvider>
  )
}

export default LayoutFooterAbs
