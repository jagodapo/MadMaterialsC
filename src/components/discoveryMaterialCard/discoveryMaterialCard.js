import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Button,
  Typography,
  Box,
} from "@material-ui/core"

import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: 300,
  },
  clamp: {
    width: "100%",
    display: "box",
    lineClamp: 3,
    boxOrient: "vertical",
    overflow: "hidden",
    webkitLineClamp: 3,
    webkitBoxOrient: "vertical",
  },
  img: {
    flexGrow: 1,
    width: "100%",
    height: 300,
    objectFit: "cover",
  },
}))

const DiscoveryMaterialCard = () => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allContentfulMaterialCard(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            summaryCard
            cardImage {
              gatsbyImageData(width: 500, placeholder: BLURRED)
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
    <>
      {data.allContentfulMaterialCard.edges.map(edge => {
        const image = getImage(edge.node.cardImage.gatsbyImageData)
        return (
          <Grid item xs={12} sm={6} md={4}>
            <Link
              to={`/discover/${edge.node.slug}`}
              style={{ textDecoration: "none" }}
              key={edge.node.slug}
            >
              <Card
                overflow="hidden"
                className={classes.root}
                elevation={3}
                style={{
                  borderRadius: 0,
                  border: `2px solid ${theme.palette.primary.main}`,
                }}
              >
                <CardActionArea p={0}>
                  <GatsbyImage
                  loading="eager"
                    className={classes.img}
                    image={image}
                    alt={edge.node.cardImage.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="h1">
                      {edge.node.title}
                    </Typography>
                    <Box height={64} overflow="hidden">
                      <Typography
                        variant="body2"
                        color="textPrimary"
                        className={classes.clamp}
                      >
                        {edge.node.summaryCard}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    MORE
                  </Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        )
      })}
    </>
  )
}

export default DiscoveryMaterialCard
