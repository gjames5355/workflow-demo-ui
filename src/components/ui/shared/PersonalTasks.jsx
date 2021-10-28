import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { makeStyles } from "@material-ui/core/styles"
import TableAccordion from "../table-accordion/TableAccordion";
import AddTaskButton from "../add-task-modal/AddTaskModal";
import { PERSONAL_TASKS } from "../../../constants/constants";
import { useEffect, useState } from "react";


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
  accordionDetails: {
    minHeight: '470px',
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

const PersonalTasks = () => {
  const classes = useStyles()
  const [data, setData] = useState(PERSONAL_TASKS)

  const urgentTaskData = data.filter(item => item.priority==='Urgent')
  const newTasksData = data.filter(item => item.priority==='New')
  const snoozedTasksData = data.filter(item => item.priority==='Snoozed')

  const onSaveTask = (event) => {
    
    const newTask = {
      id: event.target.title.value,
      processName: event.target.processName.value,
      taskName: event.target.title.value,
      priority: event.target.priority.value,
      jobNumber: 4520001,
      division: event.target.division.value,
      childDivision: "",
      dateDime: "10/18/2021 9:00AM",
      thirdParty: "Third Party",
      client: event.target.client.value,
      case: "Addison, Lavaunda Vs. South Carolina Dept Of Trans",
      primaryVendor: "Solange Ruiz-Uribe",
      deliveryMethod: "Expedited",
      deliveryDays: 3,
      jobDueDate: "10/21/2021",
      scheduleCity: "Columbia",
      proceedingType: "Depositions",
      assignedDate: "10/18/2021",
      litigationType: "Personal Injury/Negligence",
      taskDueDate: event.target.duedate.value,
      status: "New",
    }

    const newData = [...data]
    newData.push(newTask)
    setData(newData)
    
  }

  return (
    <div>
      <AddTaskButton onSaveTask={onSaveTask} />
      <TableAccordion 
        classes={{
          accordion: classes.accordion1,
          title: classes.title,
          summary: classes.accordionSummary1,
          details: classes.accordionDetails,
          }} 
        type='urgent'
        title='Urgent Tasks'
        data={urgentTaskData}
      />

      <TableAccordion 
        classes={{
          accordion: classes.accordion2,
          title: classes.title,
          summary: classes.accordionSummary2,
          details: classes.accordionDetails,
          }} 
        type='active'
        title='Active Tasks'
        data={newTasksData}
      />

      <TableAccordion 
        classes={{
          accordion: classes.accordion3,
          title: classes.title,
          summary: classes.accordionSummary3,
          details: classes.accordionDetails,
          }} 
        type='snoozed'
        title='Snoozed Tasks'
        data={snoozedTasksData}
      />

      <p className={classes.paragraph}>
        View Completed Tasks
        <ArrowForwardIcon className={classes.arrowIcon} />
      </p>
    </div>
  )
}

export default PersonalTasks
