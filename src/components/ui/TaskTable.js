import React, { useContext, useEffect, useState } from "react"
import { DataGrid } from "@material-ui/data-grid"
import { GlobalContext } from "../../context/GlobalContext"
import IconButton from "@material-ui/core/IconButton"
import FlagIcon from "@material-ui/icons/Flag"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import TodayIcon from "@material-ui/icons/Today"
import GroupsIcon from "@material-ui/icons/Group"
import VTTaskPopover from "./task-popover/TaskPopover"
import SnoozePopover from "./snooze-popover/SnoozePopover"
import VTFlagPopover from "./flag-popover/FlagPopover"
import ReassignPopover from "./reassign-popover/ReassignPopover"

let initialRows = [
  {
    id: 1,
  processName: "Produce MPEG",
    taskName: "Stich MPEG",
    priority: "Normal",
    jobNumber: 4520001,
    division: "South Carolina",
    childDivision: "",
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
    status: "Assigned",
  },
]

const DataTable = ({ type, rows }) => {
  const { filterValue, setCount } = useContext(GlobalContext)
  
  const [data, setData] = useState(rows)
  const [selectedTask, setSelectedTask] = useState({
    open: false,
    openSnooze: false,
    openFlag: false,
    openAssign: false,
  })
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElSnooze, setAnchorElSnooze] = useState(null)
  const [anchorElFlag, setAnchorElFlag] = useState(null)
  console.log('rows', rows);

  useEffect(() => {
    setData(rows)
  }, [rows])


  useEffect(() => {  

    const urgentTasks = rows.filter(x => x?.priority === 'Urgent');
    const activeTasks = rows.filter(x => x?.status !== 'New');
    const snoozedTasks = rows.filter(x => x?.status === 'Snoozed');

    switch (type) {
      case 'urgent':
        setData(urgentTasks);
        break;
      case 'active':
        setData(activeTasks);
        break;
      case 'snoozed':
        setData(snoozedTasks);
        break;
      default:
        break;
    }

  }, [type])

  useEffect(() => {
    if(filterValue) {
      const filteredRows = data.filter(
        (r) =>
          r.processName.toLowerCase().includes(filterValue.toLowerCase()) ||
          r.taskName.toLowerCase().includes(filterValue.toLowerCase()) ||
          r.primaryVendor.toLowerCase().includes(filterValue.toLowerCase()) ||
          r.proceedingType.toLowerCase().includes(filterValue.toLowerCase()) ||
          r.client.toLowerCase().includes(filterValue.toLowerCase()) ||
          r.division.toLowerCase().includes(filterValue.toLowerCase()) ||
          r.priority.toLowerCase().includes(filterValue.toLowerCase())
      )
      // setData(filteredRows)
    }
  }, [filterValue, data])

  const closeModal = () => {
    setSelectedTask({
      task: undefined,
      open: false,
      openSnooze: false,
      openAssign: false,
    })
    setAnchorEl(null)
    setAnchorElSnooze(null)
    setAnchorElFlag(null)
  }

  const handleSelectRow = (e) => {
    setCount(e.length)
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
      field: "jobNumber",
      headerName: "Job Number",
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

        const onGroupIconClick = (e) => {
          setSelectedTask((prev) => ({
            ...prev,
            openAssign: true,
            task: params.row,
          }))
          setAnchorEl(e.currentTarget)
        }

        // let priorityColor = null
        // switch (params.row.priority) {
        //   case "High":
        //     priorityColor = "red"
        //     break
        //   case "Medium":
        //     priorityColor = "orange"
        //     break
        //   default:
        //     priorityColor = "lightgray"
        //     break
        // }

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
            <ReassignPopover
              isOpen={selectedTask.openAssign}
              anchor={anchorEl}
              onClose={closeModal}
            />
            <IconButton onClick={onFlagHandler} style={{ color: "red" }}>
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
              <GroupsIcon
                onClick={onGroupIconClick}
                style={{ color: "#104B67" }}
              />
            </IconButton>
          </div>
        )
      },
    },
  ]

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        onColumnOrderChange
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={handleSelectRow}
      />
    </div>
  )
}

export default DataTable;
