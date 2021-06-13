import React, { useState } from "react"
import Drawer from "@material-ui/core/drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

import MenuIcon from "@material-ui/icons/Menu"
import theme from "../../theme"

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    background: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    border: "2px solid red",
    minWidth: 200,

    // width: "100%",
    // height: "100%",
    // maxHeight: "unset",
    // maxWidth: "unset",
  },
  buttons: {
    color: theme.palette.primary.main,
    textDecoration: "unset",
    textTransform: "uppercase",
  },
}))
const DrawerC = () => {
  const classes = useStyles()

  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ListItem divider button>
              <ListItemText className={classes.buttons}>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to="/discover" style={{ textDecoration: "none" }}>
            <ListItem divider button>
              <ListItemText className={classes.buttons}>Discover</ListItemText>
            </ListItem>
          </Link>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <ListItem divider button>
              <ListItemText className={classes.buttons}>Blog</ListItemText>
            </ListItem>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <ListItem divider button>
              <ListItemText className={classes.buttons}>About</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <IconButton
        edge="start"
        onClick={() => setOpenDrawer(!openDrawer)}
        color="primary"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerC
