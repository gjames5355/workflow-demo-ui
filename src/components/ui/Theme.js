import { createTheme } from "@material-ui/core/styles"

const veritextBlue = "#0C79C8"
const veritextSecondary = "#A9D1F8"
const veritextWhite = "#fff"

export default createTheme({
  palette: {
    common: {
      blue: `${veritextBlue}`,
      gray: `${veritextSecondary}`,
      white: `${veritextWhite}`
    },
    primary: {
       main: `${veritextBlue}`,
    },
    secondary: {
      main: `${veritextSecondary}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
})
