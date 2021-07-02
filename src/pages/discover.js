import React from "react"

import LayoutBackground from "../components/layout/layoutBackground"
import { Grid, Typography, Card, CardContent } from "@material-ui/core"
import MaterialDiscoveryCard from "../components/discoveryMaterialCard/discoveryMaterialCard"
import theme from "../theme"
import { makeStyles } from "@material-ui/styles"
import PaintDark from "../components/svg/paint-dark"
import Head from "../components/head/head"

const useStyles = makeStyles(theme => ({
  paint: {
    // "&::after": {
    //   display: "block",
    //   content: "blskdjfklsdf ",
    //   backgroundImage: "url('../images/paint_dark.svg')",
    //   backgroundSize: "100px 100px",
    //   height: 28,
    //   width: 28,
    //   border: "2px solid red",
    // },
  },
  root: {
    flexGrow: 1,
  },
}))

const DiscoverPage = () => {
  const classes = useStyles()

  return (
    <LayoutBackground>
    <Head title="Discover" />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              elevation={0}
              style={{
                background: theme.palette.secondary.main,
                // maxWidth: 300,
                borderRadius: 0,
                height: "100%",
                border: `2px solid ${theme.palette.primary.main}`,
              }}
            >
              <CardContent style={{ padding: theme.spacing(4) }}>
                <Typography
                  variant="h1"
                  className={classes.paint}
                  component="div"
                >
                  Discover
                  <PaintDark></PaintDark>
                </Typography>
                <Typography variant="body1">
                  Explore ecological resources and materials for your next
                  project.The division is meant to be intuitive and user
                  friendly, its made for curious explorers and creators, not
                  scientists! Help us co-create bio-based future!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <MaterialDiscoveryCard />
        </Grid>
      </div>
    </LayoutBackground>
  )
}

export default DiscoverPage
