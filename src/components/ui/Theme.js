import { createTheme } from "@material-ui/core/styles"

// const veritextBlue = "#6C7EF5"
const veritextSecondary = "#A9D1F8"

export default createTheme({
  palette: {
    common: {
      // blue: `${veritextBlue}`,
      gray: `${veritextSecondary}`,
    },
    // primary: {
    //   main: `${veritextBlue}`,
    // },
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
