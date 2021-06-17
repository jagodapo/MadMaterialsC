import React from "react"
import { Box, Typography } from "@material-ui/core"
import { graphql } from "gatsby"

import { makeStyles, useTheme } from "@material-ui/styles"

import BlogLayout from "../components/blogLayout/blogLayout"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const useStyles = makeStyles(theme => ({
  img: {
    width: "100%",
    height: "auto",
    maxHeight: "35vh",
    objectFit: "cover",
    [`${theme.breakpoints.down("md")} and (orientation: portrait)`]: {
      maxHeight: "500px",
    },
    [`${theme.breakpoints.down("md")} and (orientation: portrait)`]: {
      maxHeight: "200px",
    },
  },
  copy: {
    fontFamily: "Crimson Text",
    fontWeight: 400,
  },
  padding: {
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
}))

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          title
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 1200) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
const BlogPostTemplate = ({ data }) => {
  const classes = useStyles()
  const theme = useTheme()

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <img src={node.data.target.fixed.src} alt={node.data.target.title} />
        )
      },
    },
  }

  return (
    <BlogLayout>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1623249604976-94248ca095c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        alt=""
      />
      <Typography variant="h1" className={classes.padding}>
        {data.contentfulBlogPost.title}
      </Typography>
      <Box border={2} borderLeft={0} borderRight={0} p={1} mb={2}>
        <Typography variant="h3" className={classes.copy}>
          {data.contentfulBlogPost.publishedDate} <span>|</span>
          {data.contentfulBlogPost.author}
        </Typography>
      </Box>
      <Box mb={2} className={classes.padding}>
        <div>{renderRichText(data.contentfulBlogPost.body, options)}</div>
      </Box>
    </BlogLayout>
  )
}

export default BlogPostTemplate
