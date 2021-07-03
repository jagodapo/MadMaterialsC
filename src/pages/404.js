import * as React from "react"
import {Link} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import {Typography} from "@material-ui/core"
const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Typography variant="h2" align="center" style={{marginTop: 120}}>404: Not Found</Typography>
    <Link to="/" style={{textAlign: "center", width: "100%", display: "block"}}><Typography variant="body" color="textPrimary" align="center"> Head home</Typography> </Link>
  </Layout>
)

export default NotFoundPage
