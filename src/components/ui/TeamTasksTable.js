import React, { useContext, useEffect, useState } from "react"
import { DataGrid } from "@material-ui/data-grid"
import { GlobalContext } from "../../context/GlobalContext"
import IconButton from "@material-ui/core/IconButton"
import FlagIcon from "@material-ui/icons/Flag"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"
import TodayIcon from "@material-ui/icons/Today"
import GroupsIcon from "@material-ui/icons/Group"
import VTTaskPopover from "./task-popover/TaskPopover"
import VTSnoozePopover from "./snooze-popover/SnoozePopover"
import VTFlagPopover from "./flag-popover/FlagPopover"
import ReassignPopover from "./reassign-popover/ReassignPopover"

const initialRows = [
  {
    id: 1,
    processName: "Produce MPEG",
    taskName: "QC Original Files",
    priority: "Normal",
    division: "Maryland",
    date_time: "10/7/21 9:00AM",
    client: "Litigation Services LLC",
    case: "Dorsey, Bessie Et Al. v. Lm General Insurance Company",
    primaryVendor: "Cappy Hallock",
    deliveryMethod: "Normal",
    deliveryDays: 10,
    jobDueDate: "10/21/2021",
    scheduleCity: "Baltimore",
    proceedingType: "Depositions",
    litigationType: "CR Referral",
    jobNumber: 4544414,
    status: "Assgined",
    assignedDate: "10/18/2021",
    taskDueDate: "10/21/2021",
    assignedTo: "mdrenkalo",
  },
  {
    id: 2,
    processName: "Produce MPEG",
    taskName: "Review/ QC Files/ Prepare PIP Video",
    priority: "Urgent",
    division: "Houston",
    date_time: "10/8/2021  1:00:00 PM",
    client: "Arnold & Itkin LLP",
    case: "In Re Brenn De Bree, Et Al.",
    primaryVendor: "Joanna Sagastisado",
    deliveryMethod: "Expedited",
    deliveryDays: 2,
    jobDueDate: "10/20/2021",
    scheduleCity: "Houston",
    proceedingType: "Depositions",
    litigationType: "Misc/Unknowns",
    jobNumber: 4572355,
    status: "Overdue",
    assignedDate: "10/20/2021",
    taskDueDate: "10/20/2021",
    assignedTo: "dmcclutchy",
  },
]

export default function DataTable() {
  const { filterValue, setCount } = useContext(GlobalContext);
  const [data, setData] = useState(initialRows);
  const [selectedTask, setSelectedTask] = useState({
    open: false,
    openSnooze: false,
    openFlag: false,
    openAssign: false,
  })
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElSnooze, setAnchorElSnooze] = useState(null);
  const [anchorElFlag, setAnchorElFlag] = useState(null);

  useEffect(() => {
    const filteredRows = initialRows.filter(r => 
      r.processName.toLowerCase().includes(filterValue.toLowerCase()) 
      || r.taskName.toLowerCase().includes(filterValue.toLowerCase())
      || r.primaryVendor.toLowerCase().includes(filterValue.toLowerCase())
      || r.proceedingType.toLowerCase().includes(filterValue.toLowerCase())
      || r.client.toLowerCase().includes(filterValue.toLowerCase())
      || r.division.toLowerCase().includes(filterValue.toLowerCase())
      || r.priority.toLowerCase().includes(filterValue.toLowerCase())
      );
      setData(filteredRows);
  }, [filterValue])

  const handleSelectRow = e => {
    setCount(e.length);
  }

  const closeModal = () => {
    setSelectedTask({
      task: undefined,
      open: false,
      openSnooze: false,
      openAssign: false,
    });
    setAnchorEl(null);
    setAnchorElSnooze(null);
    setAnchorElFlag(null);
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
      field: "date_time",
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
      field: "assignedTo",
      headerName: "Assigned To",
      width: 200,
      editable: false,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const onCommentHandler = (event) => {
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
          setSelectedTask({
            openFlag: true,
            task: params.row,
          })
          setAnchorEl(event.currentTarget)
        }

        const onGroupIconClick = e => {
          setSelectedTask(prev => ({...prev, openAssign: true, task: params.row}));
          setAnchorEl(e.currentTarget)
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
              anchorE1={anchorElSnooze}
              onClose={closeModal}
            ></VTSnoozePopover>
            <VTFlagPopover
              task={selectedTask.task}
              open={selectedTask.openFlag}
              anchorE1={anchorElFlag}
              onClose={closeModal}
            ></VTFlagPopover>
            <ReassignPopover isOpen={selectedTask.openAssign} anchor={anchorEl} onClose={closeModal}/>
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
              <GroupsIcon style={{ color: "#104B67" }} onClick={onGroupIconClick}/>
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
        pageSize={2}
        onColumnOrderChange
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={handleSelectRow}
      />
    </div>
  )
}
