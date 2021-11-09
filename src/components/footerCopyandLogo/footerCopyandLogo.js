import React from "react"
import { Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import FOLogo from "../../images/FO_Logo.svg"

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    textAlign: "center",
  },
  copy: {
    // maxWidth: 1200,
    // margin: "0 auto",
    // padding: "8px 8px 0 8px",
    fontSize: 12,
    verticalAlign: "middle",
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(2),
      maxWidth: 600,
    },
  },
  logo: {
    height: 60,
    width: "auto",
  },
  logoWrapper: {
    verticalAlign: "middle",
    display: "inline-block",
  },
  link: {
    color: theme.palette.primary.main,
  },
}))

const FooterCopyandLogo = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Typography color="primary" className={classes.copy} align="center">
        <span>
          infomadmaterials@gmail.com | © 2020 Mad Materials all rights reserved
          | created with the support from <span />
          <a
            href="https://www.fondationorange.com"
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            the Orange Foundation
          </a>
        </span>
      </Typography>
      <div className={classes.logoWrapper}>
        <a
          href="https://www.fondationorange.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={FOLogo}
            className={classes.logo}
            alt="The Orange Foundation Logo"
          />
        </a>
      </div>
    </Box>
  )
}

export default FooterCopyandLogo
