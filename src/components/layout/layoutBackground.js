/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from "../header/header"

import Footer from "../footer/footer"
import { makeStyles } from "@material-ui/core/styles"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { CssBaseline, Box } from "@material-ui/core"
import theme from "../../theme"

const useStyles = makeStyles(theme => ({
  wrapper: {
    alignSelf: "center",
    maxWidth: 1200,
    marginTop: theme.spacing(8),
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
}))
const LayoutBackground = props => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box
        className={classes.marginTop}
        border={2}
        p={3}
        mx="auto"
        m={3}
        mb={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        className={classes.wrapper}
      >
        {props.children}
      </Box>
      <Footer />
    </MuiThemeProvider>
  )
}

export default LayoutBackground
