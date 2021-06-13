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
import theme from "../../theme"
import DrawerC from "../drawer/drawer"
import Logo from "../svg/logo"
// use SvgIcon to make Logo!
// przerob z tego!!!! uzyj DRAWER!!! i tego:
// https://www.youtube.com/watch?v=6JSkAfNvY4M
// https://codesandbox.io/s/material-ui-navbar-responsive-lf30l?file=/src/App.js:442-459
const useStyles = makeStyles(theme => ({
  appbar: {
    boxShadow: "0px 0px 0px 0px",
    borderTop: "2px solid #325743",
    borderBottom: "2px solid #325743",
    backgroundColor: theme.palette.primary.contrastText,
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
    // maxWidth: 1200,
    margin: "auto auto",
  },
  root: {
    flexGrow: 1,
    height: 54,
    [theme.breakpoints.up("sm")]: {
      height: 74,
      position: "-webkit-sticky",
      position: "sticky",
      zIndex: 1078,
      top: 0,
    },
  },
  box: {
    backgroundColor: theme.palette.primary.contrastText,
    height: 20,
    width: "100%",
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
      <Box className={classes.box}></Box>

      <div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Logo />
              <Typography variant="h6" className={classes.title}>
                Photos
              </Typography>

              <div>
                {isMobile ? (
                  <>
                    <DrawerC />
                  </>
                ) : (
                  <>
                    <Box>
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <Button className={classes.menuButtonLg}>Home</Button>
                      </Link>
                      <Link to="/discover" style={{ textDecoration: "none" }}>
                        <Button className={classes.menuButtonLg}>
                          Discover
                        </Button>
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
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  )
}

export default Header
