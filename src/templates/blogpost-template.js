import React from "react"
import { Box, Typography } from "@material-ui/core"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { makeStyles, useTheme } from "@material-ui/styles"

import BlogLayout from "../components/blogLayout/blogLayout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from "../components/head/head"

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
      backgroundImage {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 3.2, placeholder: BLURRED)
        title
        file {
          url
        }
      }
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
  const bgImage = getImage(data.contentfulBlogPost.backgroundImage.gatsbyImageData)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <img
            src={node.data.target.fixed.src}
            alt={node.data.target.title}
            width="100%"
            height="auto"
          />
        )
      },
    },
  }

  return (
    <BlogLayout>
    <Head title={data.contentfulBlogPost.title}/>
      <GatsbyImage
      loading="eager"
        image={bgImage}
        alt={data.contentfulBlogPost.backgroundImage.title}
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
