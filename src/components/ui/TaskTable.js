import * as React from "react"
import { DataGrid } from "@material-ui/data-grid"

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
]

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
]

export default function DataTable() {
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
