import React from "react"
import LayoutFooterAbs from "../components/layout/layoutFooterAbs"
import { Box, useMediaQuery, Typography } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"
import BlogNewsList from "../components/blogNewsList/blogNewsList"
import PatternBlog from "../components/svg/pattern-blog"
import theme from "../theme"
import Head from "../components/head/head"
const useStyles = makeStyles({
  root: {
    display: "static",
    position: "relative",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      maxWidth: 800,
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },

  title: {
    fontSize: 84,
    lineHeight: 0.9,
    position: "relative",
    zIndex: 987,
    [theme.breakpoints.down("sm")]: {
      fontSize: 64,
    },
  },
  dotWrapper: {
    position: "relative",
    marginTop: theme.spacing(4),
  },
  sectionWrapper: {
    textAlign: "left",
    paddingRight: theme.spacing(7),
    width: "50%",
    position: "relative",
    // height: 300,
    // position: "absolute",
    // top: 0,
    // transform: `translateY(calc(50%-200px))`,
    // left: 0,
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100%",
    },
  },
  dot: {
    height: 200,
    width: 200,
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.main,
    position: "absolute",
    left: 0,
    top: "50%",
    transform: `translateY(-50%)`,
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      height: 150,
      width: 150,
    },
  },

  img: {
    width: "auto",
    height: "300",
    margin: "auto 0",
    [theme.breakpoints.down("md")]: {
      maxWidth: 350,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      maxWidth: 250,
    },
  },

  direction: {
    height: "100%",
    flexDirection: "row",
  },
  child: {
    width: "40%",
    flexGrow: 1,
  },
  // imgWrapper: {
  //   height: `calc(100vh - 150px)`,
  //   [theme.breakpoints.down("md")]: {
  //     width: "100%",
  //     height: "auto",
  //   },
  // },
  fixed: {
    position: "fixed",
    width: "50%",
    right: 0,
    bottom: "0%",
    top: 74,
    height: `calc(100vh - 174)`,
  },
  wrapper: {
    overflowY: "scroll",
    WebkitOverflowScrolling: "touch",
    height: "100%",
  },
})

const BlogPage = () => {
  const theme = useTheme()

  const classes = useStyles()
  const isMedium = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <LayoutFooterAbs>
    <Head title="Blog" />
      {isMedium ? (
        <div className={classes.root}>
          <Box className={classes.sectionWrapper}>
            <div className={classes.dotWrapper}>
              <div className={classes.dot}></div>
              <Typography variant="h1" className={classes.title}>
                Bio-based
                <br />
                Blog
              </Typography>
            </div>
            <PatternBlog />
          </Box>

          <BlogNewsList />
        </div>
      ) : (
        <div className={classes.root}>
          <Box className={classes.fixed}>
            <Box className={classes.wrapper}>
              <BlogNewsList />
            </Box>
          </Box>
          <Box className={classes.sectionWrapper}>
            <div className={classes.dotWrapper}>
              <div className={classes.dot}></div>
              <Typography variant="h1" className={classes.title}>
                Bio-based
                <br />
                Blog
              </Typography>
            </div>
            <PatternBlog />
          </Box>
        </div>
      )}
    </LayoutFooterAbs>
  )
}

export default BlogPage
