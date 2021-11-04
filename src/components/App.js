import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import Fields from "./ui/shared/Fields"
import Header from "./ui/shared/Header"
import theme from "./ui/shared/Theme"
import PersonalTasks from "./ui/shared/PersonalTasks"
import CompletedTasks from "./ui/shared/CompletedTask"
import TeamTasks from "./ui/shared/TeamTasks"
import { GlobalContext } from "../context/GlobalContext"
import { PERSONAL_TASKS, GROUP_TASKS } from "../constants/constants"

function App() {
  const [count, setCount] = useState(0)
  const [filterValue, setFilterValue] = useState("")
  const [selectedRows, setSelectedRows] = useState([])
  const [groupTasks, setGroupTasks] = useState(GROUP_TASKS)
  const [personalTasks, setPersonalTasks] = useState(PERSONAL_TASKS)

  const completeTask = (task) => {
    const newGroupTasks = [...groupTasks]
    const newPersonalTasks = [...personalTasks]
    console.log(task)
    task.forEach((item) => {
      const index = newPersonalTasks.findIndex(
        (x) => x.jobNumber === item.jobNumber
      )

      if (index >= 0) {
        newPersonalTasks.splice(index, 1)
        newPersonalTasks.push(item)
      } else {
        newGroupTasks.splice(
          newGroupTasks.findIndex((x) => x.jobNumber === item.jobNumber),
          1
        )
        newGroupTasks.push(item)
      }

      return null
    })
    setGroupTasks(newGroupTasks)
    setPersonalTasks(newPersonalTasks)
  }

  const value = {
    count,
    setCount,
    filterValue,
    setFilterValue,
    selectedRows,
    setSelectedRows,
    groupTasks,
    setGroupTasks,
    personalTasks,
    setPersonalTasks,
    completeTask,
  }

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
            <Route exact path="/completed">
              <CompletedTasks />
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
