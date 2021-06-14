import React from "react"
import theme from "../../theme"

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
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
}))

const DiscoveryMaterialCard = () => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <Card
      overflow="hidden"
      className={classes.root}
      elevation={0}
      style={{
        borderRadius: 0,
        border: `2px solid ${theme.palette.primary.main}`,
      }}
    >
      <CardActionArea p={0}>
        <CardMedia
          component="img"
          alt=""
          height="300"
          image="https://images.unsplash.com/photo-1623412910761-8929605372ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h1">
            Mycelium
          </Typography>
          <Box height={64} overflow="hidden">
            <Typography
              variant="body2"
              color="textPrimary"
              className={classes.clamp}
              // component="div"
              // width="100%"
              // height="70px"
              // noWrap="true"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              pariatur nemo velit natus aut a autem architecto tempora fuga iure
              expedita odit distinctio, voluptatem recusandae, voluptatibus
              cumque ipsam error, libero minus unde culpa dolore? Voluptatibus
              voluptate voluptatum quasi odit commodi iste architecto provident.
              Debitis sint incidunt, ducimus non modi officia enim dignissimos,
              ipsum, placeat eaque sit tempora sapiente ea dolores consequuntur
              cupiditate odit. Minus, tempora maiores id quisquam voluptatum
              quidem reiciendis voluptatibus veritatis minima ea earum tempore
              eligendi magni tenetur est. Earum eos enim cum quia voluptas,
              tempore nemo voluptates delectus dolorum pariatur, ullam nam
              exercitationem adipisci optio vel assumenda?
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default DiscoveryMaterialCard
