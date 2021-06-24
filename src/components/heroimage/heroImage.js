import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
    hero: {
        maxHeight: "calc(100vh - 74px)",
        gridArea: "1/1",
    }
})
const HeroImage = () =>  {
    const classes = useStyles()

  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
       
        className={classes.hero}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        // This is a presentational image, so the alt should be an empty string
        alt="biomaterials"
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={"../../images/glove-background.jpg"
        }
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
          height: "100vh"
        }}
      >
        {/* Any content here will be centered in the component */}
        <h1>Hero text</h1>
      </div>
    </div>
  )
}

export default HeroImage