import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import { Link } from "gatsby"
import theme from "../../theme"

import useMediaQuery from "@material-ui/core/useMediaQuery"

// przerob z tego!!!! uzyj DRAWER!!! i tego:
// https://www.youtube.com/watch?v=6JSkAfNvY4M
// https://codesandbox.io/s/material-ui-navbar-responsive-lf30l?file=/src/App.js:442-459
const useStyles = makeStyles(theme => ({
  appbar: {
    boxShadow: "0px 0px 0px 0px",
    borderTop: "2px solid #325743",
    borderBottom: "2px solid #325743",
    backgroundColor: "transparent",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      marginTop: 20,
      height: 54,
    },
  },
  toolbar: {
    height: 54,
  },
  root: {
    flexGrow: 1,
  },
  mobileMenuBox: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0px 0px 0px 0px",
    color: theme.palette.primary.main.contrastText,
    width: "100%",
    height: "100%",
    maxHeight: "unset",
    maxWidth: "unset",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuButtonLg: {
    marginRight: 50,
    color: theme.palette.primary.main,
  },
}))

const Header2 = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>

          <div>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  onClick={handleMenu}
                  className={classes.menuButton}
                  color="primary.main"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                  PopoverClasses={{
                    paper: classes.mobileMenuBox,
                  }}
                >
                  <Link to="/">
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                  </Link>
                  <Link to="/discover">
                    <MenuItem onClick={handleClose}>Discover</MenuItem>
                  </Link>
                  <Link to="/blog">
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                  </Link>
                  <Link to="/about">
                    <MenuItem onClick={handleClose}>About</MenuItem>
                  </Link>
                </Menu>
              </>
            ) : (
              <Box>
                <Link to="/">
                  <Button className={classes.menuButtonLg}>Home</Button>
                </Link>
                <Link to="/discover">
                  <Button className={classes.menuButtonLg}>Discover</Button>
                </Link>
                <Link to="/blog">
                  <Button className={classes.menuButtonLg}>Blog</Button>
                </Link>
                <Link to="/about">
                  <Button className={classes.menuButtonLg}>About</Button>
                </Link>
              </Box>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header2
