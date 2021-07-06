import React from "react"
import LayoutBackground from "../components/layout/layoutBackground"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core"
import EcoIcon from "@material-ui/icons/Eco"
import PaintHighlight from "../components/svg/paint-highlight"
import { makeStyles, useTheme } from "@material-ui/styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from "../components/head/head"


const useStyles = makeStyles(theme => ({
  position: {
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      position: "static",
      width: "100%",
    },
  },
  image: {
    width: "100%",
    height: 500,
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  boxTop: {
    border: `2px solid #325743`,
    borderTop: 0,
    [theme.breakpoints.up("md")]: {
      borderLeft: 0,
    },
  },

  direction: {
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  fullWidth: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  marginTop: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
  applicationsTitle: {
    textDecoration: "none",
    display: "block",
    fontSize: 16,
    paddingBottom: theme.spacing(1),
  },
  commercialApplications: {
    width: "100%",
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(1),
    color: theme.palette.primary.contrastText,
  },
  bold: {
    fontWeight: 500,
  }
}))

export const query = graphql`
  query($slug: String!) {
    contentfulMaterialCard(slug: { eq: $slug }) {
      slug
      title
      tags
      imageSource
      about {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      advantages
      disadvantages
      commercialApplications {
        raw
      }
      backgroundImage {
        gatsbyImageData(width: 1200)
        title
        file {
          url
        }
      }
    }
  }
`

const MaterialTemplate = ({ data }) => {
  const theme = useTheme()

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => (
        <Typography variant="h3" className={classes.applicationsTitle}>
          {text}
        </Typography>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Grid item xs={12} md={4}>
          <Card
            border={2}
            variant="outlined"
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardContent style={{ flexGrow: 1 }}>
              <Typography variant="body1">{children}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        // <Box
        //   bgcolor="background.default"
        //   width="30%"
        //   border={2}
        //   border="primary.main"
        //   p={1}
        //   mb={1}
        //   className={classes.fullWidth}
        // >
        //   {children}
        // </Box>
      ),
    },
  }
  // const imageSource => () {
  //   if (data.contentfulMaterialCard.imageSource != false) {
  //       return ()    
  //   }
  // }
  const classes = useStyles()
  const image = getImage(
    data.contentfulMaterialCard.backgroundImage.gatsbyImageData
  )

  return (
    <LayoutBackground>
    <Head title={data.contentfulMaterialCard.title} />
      <Typography variant="h1" align="center">
        {data.contentfulMaterialCard.title}
      </Typography>
      <Box margin="0 auto" position="relative" top="-20px">
        <PaintHighlight />
      </Box>

      <Box
        position="relative"
        // className={classes.position}
        width="100%"
        // height="200px"
        overflow="hidden"
        borderColor="primary.main"
        border={2}
        m={0}
        p={0}
      >
        <GatsbyImage
          className={classes.image}
          image={image}
          alt={data.contentfulMaterialCard.backgroundImage.title}
        />

        <Box
          bgcolor="secondary.main"
          position="absolute"
          bottom={0}
          left={0}
          p={2}
          pr={3}
          width="55%"
          className={classes.position}
        >
          <Typography variant="h3" component="div">
            Potential Applications
          </Typography>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            {data.contentfulMaterialCard.tags.map(tag => {
              return (
                <Typography variant="button" component="div">
                  #{tag.toUpperCase()}
                </Typography>
              )
            })}
            <Typography variant="button" component="div">
              #PRODUCT
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" className={classes.direction}>
        <Box
          flexBasis="55%"
          flexGrow="1"
          borderColor="primary.main"
          border={2}
          borderTop={0}
          m={0}
          p={2}
          alignSelf="stretch"
        >
          <Typography variant="h3" component="h2">
            About
          </Typography>

          {
            data.contentfulMaterialCard.about.childMarkdownRemark
              .rawMarkdownBody
          }
          {(() => {
            if (data.contentfulMaterialCard.imageSource) {
              return (
                
                <Typography variant="body"> <p><span className={classes.bold}>***image source: </span>
            {data.contentfulMaterialCard.imageSource}
            </p>
            </Typography>
              )
            } 
          })()}
      

        </Box>
        <Box
          display="flex"
          flexDirection="column"
          width="45%"
          className={classes.fullWidth}
        >
          <Box m={0} p={2} borderTop={0} className={classes.boxTop}>
            <Typography variant="h3" component="h2">
              Advantages
            </Typography>
            <List dense={true}>
              {data.contentfulMaterialCard.advantages.map((adv, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <EcoIcon />
                    </ListItemIcon>
                    {adv}
                  </ListItem>
                )
              })}
            </List>
          </Box>
          <Box m={0} p={2} borderTop={0} className={classes.boxTop}>
            <Typography variant="h3" component="h2">
              Disadvantages
            </Typography>
            {data.contentfulMaterialCard.disadvantages.map((dis, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    <EcoIcon />
                  </ListItemIcon>
                  {dis}
                </ListItem>
              )
            })}
          </Box>
        </Box>
      </Box>
      <Box
        pt={1}
        mt={2}
        pb={2}
        pr={1}
        pl={1}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        bgcolor="primary.main"
        height="200"
        width="100%"
        justifyContent="space-around"
      >
        <Typography
          variant="h3"
          component="h2"
          className={classes.commercialApplications}
        >
          Commercial Applications
        </Typography>
        <Grid container spacing={3}>
          {renderRichText(
            data.contentfulMaterialCard.commercialApplications,
            options
          )}
        </Grid>
      </Box>
    </LayoutBackground>
  )
}

export default MaterialTemplate
