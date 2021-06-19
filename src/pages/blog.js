import React from "react"
import LayoutFooterAbs from "../components/layout/layoutFooterAbs"
import { Box, useMediaQuery, Typography } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"

import BlogNewsList from "../components/blogNewsList/blogNewsList"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    display: "static",
    position: "relative",
    height: "100%",

    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      maxWidth: 800,
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
  imgWrapper: {
    width: "100%",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: "auto",
    margin: "auto 0",
    [theme.breakpoints.down("md")]: {
      maxWidth: 400,
      margin: "0 auto",
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
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
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
}))

const BlogPage = () => {
  const theme = useTheme()

  const classes = useStyles()
  const isMedium = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <LayoutFooterAbs>
      {isMedium ? (
        <div className={classes.root}>
          <Box className={classes.imgWrapper}>
            <StaticImage
              src={"../images/bio-based-blog.png"}
              placeholder="blurred"
              className={classes.img}
              alt="blog"
            />
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
          <Box
            pr={7}
            width="50%"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <StaticImage
              src={"../images/bio-based-blog.png"}
              className={classes.img}
              alt="blog"
            />
          </Box>
        </div>
      )}
    </LayoutFooterAbs>
  )
}

export default BlogPage
