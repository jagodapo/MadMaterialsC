import React from "react"
import Layout from "../components/layout/layout"
import {
  Grid,
  Typography,
  CardMedia,
  CardActionArea,
  Box,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import PaintHighlight from "../components/svg/paint-highlight"
import Bloby from "../images/blobs.png"

const styles = {
  backgroundColor: "blue",
  color: "white",
  borderStyle: "solid",
  backgroundColor: "white",
  border: "2px solid red",
}

const AboutPage = () => {
  return (
    <Layout>
      <Grid container justify="space-between">
        <Grid item xs={12} md={6} style={{ maxWidth: 450 }}>
          <Box m={5}>
            <Typography variant="h1">
              Welcome to the mad materials lab!
            </Typography>
            <Box margin="0 auto" position="relative" top="-20px">
              <PaintHighlight />
            </Box>
            <Typography varaint="body1">
              Mad Materials is a material library and bio-materials knowledge
              base curated by Vera Banas and Jagoda Podrucka. We aim to greener
              the world through material innovation. We want to spread our love
              for material innovation and hopefully - inspire others to explore
              this field. This educational project is an invitation for creators
              and curious minds to dive into the world of material innovation
              and bio-fabrication. The project was developed with the support
              from the Orange Foundation If you have any questions, don't
              hestitate to get in touch!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%", height: "auto" }} src={Bloby} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default AboutPage
