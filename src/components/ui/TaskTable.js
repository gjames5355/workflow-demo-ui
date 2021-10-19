import * as React from "react"
import { DataGrid } from "@material-ui/data-grid"
import IconButton from "@material-ui/core/IconButton"
import FlagIcon from "@material-ui/icons/Flag"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import TodayIcon from "@material-ui/icons/Today"
import GroupsIcon from "@material-ui/icons/Group"
import { useState, useRef } from "react"
import VTTaskPopover from "./task-popover/TaskPopover"
import VTSnoozePopover from "./snooze-popover/snoozePopover"

const initialRows = [
  {
    id: 1,
    processName: "Produce MPEG",
    taskName: "Stich MPEG",
    priority: "High",
    division: "South Carolina",
    date_time: "10/18/21 9:00AM",
    client: "Kassel McVey",
    case: "Addison, Lavaunda Vs. South Carolina Dept Of Trans",
    primaryVendor: "Solange Ruiz-Uribe",
    deliveryMethod: "Expedited",
    deliveryDays: 3,
    jobDueDate: "10/21/2021",
    scheduleCity: "Columbia",
    proceedingType: "Depositions",
    litigationType: "Personal Injury/Negligence",
    jobNumber: 4520001,
    status: "New",
  },
]

export default function DataTable() {
  const [rows, setRows] = useState(initialRows)
  const [selectedTask, setSelectedTask] = useState({
    open: false,
    openSnooze: false,
  })
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorELSnooze, setAnchorELSnooze] = useState(null)

  const closeModal = () => {
    setSelectedTask({
      task: undefined,
      open: false,
      openSnooze: false,
    })
    setAnchorEl(null)
    setAnchorELSnooze(null)
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
      description: "This column has a value getter and is not sortable.",
      width: 200,
      // valueGetter: (params) =>
      //   `${params.getValue(params.id, "firstName") || ""} ${
      //     params.getValue(params.id, "lastName") || ""
      //   }`,
    },
    {
      field: "childDivision",
      headerName: "Child Division",
      width: 200,
      editable: false,
    },
    {
      field: "date&time",
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
      field: "jobDueDate ",
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
      field: "type",
      headerName: "Type",
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
        const onCommentHandler = () => {
          setSelectedTask({
            open: true,
            task: params.row,
          })
        }

        const onSnoozeHandler = () => {
          setSelectedTask({
            openSnooze: true,
            task: params.row,
          })
        }

        return (
          <div>
            <VTTaskPopover
              task={selectedTask.task}
              open={selectedTask.open}
              anchorE1={anchorEl}
              onClose={closeModal}
            ></VTTaskPopover>
            <VTSnoozePopover
              task={selectedTask.task}
              open={selectedTask.openSnooze}
              anchorE1={anchorELSnooze}
              onClose={closeModal}
            ></VTSnoozePopover>
            <IconButton style={{ color: "red" }}>
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
        pageSize={1}
        onColumnOrderChange
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
