import React from "react"
import Layout from "../components/layout/layout"
import { Grid, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import PaintHighlight from "../components/svg/paint-highlight"
import theme from "../theme"
import PatternAbout from "../components/svg/pattern-about"
import Head from "../components/head/head"
import MMForm from "../components/form/form"
import PageTransition from 'gatsby-plugin-page-transitions'
const useStyles = makeStyles({
  img: {
    width: "100%",
    height: "auto",
  },
  grid: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 600,
    },
  },
  typoWrapper: {
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(2),
  },
  link: {
    color: theme.palette.primary.main,
  }

})

const AboutPage = () => {
  const classes = useStyles()
  return (
    <PageTransition>

    <Layout>
    <Head title="About" />
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={5}>
          <Box m={5} className={classes.typoWrapper}>
            <Typography variant="h1" className={classes.header}>
             Mad Materials Lab
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
              and bio-fabrication. The project was developed with the support from 
               <span> <a href="https://fundacja.orange.pl/" target="_blank " className={classes.link}>  the Orange Foundation. </a> </span> If you have any questions, don't
              hestitate to get in touch!
            </Typography>
           
            <MMForm/>
            
          </Box>
          
        </Grid>
        <Grid item xs={10} md={5}>
        <PatternAbout/>
     
          
        </Grid>
      </Grid>
    </Layout>
    </PageTransition>

  )
}

export default AboutPage
