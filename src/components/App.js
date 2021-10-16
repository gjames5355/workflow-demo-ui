import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Fields from "./ui/Fields"
import Header from "./ui/Header"
import theme from "./ui/Theme"
import TaskGroups from "./ui/TaskGroups"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Divider />
        <Fields />
        <Divider />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/team" component={() => <div>Team Tasks</div>} />
          <Route exact path="/jobs" component={() => <div>Jobs</div>} />
          <Route
            exact
            path="/management"
            component={() => <div>Team Management</div>}
          />
        </Switch>
      </Router>
      <TaskGroups />
    </ThemeProvider>
  )
}

export default App
