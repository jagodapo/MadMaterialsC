/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Header from "../header/header"

import Footer from "../footer/footer"
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles"
import { CssBaseline, Box, Paper } from "@material-ui/core"
import theme from "../../theme"
import square from "../../images/square18.svg"

  
const useStyles = makeStyles(theme => ({
  backgroundWrapper: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${square})`,
    backgroundRepeat: "repeat",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "none",
    },
  },
  contentWrapper: {
    alignSelf: "center",
    maxWidth: 1200,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(0),
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(0),
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
      <Paper className={classes.backgroundWrapper}>
        <Header />
        <Box
          bgcolor={theme.palette.primary.contrastText}
          className={classes.marginTop}
          border={2}
          p={3}
          mx="auto"
          m={3}
          mb={8}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          className={classes.contentWrapper}
        >
          {props.children}
        </Box>
        <Footer />
      </Paper>
    </MuiThemeProvider>
  )
}

export default LayoutBackground
