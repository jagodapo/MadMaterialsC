import * as React from "react"
import { Grid, Typography, Button, Fade } from "@material-ui/core"
import Layout from "../components/layout/layout"
import Head from "../components/head/head"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import PatternHomePage from "../components/svg/pattern-home-page"
import PatternHomePageDesktop from "../components/svg/pattern-home-page-desktop"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import star from "../images/star.svg"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
  },
  gridContainer: {
    minHeight: `calc(100vh - 150px)`,
    alignItems: "flex-end",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      // overflow: "hidden",
      flexDirection: "column-reverse",
    },
  },
  imgWrapper: {
    height: `calc(90vh - 150px)`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
    },
  },
  headerWrapper: {
    position: "relative",
    alignSelf: "flex-end",
    textAlign: "right",
  },
  title: {
    fontSize: 118,
    lineHeight: 0.9,
    position: "relative",
    zIndex: 987,
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(2),
    },
  },
  subtitle: {
    position: "relative",
    fontFamily: "Crimson Text",
    fontWeight: 400,
    fontSize: 28,
    paddingTop: theme.spacing(4),
    maxWidth: 300,
    justifySelf: "flex-end",
    marginRight: 0,
    marginLeft: "auto",
  },
  dot: {
    height: 200,
    width: 200,
    borderRadius: "50%",
    backgroundColor: theme.palette.secondary.main,
    position: "absolute",
    right: 0,
    top: "50%",
    transform: `translateY(-50%)`,
    [theme.breakpoints.down("sm")]: {
      height: 150,
      width: 150,
    },
  },
  img: {
    width: "100%",
    height: "auto",
  },
  container2: {
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  description: {
    marginBottom: theme.spacing(3),
  },
  button: {
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(5),
    },
  },
  backgroundImage: {
    position: "relative",
    backgroundImage: `url(${star})`,
    backgroundPosition: 'center',
    backgroundSize: "cover",
    minHeight: 700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),



  },
  earthWrapper: {
    animation: `$rotation 7000ms ${theme.transitions.easing.easeInOut} infinite`, 
    width:500,
    height:500,
    minHeight: 200,
    margin:"auto",
    [theme.breakpoints.down("md")]: {
      width:"90%",
      height: "unset"
    },
  },
  '@keyframes rotation': {
    '0%': {
      transform: `rotate(0deg)`,
    },
    '100%': {
      transform: `rotate(360deg)`,
    }
  }
})

const IndexPage = () => {
  const classes = useStyles()
  const isMedium = useMediaQuery(theme.breakpoints.down("md"))

  return (

    <Layout>
    <Head title="Home"/>
      <div className={classes.root}>
        <Grid container spacing={1} className={classes.gridContainer}>
          <Grid item xs={12} md={8} className={classes.imgWrapper}>
            {isMedium ? (
              <> <Fade>
                <PatternHomePage />
                </Fade>
              </>
            ) : (
              <>
              <Fade>
                <PatternHomePageDesktop />
                </Fade>
              </>
            )}
          </Grid>
       
          <Grid item className={classes.headerWrapper} item xs={12} md={4}>
            <div className={classes.dot}></div>
            <Typography variant="h1" className={classes.title}>
              Bio-
              <br />
              based
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              className={classes.subtitle}
            >
              beginners’ guide to bio-based material innovation and
              biofabrication
            </Typography>
          </Grid>
          
        </Grid>
        <Grid container spacing={1} className={classes.container2}>
        <Grid item xs={12} className={classes.backgroundImage}>
        <div className={classes.earthWrapper}>
          <StaticImage
          aspectRatio={1/ 1}
          placeholder="blurred"
            src={"../images/earth.png"}
            className={classes.img}
            alt="bioplastic"
            layout="constrained"
            width={500}
            height={500}
          
          
          />
        </div>

        
        </Grid>

          <Grid item xs={12} sm={8} md={4}>
            <Typography variant="h1">Materials for a greener future</Typography>
            <Typography variant="body1" className={classes.description}>
              Get to know the fascinating world of innovative material solutions
              for a greener world. Find out about the power of algae, discover
              why mushrooms are superheroes and what can be done from waste
              after wine production.
            </Typography>
            <Link to="/discover" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
              >
                Discover
              </Button>
            </Link>
          </Grid>
    
          <Grid item md={4}>
            <StaticImage
            loading="lazy"
            placeholder="blurred"
              src={"../images/glove.png"}
              className={classes.img}
              alt="biomaterial"
            />
          </Grid>
        </Grid>
      </div>
    </Layout>

  )
}

export default IndexPage
