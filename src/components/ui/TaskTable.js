import * as React from "react"
import { DataGrid } from "@material-ui/data-grid"
import IconButton from "@material-ui/core/IconButton"
import FlagIcon from "@material-ui/icons/Flag"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import TodayIcon from "@material-ui/icons/Today"
import GroupsIcon from "@material-ui/icons/Group"
import { useState } from "react"
import VTTaskPopover from "./task-popover/TaskPopover"
import SnoozePopover from "./snooze-popover/SnoozePopover"
import VTFlagPopover from "./flag-popover/FlagPopover"

const initialRows = [
  {
    id: 1,
    processName: "Produce MPEG",
    taskName: "Stich MPEG",
    priority: "High",
    division: "South Carolina",
    childDivision: "Columbia",
    dateDime: "10/18/2021 9:00AM",
    thirdParty: "Third",
    client: "Kassel McVey",
    case: "Addison, Lavaunda Vs. South Carolina Dept Of Trans",
    primaryVendor: "Solange Ruiz-Uribe",
    deliveryMethod: "Expedited",
    deliveryDays: 3,
    jobDueDate: "10/21/2021",
    scheduleCity: "Columbia",
    proceedingType: "Depositions",
    assignedDate: "10/18/2021",
    litigationType: "Personal Injury/Negligence",
    taskDueDate: "10/21/2021",
    jobNumber: 4520001,
    status: "Assigned",
  },
  {
    id: 2,
    processName: "Produce JPG",
    taskName: "Stich JPG",
    priority: "Medium",
    division: "South Carolina",
    childDivision: "Columbia",
    dateDime: "10/18/2021 9:00AM",
    thirdParty: "Third Party",
    client: "Kassel McVey",
    case: "Addison, Lavaunda Vs. South Carolina Dept Of Trans",
    primaryVendor: "Solange Ruiz-Uribe",
    deliveryMethod: "Expedited",
    deliveryDays: 3,
    jobDueDate: "10/21/2021",
    scheduleCity: "Columbia",
    proceedingType: "Depositions",
    assignedDate: "10/18/2021",
    litigationType: "Personal Injury/Negligence",
    taskDueDate: "10/21/2021",
    jobNumber: 4520001,
    status: "Assigned",
  },
]

export default function DataTable() {
  const [rows, setRows] = useState(initialRows)
  const [selectedTask, setSelectedTask] = useState({
    open: false,
    openSnooze: false,
    openFlag: false,
  })
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElSnooze, setAnchorElSnooze] = useState(null)
  const [anchorElFlag, setAnchorElFlag] = useState(null)

  const closeModal = () => {
    setSelectedTask({
      task: undefined,
      open: false,
      openSnooze: false,
    })
    setAnchorEl(null)
    setAnchorElSnooze(null)
    setAnchorElFlag(null)
  }

  const columns = [
    {
      field: "processName",
      headerName: "Process Name",
      width: 200,
      editable: false,
    },
    {
      field: "taskName",
      headerName: "Task Name",
      width: 200,
      editable: false,
    },
    {
      field: "priority",
      headerName: "Priority",
      width: 200,
      editable: false,
    },
    {
      field: "division",
      headerName: "Division",
      width: 200,
    },
    {
      field: "childDivision",
      headerName: "Child Division",
      width: 200,
      editable: false,
    },
    {
      field: "dateDime",
      headerName: "Date/Time",
      width: 200,
      editable: false,
    },
    {
      field: "client",
      headerName: "Client",
      width: 200,
      editable: false,
    },
    {
      field: "thirdParty",
      headerName: "Third Party",
      width: 200,
      editable: false,
    },
    {
      field: "case",
      headerName: "Case",
      width: 200,
      editable: false,
    },
    {
      field: "primaryVendor",
      headerName: "Primary Vendor",
      width: 200,
      editable: false,
    },
    {
      field: "deliveryMethod",
      headerName: "Delivery Method",
      width: 200,
      editable: false,
    },
    {
      field: "deliveryDays",
      headerName: "Delivery Days",
      width: 200,
      editable: false,
    },
    {
      field: "jobDueDate",
      headerName: "Job Due Date",
      width: 200,
      editable: false,
    },
    {
      field: "scheduleCity",
      headerName: "Schedule City",
      width: 200,
      editable: false,
    },
    {
      field: "proceedingType",
      headerName: "Proceeding Type",
      width: 200,
      editable: false,
    },
    {
      field: "litigationType",
      headerName: "Litigation Type",
      width: 200,
      editable: false,
    },
    {
      field: "jobNumber",
      headerName: "Job Number",
      width: 200,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: false,
    },
    {
      field: "assignedDate",
      headerName: "Assigned Date",
      width: 200,
      editable: false,
    },
    {
      field: "taskDueDate",
      headerName: "Task Due Date",
      width: 200,
      editable: false,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const onCommentHandler = (event) => {
          console.log("row", params.row)
          setSelectedTask({
            open: true,
            task: params.row,
          })
          setAnchorEl(event.currentTarget)
        }

        const onSnoozeHandler = (event) => {
          setSelectedTask({
            openSnooze: true,
            task: params.row,
          })
          setAnchorElSnooze(event.currentTarget)
        }

        const onFlagHandler = (event) => {
          console.log("params.row", params.row)
          setSelectedTask({
            openFlag: true,
            task: params.row,
          })
          setAnchorEl(event.currentTarget)
        }

        let priorityColor = null
        switch (params.row.priority) {
          case "High":
            priorityColor = "red"
            break
          case "Medium":
            priorityColor = "orange"
            break
          default:
            priorityColor = "lightgray"
            break
        }

        return (
          <div>
            <VTTaskPopover
              task={selectedTask.task}
              open={selectedTask.open}
              anchorE1={anchorEl}
              onClose={closeModal}
            ></VTTaskPopover>
            <SnoozePopover
              task={selectedTask.task}
              open={selectedTask.openSnooze}
              anchorE1={anchorElSnooze}
              onClose={closeModal}
            ></SnoozePopover>
            <VTFlagPopover
              task={selectedTask.task}
              open={selectedTask.openFlag}
              anchorE1={anchorElFlag}
              onClose={closeModal}
            ></VTFlagPopover>
            <IconButton
              onClick={onFlagHandler}
              style={{
                color: priorityColor,
              }}
            >
              <FlagIcon />
            </IconButton>
            <IconButton onClick={onCommentHandler}>
              <ChatBubbleIcon style={{ color: "#104B67" }} />
            </IconButton>
            <IconButton>
              <TodayIcon
                onClick={onSnoozeHandler}
                style={{ color: "#104B67" }}
              />
            </IconButton>
            <IconButton>
              <GroupsIcon style={{ color: "#104B67" }} />
            </IconButton>
          </div>
        )
      },
    },
  ]

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onColumnOrderChange
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
