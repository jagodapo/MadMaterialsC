import React from "react"
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
import { makeStyles, useTheme } from "@material-ui/styles"

// BASED ON http://jsfiddle.net/RyanBrackett/b44Zn/

const useStyles = makeStyles(theme => ({
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
    flexGrow: 0,
    width: 200,
    height: 200,
  },
  img: {
    // flexGrow: 1,
    // margin: theme.spacing(2),
    width: 200,
    height: 200,
    objectFit: "cover",
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

const BlogPostSummaryCard = props => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={0}>
      {props.children}
      <div className={classes.copy}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h2" component="h1">
            Why materials matter?
          </Typography>
          <Typography variant="h3" className={classes.date}>
            21st of February 2021
          </Typography>
          <Box maxHeight={80} overflow="hidden">
            <Typography variant="body1" className={classes.clampCopy}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis facere asperiores, sunt cumque eius, eos iusto
              architecto reprehenderit aspernatur maiores nesciunt cum dolorum.
              Autem, nesciunt ab, sunt odio debitis vel vero obcaecati
              molestias, nobis voluptate id ad possimus nulla maiores suscipit.
              Provident, eius. Praesentium, alias at neque voluptas magni
              sapiente.
            </Typography>
          </Box>
        </CardContent>
      </div>
      <CardMedia
        className={classes.imgWrapper}
        className={classes.img}
        image="https://images.unsplash.com/photo-1623412910761-8929605372ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        title="Live from space album cover"
      />
    </Card>
  )
}

export default BlogPostSummaryCard
