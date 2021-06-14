import React from "react"
import { Box, Typography } from "@material-ui/core"

import { makeStyles, useTheme } from "@material-ui/styles"

import BlogLayout from "../components/blogLayout/blogLayout"

const useStyles = makeStyles(theme => ({
  img: {
    width: "100%",
    height: "auto",
    maxHeight: "35vh",
    objectFit: "cover",
    [`${theme.breakpoints.down("md")} and (orientation: portrait)`]: {
      maxHeight: "500px",
    },
    [`${theme.breakpoints.down("md")} and (orientation: portrait)`]: {
      maxHeight: "200px",
    },
  },
  copy: {
    fontFamily: "Crimson Text",
    fontWeight: 400,
  },
  padding: {
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
}))

const BlogPostTemplate = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <BlogLayout>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1623249604976-94248ca095c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        alt=""
      />
      <Typography variant="h1" className={classes.padding}>
        Why material matter?
      </Typography>
      <Box border={2} borderLeft={0} borderRight={0} p={1} mb={2}>
        <Typography variant="h3" className={classes.copy}>
          21st of February 2021 <span> | </span>
          <span>by Vera Banas</span>
        </Typography>
      </Box>
      <Box mb={2} className={classes.padding}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos
          tempore iste autem totam laboriosam architecto, quaerat non saepe
          similique reprehenderit est omnis sunt unde at vel vero pariatur
          minima veniam ullam quo! Eius similique facilis tempore earum
          explicabo corrupti possimus reiciendis aliquid, dolor illo, fugiat
          ducimus saepe iure, consequuntur vero consequatur eum quis sunt quod.
          Reiciendis ex, amet praesentium magni neque reprehenderit illo officia
          expedita ea dolorum consequatur enim voluptas corporis consequuntur
          odit hic aliquid tenetur. Amet, reprehenderit! Quis tempora sunt
          dolorem, soluta amet pariatur sed assumenda id facere praesentium
          velit minus blanditiis distinctio commodi similique! Quo, debitis
          iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          eum consequuntur maxime mollitia exercitationem ea explicabo
          perspiciatis ratione minus recusandae animi, ullam dicta, aperiam eos
          saepe aut quos qui nisi. Distinctio modi, repudiandae expedita ducimus
          cupiditate qui dolores inventore vel quidem doloribus iure ratione aut
          architecto maxime provident necessitatibus esse quasi numquam quas
          ipsum? Inventore impedit iure repellat nihil ipsa molestiae, facere
          deleniti quia minus architecto eius praesentium quo numquam iste
          corrupti laudantium deserunt sit tempore. Cumque, magni recusandae
          quos dignissimos nulla doloremque voluptates ratione, quisquam non
          repudiandae tenetur rem quam? Tenetur, nemo ullam nihil consequatur
          eveniet suscipit aliquid unde, ipsum ex numquam rem. Sequi repudiandae
          et labore corrupti esse illo at eos amet minima porro quasi ullam
          dicta, laboriosam beatae quo debitis dolore quae provident temporibus.
          Quis eaque voluptatum alias odit officia, error vitae enim sequi
          voluptas, quisquam illo. Dolorum sit fuga quisquam quo sequi ab
          aperiam vitae. Magnam repellendus quod unde laborum voluptates, ipsam
          ratione deleniti excepturi modi blanditiis fugit facilis sed explicabo
          omnis voluptatem eveniet eos mollitia dignissimos, optio voluptatum
          laboriosam, molestias culpa facere quas. Nemo sapiente nobis
          necessitatibus consequuntur quasi explicabo natus fugiat ipsa suscipit
          quis neque similique magnam quo, amet qui iusto adipisci ratione nam
          eveniet voluptatibus recusandae non sit quas. Molestiae corrupti
          maxime saepe deleniti dolorem nesciunt unde ullam. Recusandae sed
          impedit nam obcaecati distinctio adipisci minima rerum aperiam
          asperiores quisquam dolorem odit ipsum, in doloribus explicabo
          praesentium perferendis magni ducimus. Maiores, dicta non blanditiis
          minus, dolorum assumenda neque corporis enim omnis cupiditate
          accusantium earum sit libero natus delectus quis molestias culpa
          corrupti id architecto atque repellendus quas. Animi eaque praesentium
          adipisci accusamus. Corporis enim sint dolorum temporibus provident
          accusantium ipsum ad cum nemo aliquid deleniti necessitatibus
          architecto nulla excepturi, deserunt eaque voluptas est voluptate!
          Atque similique facere alias provident recusandae perspiciatis non hic
          eum commodi? Minima hic animi dignissimos cupiditate voluptatibus
          eveniet. Saepe, distinctio illum doloribus assumenda culpa quidem amet
          impedit earum? Iusto eum commodi ullam neque recusandae obcaecati
          placeat possimus ut facere suscipit quod nostrum molestiae blanditiis
          eligendi vero dolores, fugiat doloribus itaque quasi veritatis
          adipisci. Deserunt porro nobis odio cum minus iste, quibusdam dolore
          quia illum modi natus corrupti et ipsa tenetur ut. Minus quasi odit
          omnis consectetur iusto nihil. Temporibus, vero enim inventore
          deleniti neque, suscipit itaque quae excepturi commodi expedita ea,
          nisi quod quam laboriosam ab a consequatur necessitatibus
          reprehenderit saepe. Cupiditate, vitae optio! Possimus, iusto eveniet.
          Fugiat et consequatur quae consequuntur, itaque debitis, magnam, esse
          omnis natus ducimus explicabo maxime neque repudiandae. Doloremque
          dolorem pariatur quibusdam in debitis nihil fugiat? Esse quia,
          molestias obcaecati sapiente nisi ea ad neque fuga suscipit ipsum
          consequatur inventore quis ratione pariatur officiis? Quod architecto
          provident nemo. Ullam odio explicabo repellat? Sequi quod maiores cum
          quia aliquid unde modi necessitatibus vero deleniti aut?
          Exercitationem veritatis deleniti culpa corporis minima delectus
          inventore soluta ex, quia ea fuga totam officia ducimus sint officiis
          eum aperiam recusandae, labore est? Dignissimos quos omnis itaque a.
          Blanditiis debitis aperiam sit impedit obcaecati! Voluptate atque
          inventore fugit sequi similique!
        </Typography>
      </Box>
    </BlogLayout>
  )
}

export default BlogPostTemplate
