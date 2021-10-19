import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Fields from "./ui/Fields"
import Header from "./ui/Header"
import theme from "./ui/Theme"
import TaskGroups from "./ui/TaskGroups"
import SubHeader from "./ui/SubHeader"
import TeamTasks from "./ui/TeamTasks"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Divider />
        <Fields />
        <Divider />
        <Switch>
          <Route exact path="/">
            <TaskGroups />
          </Route>
          <Route exact path="/team">
            <TeamTasks />
          </Route>
          <Route exact path="/jobs" component={() => <div>Jobs</div>} />
          <Route
            exact
            path="/management"
            component={() => <div>Team Management</div>}
          />
        </Switch>
      </Router>
      <SubHeader />
      <TaskGroups />
    </ThemeProvider>
  )
}

export default App
