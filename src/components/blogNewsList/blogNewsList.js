import React from "react"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import BlogPostSummaryCard from "../../components/blogPostSummaryCard/blogPostSummaryCard"

const useStyles = makeStyles(theme => ({
  box: {
    alignItems: "flex-start",
    maxWidth: 600,
    paddingTop: theme.spacing(3),
    paddingRight: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      maxWidth: "unset",
      paddingRight: 0,
    },
  },
}))

const BlogNewsList = () => {
  const classes = useStyles()
  return (
    <Box>
      <BlogPostSummaryCard />
      <BlogPostSummaryCard />
      <BlogPostSummaryCard />
      <BlogPostSummaryCard />
      <BlogPostSummaryCard />
    </Box>
  )
}

export default BlogNewsList
