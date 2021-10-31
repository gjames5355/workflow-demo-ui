export const PERSONAL_TASKS = [
  {
    id: 1,
    jobNumber: 4520001,
    processName: "Produce MPEG",
    taskName: "Stich MPEG",
    taskDueDate: "10/21/2021",
    taskStatus: "Assigned",
    priority: "Urgent",
    earliestVideoOrderDays: 15,
    earliestVideoOrderDueDate: "11/18/2021",
    division: "South Carolina",
  },
  {
    id: 2,
    jobNumber: 4520001,
    processName: "Produce MPEG 2",
    taskName: "Stich MPEG Normal Task",
    taskDueDate: "10/21/2021",
    taskStatus: "New",
    priority: "Normal",
    earliestVideoOrderDays: 5,
    earliestVideoOrderDueDate: "11/5/2021",
    division: "South Carolina",
  },
]

export const GROUP_TASKS = [
  {
    id: 1,
    jobNumber: 4544414,
    processName: "Produce MPEG",
    taskName: "QC Original Files",
    taskDueDate: "10/21/2021",
    taskStatus: "Assgined",
    priority: "Normal",
    earliestVideoOrderDays: 10,
    earliestVideoOrderDueDate: "10/18/2021",
    caseName: "Dorsey, Bessie Et Al. v. Lm General Insurance Company",
    division: "Maryland",
    assignedTo: "mdrenkalo",
  },
  {
    id: 2,
    jobNumber: 4572355,
    processName: "Produce MPEG",
    taskName: "Review/ QC Files/ Prepare PIP Video",
    taskDueDate: "10/20/2021",
    taskStatus: "Overdue",
    priority: "Urgent",
    earliestVideoOrderDays: 10,
    earliestVideoOrderDueDate: "10/18/2021",
    caseName: "In Re Brenn De Bree, Et Al.",
    division: "Houston",
  },
  {
    id: 3,
    jobNumber: 4520001,
    processName: "Produce MPEG",
    taskName: "Stich MPEG",
    taskDueDate: "10/21/2021",
    taskStatus: "New",
    priority: "High",
    earliestVideoOrderDays: 10,
    earliestVideoOrderDueDate: "10/18/2021",
    caseName: "Addison, Lavaunda Vs. South Carolina Dept Of Trans",
    division: "South Carolina",
  },
  {
    id: 4,
    jobNumber: 3490934,
    processName: "Produce MP4",
    taskName: "QC Files/ Prepare PIP Video/ Review",
    taskDueDate: "10/21/2021",
    taskStatus: "Overdue",
    priority: "Urgent",
    earliestVideoOrderDays: 5,
    earliestVideoOrderDueDate: "10/18/2021",
    caseName: "In Re Brenn De Bree, Et Al.",
    division: "Dallas",
  },
]

export const TABLE_COLUMNS = [
  {
    field: "jobNumber",
    headerName: "Job Number",
    width: 200,
    editable: false,
  },
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
    field: "taskDueDate",
    headerName: "Task Due Date",
    width: 200,
    editable: false,
  },
  {
    field: "taskStatus",
    headerName: "Task Status",
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
    field: "earliestVideoOrderDays",
    headerName: "Earliest Video Order Days",
    width: 200,
    editable: false,
  },
  {
    field: "earliestVideoOrderDueDate",
    headerName: "Earliest Video Order Due Date",
    width: 200,
    editable: false,
  },
  {
    field: "caseName",
    headerName: "Case Name",
    width: 200,
    editable: false,
  },
  {
    field: "division",
    headerName: "Division",
    width: 200,
  },
]
