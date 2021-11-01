import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Fields from "./ui/shared/Fields"
import Header from "./ui/shared/Header"
import theme from "./ui/shared/Theme"
import PersonalTasks from "./ui/shared/PersonalTasks"
import TeamTasks from "./ui/shared/TeamTasks"
import { GlobalContext } from '../context/GlobalContext'

function App() {
  const [count, setCount] = useState(0);
  const [filterValue, setFilterValue] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const value = {count, setCount, filterValue, setFilterValue, selectedRows, setSelectedRows}

  return (
    <GlobalContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Divider />
          <Fields />
          <Divider />
          <Switch>
            <Route exact path="/">
              <PersonalTasks />
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
        {/* <PersonalTasks /> */}
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

export default App
