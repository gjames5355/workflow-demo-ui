import React, { useContext, useEffect, useState} from "react"
import { DataGrid } from "@material-ui/data-grid"
import { GlobalContext } from "../../context/GlobalContext";

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
]

const rows = [
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
  const { filterValue } = useContext(GlobalContext);
  const [data, setData] = useState(rows);

  useEffect(() => {
    const filteredRows = rows.filter(r => 
      r.processName.toLowerCase().includes(filterValue.toLowerCase()) 
      || r.taskName.toLowerCase().includes(filterValue.toLowerCase())
      || r.primaryVendor.toLowerCase().includes(filterValue.toLowerCase())
      || r.proceedingType.toLowerCase().includes(filterValue.toLowerCase())
      || r.client.toLowerCase().includes(filterValue.toLowerCase())
      );
      setData(filteredRows);
  }, [filterValue])
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={1}
        onColumnOrderChange
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
