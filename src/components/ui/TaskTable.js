import * as React from "react"
import { DataGrid } from "@material-ui/data-grid"
import IconButton from "@material-ui/core/IconButton"
import FlagIcon from "@material-ui/icons/Flag"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import TodayIcon from "@material-ui/icons/Today"
import GroupsIcon from "@material-ui/icons/Group"
import { useState, useRef } from "react"
import  VTTaskPopover  from './task-popover/TaskPopover';
 

const initialRows = [
  { id: 1, processName: "Snow", taskName: "Jon", age: 35 },
  { id: 2, processName: "Lannister", taskName: "Cersei", age: 42 },
  { id: 3, processName: "Lannister", taskName: "Jaime", age: 45 },
  { id: 4, processName: "Stark", taskName: "Arya", age: 16 },
  { id: 5, processName: "Targaryen", taskName: "Daenerys", age: null },
  { id: 6, processName: "Melisandre", taskName: null, age: 150 },
  { id: 7, processName: "Clifford", taskName: "Ferrara", age: 44 },
  { id: 8, processName: "Frances", taskName: "Rossini", age: 36 },
  { id: 9, processName: "Roxie", taskName: "Harvey", age: 65 },
]


export default function DataTable() {
  const [rows, setRows] = useState(initialRows);
  const [selectedTask, setSelectedTask] = useState({
    open: false,
  });
  const [anchorEl, setAnchorEl] = useState(null);

  const closeModal = () => {
    setSelectedTask({
      task: undefined,
      open: false,
    });
    setAnchorEl(null);
  };

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

        
        const onCommentHandler = (event, action) => {
          console.log('clicked', event, action, params);
          setSelectedTask({
            open: true,
            task: params.row
          });
          
        }
  
        return (
          <div>
            <VTTaskPopover task={selectedTask.task} open={selectedTask.open} anchorE1={anchorEl} onClose={closeModal} ></VTTaskPopover>
            <IconButton style={{ color: "red" }}>
              <FlagIcon />
            </IconButton>
            <IconButton onClick={(event) => onCommentHandler(event, 'comment')}>
              <ChatBubbleIcon style={{ color: "#104B67" }} />
            </IconButton>
            <IconButton>
              <TodayIcon style={{ color: "#104B67" }} />
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
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
