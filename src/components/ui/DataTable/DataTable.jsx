import React, { useContext, useEffect, useState } from "react"
import { DataGrid } from "@material-ui/data-grid"
import { TABLE_COLUMNS } from "../../../constants/constants"
import Actions from "../actions/Actions"
import { useLocation } from "react-router"
import TeamStatus from "../team-status/TeamStatus"
import SearchIcon from "@material-ui/icons/Search"
import { InputBase, makeStyles, alpha } from "@material-ui/core"
import SubHeader from "../shared/SubHeader"
import { GlobalContext } from "../../../context/GlobalContext"
import "../OverDueStyling/OverDueRow.css"
import ActionsModal from "../modals/actions-modal/ActionsModal"
import TaskDetail from "../modals/task-detail-modal/TaskDetail"
import SnoozeModal from "../modals/snooze-modal/SnoozeModal"

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: 10,
    width: "20%",
    maxHeight: "35px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(3em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  subheaderContainer: {
    width: "80%",
  },
}))

const DataTable = ({ data }) => {
  const { updateTasks, updateRow, snoozeTask } = useContext(GlobalContext)
  const [selectedRows, setSelectedRows] = useState([])
  const { completeTask } = useContext(GlobalContext)
  const location = useLocation()
  const [columns, setColumns] = useState([])
  const [inputValue, setInputValue] = useState("")
  const classes = useStyles()
  const [innerData, setInnerData] = useState(data)
  const [count, setCount] = useState(0)
  const [openActions, setOpenActions] = useState(false)
  const [openDetails, setOpenDetails] = useState(false)
  const [modalType, setModalType] = useState("")
  const [openSnooze, setOpenSnooze] = useState(false)

  useEffect(() => {
    const tableType = location.pathname === "/team" ? "team" : "personal"
    const cols = [...TABLE_COLUMNS]
    const actions = {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => <Actions params={params} />,
    }

    const teamStatus = {
      field: "taskStatus",
      headerName: "Task Status",
      width: 200,
      editable: false,
      renderCell: (params) => <TeamStatus params={params} />,
    }

    const assignedTo = {
      field: "assignedTo",
      headerName: "Assigned To",
      width: 200,
      editable: false,
    }

    if (tableType === "personal") {
      setColumns([...cols, actions])
    } else {
      cols.splice(17, 0, teamStatus)
      setColumns([...cols, assignedTo, actions])
    }
  }, [location])

  useEffect(() => {
    if (inputValue) {
      const filteredData = data.filter(
        (r) =>
          r.jobNumber.toString().includes(inputValue.toLowerCase()) ||
          r.processName.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.taskName.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.taskDueDate.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.taskStatus.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.earliestVideoOrderDays
            .toString()
            .includes(inputValue.toLowerCase()) ||
          r.earliestVideoOrderDueDate
            .toLowerCase()
            .includes(inputValue.toLowerCase()) ||
          r.priority.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.caseName.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.division.toLowerCase().includes(inputValue.toLowerCase())
      )

      setInnerData(filteredData)
    }
  }, [inputValue, data])

  const handleSelectRow = (e) => {
    setCount(e.length)
    const selectedRowData = data.filter((row) => e.includes(row.id))
    setSelectedRows(selectedRowData)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleUnclaim = () => {
    const updatedRows = selectedRows.map((row) => {
      return {
        ...row,
        taskStatus: 'New',
        assignedTo: '',
      }
    })
    updateTasks(updatedRows)
    setSelectedRows([])
  }

  const handleClaim = () => {
    const updatedRows = selectedRows.map((row) => {
      return {
        ...row,
        assignedTo: 'gjames',
      }
    })
    updateTasks(updatedRows)
    setSelectedRows([])
  }

  const handleCompleted = () => {
    const updatedRows = selectedRows.map((row) => {
      return {
        ...row,
        taskStatus: "Complete",
      }
    })
    completeTask(updatedRows)
  }

  const handleClose = () => {
    setOpenActions(false)
    setOpenSnooze(false)
    setOpenDetails(false)
  }

  const handleModalSave = (row) => {
    setOpenActions(false)
    setOpenDetails(false)
    handleRowUpdate(row)
  }

  const handleAction = (type) => {
    setModalType(type)
    setOpenActions(true)
  }

  const handleDoubleClick = (e) => {
    setOpenDetails(true)
    setSelectedRows([e.row])
  }

  const handleRowUpdate = (row) => {
    const source = location.pathname === '/team' ? 'group' : 'personal'
    updateRow(row, source)
    setOpenDetails(false)
  }

  const handleSnooze = () => {
    if (selectedRows[0].taskStatus === 'Snoozed') {
      onSnoozeSave()
    } else {
      setOpenSnooze(true)
    }
  }

  const onSnoozeSave = (dateTime) => {
    setOpenSnooze(false)
    const updatedRow = selectedRows[0]
    if (selectedRows[0].taskStatus !== 'Snoozed') {
      updatedRow.snoozeDate = `${dateTime.date} ${dateTime.time}`
      updatedRow.taskStatus = 'Snoozed'
    } else {
      updatedRow.taskStatus = 'Assigned'
      updatedRow.snoozeDate = ''
    }
    snoozeTask(updatedRow, location.pathname === '/team' ? 'group' : 'personal')
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div className={classes.container}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search???"
            value={inputValue}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={handleInputChange}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.subheaderContainer}>
          <SubHeader
            count={count}
            handleCount={setCount}
            rows={selectedRows}
            handleRows={setSelectedRows}
            onClaim={handleClaim}
            onUnclaim={handleUnclaim}
            handleCompleted={handleCompleted}
            onAction={(type) => handleAction(type)}
            onSnooze={handleSnooze}
          />
        </div>
      </div>
      <ActionsModal
        open={openActions}
        onClose={handleClose}
        row={selectedRows[0]}
        title="Update Selected Row"
        onSave={(row) => handleModalSave(row)}
        type={modalType}
      />
      <TaskDetail
        open={openDetails}
        onClose={handleClose}
        row={selectedRows[0]}
        location={location}
        onClaim={handleClaim}
        onUnclaim={handleUnclaim}
        onAction={(type) => handleAction(type)}
        onComplete={handleCompleted}
        onSave={(row) => handleRowUpdate(row)}
        onSnooze={handleSnooze}
      />
      <SnoozeModal 
        open={openSnooze}
        onClose={handleClose}
        onSave={(ev) => onSnoozeSave(ev)}
      />
      <DataGrid
        getRowClassName={(row) => `${row.getValue(row.id, "taskStatus")}-Row`}
        rows={inputValue ? innerData : data}
        columns={columns}
        onColumnOrderChange
        checkboxSelection
        disableSelectionOnClick
        onRowDoubleClick={handleDoubleClick}
        onSelectionModelChange={handleSelectRow}
        forceUpdate
      />
    </div>
  )
}

export default DataTable
