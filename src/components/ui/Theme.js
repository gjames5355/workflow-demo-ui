import { createTheme } from "@material-ui/core/styles"

const veritextBlue = "#6C7EF5"
const veritextGray = "#BBBDC9"

export default createTheme({
  palette: {
    common: {
      blue: `${veritextBlue}`,
      gray: `${veritextGray}`,
    },
    primary: {
      main: `${veritextBlue}`,
    },
    secondary: {
      main: `${veritextGray}`,
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
