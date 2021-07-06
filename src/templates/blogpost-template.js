import React from "react"
import { Box, Typography } from "@material-ui/core"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { makeStyles, useTheme } from "@material-ui/styles"
import theme from "../theme"
import BlogLayout from "../components/blogLayout/blogLayout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from "../components/head/head"


const useStyles = makeStyles ({
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
  author: {
    fontFamily: "Crimson Text",
    fontWeight: 400,
    fontSize: 16
  },
  padding: {
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
  dot: {
    height: 120,
    width: 120,
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.main,
    position: "absolute",
    left: 0,
    top: -20,
    // transform: `translateY(-50%)`,
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      height: 100,
      width: 100,
    },
  },
  dotWrapper: {
    position: "relative",
    marginTop: theme.spacing(4),
  },
})

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author
      publishedDate(formatString: "MMMM Do, YYYY")
      backgroundImage {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.3, placeholder: BLURRED)
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
     
    <div className={classes.dotWrapper}>
    <div className={classes.dot}></div>
    <Typography variant="h1" className={classes.padding}>
    {data.contentfulBlogPost.title}
  </Typography>
  </div>
   
      <Box margin="0 auto" position="relative" top="-20px">
      
    </Box>
      <Box border={2} borderLeft={0} borderRight={0} p={1} mb={2}>
        <Typography variant="h3" className={classes.author}>
          {data.contentfulBlogPost.publishedDate} <span>|</span> <span/>
          {data.contentfulBlogPost.author}
        </Typography>
      </Box>
      <GatsbyImage
      loading="eager"
        image={bgImage}
        alt={data.contentfulBlogPost.backgroundImage.title}
      />
      <Box mb={2} pb={3} className={classes.padding}>
        <div>{renderRichText(data.contentfulBlogPost.body, options)}</div>
      </Box>
    </BlogLayout>

  )
}

export default BlogPostTemplate
