import React from "react"

export const GlobalContext = React.createContext({
  count: 0,
  setCount: () => {},
  filterValue: "",
  setFilterValue: () => {},
  selectedRows: [],
  setSelectedRows: () => {},
  personalTasks: [],
  setPersonalTasks: () => {},
  groupTasks: [],
  setGroupTasks: () => {},
  updateTask: () => {},
  completeTask: () => {},
})
