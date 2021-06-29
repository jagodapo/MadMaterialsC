import React from "react"
import LayoutFooterAbs from "../components/layout/layoutFooterAbs"
import { Grid, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PaintHighlight from "../components/svg/paint-highlight"
import theme from "../theme"
import PatternAbout from "../components/svg/pattern-about"

const useStyles = makeStyles({
  img: {
    width: "100%",
    height: "auto",
  },
  grid: {
    justifyContent: "space-around",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 600,
    },
  },
  typoWrapper: {
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(2),
  },
  header: {
    maxWidth: 250,
  },
})

const AboutPage = () => {
  const classes = useStyles()
  return (
    <LayoutFooterAbs>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={4}>
          <Box m={5} className={classes.typoWrapper}>
            <Typography variant="h1" className={classes.header}>
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
        <Grid item xs={10} md={6}>
          <PatternAbout />
        </Grid>
      </Grid>
    </LayoutFooterAbs>
  )
}

export default AboutPage
