import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Fields from './ui/shared/Fields'
import Header from './ui/shared/Header'
import theme from './ui/shared/Theme'
import PersonalTasks from './ui/shared/PersonalTasks'
import CompletedTasks from './ui/shared/CompletedTask'
import TeamTasks from './ui/shared/TeamTasks'
import { GlobalContext } from '../context/GlobalContext'
import { PERSONAL_TASKS, GROUP_TASKS } from '../constants/constants'

function App() {
  const [count, setCount] = useState(0)
  const [filterValue, setFilterValue] = useState('')
  const [selectedRows, setSelectedRows] = useState([])
  const [personalTasks, setPersonalTasks] = useState(PERSONAL_TASKS)
  const [groupTasks, setGroupTasks] = useState(GROUP_TASKS)

  const updateTasks = (task) => {
    task.map((item) => {
      const index = personalTasks.findIndex(
        (x) => x.jobNumber === item.jobNumber
      )
      const newGroupTasks = [...GROUP_TASKS]
      const newPersonalTasks = [...PERSONAL_TASKS]
      if (index >= 0) {
        newPersonalTasks.splice(index, 1)
        newGroupTasks.push(item)
      } else {
        newPersonalTasks.push(item)
        newGroupTasks.splice(
          groupTasks.findIndex((x) => x.jobNumber === item.jobNumber),
          1
        )
      }
      setGroupTasks(newGroupTasks)
      setPersonalTasks(newPersonalTasks)
      return null
    })
  }

  const completeTask = (task) => {
    const newGroupTasks = [...groupTasks]
    const newPersonalTasks = [...personalTasks]
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

  const updateRow = (row, type) => {
    const updatedRow = {
      priority: row.priority,
      taskStatus: row.taskStatus,
      taskDueDate: row.taskDueDate,
      earliestVideoOrderDueDate: row.earliestVideoOrderDueDate,
      earliestVideoOrderDays: row.earliestVideoOrderDays,
    }
    if (type === 'group') {
      const newGroupTasks = [...groupTasks]
      const currentTaskIndex = newGroupTasks.findIndex(x => x.id === row.id)
      const currentTask = newGroupTasks.find(x => x.id === row.id)

      newGroupTasks.splice(currentTaskIndex, 1, {...currentTask, ...updatedRow})
      setGroupTasks(newGroupTasks)
    } else {
      const newPersonalTasks = [...personalTasks]
      const currentTaskIndex = newPersonalTasks.findIndex(x => x.id === row.id)
      const currentTask = newPersonalTasks.find(x => x.id === row.id)

      newPersonalTasks.splice(currentTaskIndex, 1, {...currentTask, ...updatedRow})
      setPersonalTasks(newPersonalTasks)
    }
  }

  const snoozeTask = (row, type) => {
    const updatedRow = {
      snoozeDate: row.snoozeDate,
      taskStatus: row.taskStatus,
    }
    if (type === 'group') {
      const newGroupTasks = [...groupTasks]
      const currentTaskIndex = newGroupTasks.findIndex(x => x.id === row.id)
      const currentTask = newGroupTasks.find(x => x.id === row.id)

      newGroupTasks.splice(currentTaskIndex, 1, {...currentTask, ...updatedRow})
      setGroupTasks(newGroupTasks)
    } else {
      const newPersonalTasks = [...personalTasks]
      const currentTaskIndex = newPersonalTasks.findIndex(x => x.id === row.id)
      const currentTask = newPersonalTasks.find(x => x.id === row.id)

      newPersonalTasks.splice(currentTaskIndex, 1, {...currentTask, ...updatedRow})
      setPersonalTasks(newPersonalTasks)
    }
  }

  const value = {
    count,
    setCount,
    filterValue,
    setFilterValue,
    selectedRows,
    setSelectedRows,
    personalTasks,
    setPersonalTasks,
    groupTasks,
    setGroupTasks,
    updateTasks,
    completeTask,
    updateRow,
    snoozeTask,
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
            <Route exact path='/'>
              <PersonalTasks />
            </Route>
            <Route exact path='/team'>
              <TeamTasks />
            </Route>
            <Route exact path='/completed'>
              <CompletedTasks />
            </Route>
            <Route exact path='/jobs' component={() => <div>Jobs</div>} />
            <Route
              exact
              path='/management'
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
