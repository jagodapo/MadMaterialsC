import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  Container,
} from "@material-ui/core"
import { Link } from "gatsby"
import DrawerC from "../drawer/drawer"
import Logo from "../svg/logo"

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: theme.palette.secondary.main,
    justifyContent: "center",
    position: "static",
    [theme.breakpoints.up("sm")]: {
      // marginTop: 20,
      height: 54,
    },
  },
  toolbar: {
    height: 54,
    width: "100%",
    backgroundColor: theme.palette.secondary.main,

    margin: "auto auto",
  },
  root: {
    flexGrow: 1,
    height: 54,
    [theme.breakpoints.up("sm")]: {
      height: 74,
      position: "sticky",
      zIndex: 1078,
      top: 0,
    },
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

const Header = () => {
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
    <>
      <div className={classes.root}>
        <div>
          {isMobile ? (
            <>
              <AppBar className={classes.appbar} position="static">
                <Container maxWidth="lg">
                  <Toolbar className={classes.toolbar}>
                    <DrawerC />
                  </Toolbar>
                </Container>
              </AppBar>
            </>
          ) : (
            <>
              <Box>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button className={classes.menuButtonLg}>Home</Button>
                </Link>
                <Link to="/discover" style={{ textDecoration: "none" }}>
                  <Button className={classes.menuButtonLg}>Discover</Button>
                </Link>
                <Link to="/blog" style={{ textDecoration: "none" }}>
                  <Button className={classes.menuButtonLg}>Blog</Button>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <Button className={classes.menuButtonLg}>About</Button>
                </Link>
              </Box>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
