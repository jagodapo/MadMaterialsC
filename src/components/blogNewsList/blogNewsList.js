import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  CardActionArea,
  CardActions,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
// import BlogPostSummaryCard from "../../components/blogPostSummaryCard/blogPostSummaryCard"

const useStyles = makeStyles(theme => ({
  box: {
    alignItems: "flex-start",
    maxWidth: 600,
    paddingTop: theme.spacing(3),
    paddingRight: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    marginBottom: 70,
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      maxWidth: "unset",
      paddingRight: 0,
      marginBottom: 0,
    },
  },
  root: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderTop: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 0,
  },
  cardContent: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingRight: theme.spacing(2),
      paddingLeft: 0,
      paddingBottom: 0,
    },
  },
  copy: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    flexGrow: 1,
  },
  // content: {
  //   flex: "0 1 auto",
  // },
  imgWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    flexGrow: 0,
    width: 200,
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 150,
    },
  },
  img: {
    // flexGrow: 1,
    // margin: theme.spacing(2),
    width: 200,
    height: 200,
    // objectFit: "cover",
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 150,
    },
  },
  clampCopy: {
    width: "100%",
    display: "box",
    lineClamp: 4,
    boxOrient: "vertical",
    overflow: "hidden",
    webkitLineClamp: 4,
    webkitBoxOrient: "vertical",
  },
  date: {
    fontFamily: "Crimson Text",
    fontSize: 13,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const BlogNewsList = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            summary
            publishedDate(formatString: "do MMMM, YYYY")
            previewImage {
              gatsbyImageData(width: 200)
              title
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Box className={classes.box}>
      {data.allContentfulBlogPost.edges.map(edge => {
        const image = getImage(edge.node.previewImage.gatsbyImageData)
        return (
          <Link
            to={`/blog/${edge.node.slug}`}
            style={{ textDecoration: "none" }}
            key={edge.node.slug}
          >
            <Card className={classes.root} elevation={0}>
              <div className={classes.copy}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h3" component="h1">
                    {edge.node.title}
                  </Typography>
                  <Typography variant="h3" className={classes.date}>
                    {edge.node.publishedDate}
                  </Typography>
                  <Box maxHeight={80} overflow="hidden">
                    <Typography variant="body1" className={classes.clampCopy}>
                      {edge.node.summary}
                    </Typography>
                  </Box>
                </CardContent>
              </div>
              <div className={classes.imgWrapper}>
                <GatsbyImage
                  className={classes.img}
                  image={image}
                  alt={edge.node.previewImage.title}
                />
              </div>
            </Card>
          </Link>
        )
      })}
    </Box>
  )
}

export default BlogNewsList
