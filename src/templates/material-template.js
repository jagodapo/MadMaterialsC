import React from "react"
import LayoutBackground from "../components/layout/layoutBackground"
import { Container, Box, Grid, Paper, Typography } from "@material-ui/core"
import theme from "../theme"
import PaintHighlight from "../components/svg/paint-highlight"
import { makeStyles } from "@material-ui/styles"

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
}))
const imgStyle = {}
const MaterialTemplate = () => {
  const classes = useStyles()

  return (
    <LayoutBackground>
      <Typography variant="h1" align="center">
        Algae
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
        <img
          className={classes.image}
          src="https://images.unsplash.com/photo-1623191220261-8dd4f75d77c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
          alt=""
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
            <Typography variant="button" component="div">
              #PRODUCT
            </Typography>
            <Typography variant="button" component="div">
              #INTERIOR
            </Typography>
            <Typography variant="button" component="div">
              #ARCHITECTURE
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
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            minus quibusdam suscipit aperiam sapiente a facilis eligendi
            possimus quo aliquid explicabo quos voluptatem sit vel maxime
            nostrum consequatur delectus earum similique, quod excepturi
            perspiciatis nisi! Possimus commodi, aspernatur eligendi porro aut
            incidunt expedita blanditiis quis ducimus repellat, aliquid
            explicabo quisquam obcaecati architecto! Quis assumenda cumque nulla
            dolores voluptate quisquam quam.
          </Typography>
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
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur minus quibusdam suscipit aperiam sapiente a facilis
              eligendi possimus quo aliquid explicabo quos voluptatem sit vel
              maxime nostrum consequatur delectus earum similique, quod
              excepturi perspiciatis nisi! Possimus commodi, aspernatur eligendi
              porro aut incidunt expedita blanditiis quis ducimus repellat,
              aliquid explicabo quisquam obcaecati architecto! Quis assumenda
              cumque nulla dolores voluptate quisquam quam.
            </Typography>
          </Box>
          <Box m={0} p={2} borderTop={0} className={classes.boxTop}>
            <Typography variant="h3" component="h2">
              Disadvantages
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur minus quibusdam suscipit aperiam sapiente a facilis
              eligendi possimus quo aliquid explicabo quos voluptatem sit vel
              maxime nostrum consequatur delectus earum similique, quod
              excepturi perspiciatis nisi! Possimus commodi, aspernatur eligendi
              porro aut incidunt expedita blanditiis quis ducimus repellat,
              aliquid explicabo quisquam obcaecati architecto! Quis assumenda
              cumque nulla dolores voluptate quisquam quam.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        p={1}
        mt={2}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        bgcolor="secondary.main"
        height="200"
        width="100%"
        justifyContent="space-around"
      >
        <Typography variant="h3" component="h2" style={{ width: "100%" }}>
          Commercial Applications
        </Typography>
        <Box
          bgcolor="background.default"
          width="30%"
          border={2}
          border="primary.main"
          p={1}
          mb={1}
          className={classes.fullWidth}
        >
          <Typography variant="h4">Liloware</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quae eveniet quidem sit pariatur ducimus ea deleniti perferendis
            sequi laborum.
          </Typography>
        </Box>
        <Box
          bgcolor="background.default"
          width="30%"
          border={2}
          border="primary.main"
          p={1}
          mb={1}
          className={classes.fullWidth}
        >
          <Typography variant="h4">Liloware</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quae eveniet quidem sit pariatur ducimus ea deleniti perferendis
            sequi laborum.
          </Typography>
        </Box>
        <Box
          bgcolor="background.default"
          width="30%"
          border={2}
          border="primary.main"
          p={1}
          mb={1}
          className={classes.fullWidth}
        >
          <Typography variant="h4">Liloware</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quae eveniet quidem sit pariatur ducimus ea deleniti perferendis
            sequi laborum.
          </Typography>
        </Box>
        <Box
          bgcolor="background.default"
          width="30%"
          border={2}
          border="primary.main"
          p={1}
          mb={1}
          className={classes.fullWidth}
        >
          <Typography variant="h4">Liloware</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quae eveniet quidem sit pariatur ducimus ea deleniti perferendis
            sequi laborum.
          </Typography>
        </Box>
      </Box>
    </LayoutBackground>
  )
}

export default MaterialTemplate
