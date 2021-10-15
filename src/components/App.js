import { ThemeProvider } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Fields from "./ui/Fields"
import Header from "./ui/Header"
import theme from "./ui/Theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Divider />
      <Fields />
      <Divider />
    </ThemeProvider>
  )
}

export default App
