import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { blueGrey, purple } from "@material-ui/core/colors"

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#F5F1E6",
    },
    primary: {
      light: "#5b7868",
      main: "#325743",
      dark: "#233c2e",
      contrastText: "#F5F1E6",
    },
    secondary: {
      light: "#deff59",
      main: "#D6FF30",
      dark: "#95b221",
      contrastText: "#000",
    },
    text: {
      primary: "#325743",
      secondary: "#D6FF30",
    },
    background: {
      paper: "#F5F1E6",
      default: "#F5F1E6",
    },
    type: "light",
  },
  typography: {
    // fontFamily: "Crimson Text",
    //  fontFamily: ["Poppins", "sans-serif"].join(","),

    h1: {
      fontFamily: ["Crimson Text", "sans-serif"].join(","),
      fontSize: 36,
      paddingBottom: 16,
    },
    h2: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 24,
      fontWeight: 700,
    },
    h3: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 16,
      fontWeight: 700,
    },
    h4: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 700,
    },
    body1: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14,
    },
    body2: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    button: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: 500,
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: "114%",
    },
    caption: {
      fontFamily: "Crimson Text",
    },
  },
  overrides: {},
})

export default theme
