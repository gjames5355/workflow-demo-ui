import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import DataTable from "./TaskTable"
import AddTaskButton from "./add-task-modal/AddTaskModal"
import { useEffect, useState } from "react"
const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.typography.tab,
    fontSize: "1.25rem",
  },
  accordion1: {
    marginTop: "15px",
  },
  accordion2: {
    marginTop: "35px",
  },
  accordion3: {
    marginTop: "35px",
  },
  accordionSummary1: {
    backgroundColor: "#E35C5C",
  },
  accordionSummary2: {
    backgroundColor: "#63B0F3",
  },
  accordionSummary3: {
    backgroundColor: "#FBD250",
  },
  paragraph: {
    ...theme.typography.tab,
    color: "#63B0F3",
    fontSize: "1.25rem",
    display: "flex",
    marginTop: "45px",
  },
  arrowIcon: {
    marginLeft: "5px",
  },
}))

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


const TaskGroups = () => {
  const classes = useStyles()
  const [rowsData, setRowsData] = useState(initialRows)


  const onSaveTask = (event) => {
    event.preventDefault()
    const newRowsData = [...rowsData];
    newRowsData.push({
      id: 6,
      processName: "Produce MPEG 2",
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
      taskName: event.target.title.value,
      priority: event.target.priority?.value,
      status: "New"
    })

    setRowsData(newRowsData);
    console.log('newRows', rowsData);
  }


  return (
    <div>
      <AddTaskButton onSaveTask={onSaveTask} />
      <Accordion className={classes.accordion1} defaultExpanded={true}>
        <AccordionSummary
          className={classes.accordionSummary1}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title}>Urgent Tasks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable rows={rowsData} type='urgent' />
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordion2} defaultExpanded={true}>
        <AccordionSummary
          className={classes.accordionSummary2}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title}>Active Tasks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable rows={rowsData} type='active' />
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordion3} defaultExpanded={true}>
        <AccordionSummary
          className={classes.accordionSummary3}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title}>Snoozed Tasks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable rows={rowsData} type='snoozed' />
        </AccordionDetails>
      </Accordion>

      <p className={classes.paragraph}>
        View Completed Tasks
        <ArrowForwardIcon className={classes.arrowIcon} />
      </p>
    </div>
  )
}

export default TaskGroups
