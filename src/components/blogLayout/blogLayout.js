import React from "react"
import Header2 from "../header/header"

import Footer from "../footer/footer"
import { makeStyles } from "@material-ui/core/styles"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import theme from "../../theme"

const useStyles = makeStyles(theme => ({

  wrapper: {
    alignSelf: "center",
    maxWidth: 800,
    margin: "0 auto",
    // marginTop: 54,
    flexGrow: 1,

    [theme.breakpoints.up("sm")]: {
      // marginTop: 74,
    },
  },
}))
const BlogLayout = props => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header2 />
      <main className={classes.wrapper}>{props.children}</main>
      <Footer />
    </MuiThemeProvider>
  )
}

export default BlogLayout
