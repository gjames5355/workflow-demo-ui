import { makeStyles } from "@material-ui/core/styles"
import TableAccordion from "../table-accordion/TableAccordion"
import AddTaskButton from "../add-task-modal/AddTaskModal"
import { useState, useContext, useEffect } from "react"
import { GlobalContext } from "../../../context/GlobalContext"

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
    minHeight: "470px",
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

const TeamTasks = () => {
  const classes = useStyles()
  const { groupTasks } = useContext(GlobalContext)
  const [data, setData] = useState(groupTasks)

  const urgentUnclaimed = data.filter((item) => item.priority === "Urgent")
  const unclaimed = data.filter((item) => item.taskStatus === "New" && item.priority !== 'Urgent')
  const claimed = data.filter((x) => x.taskStatus !== "New" && x.priority !== "Urgent")

  useEffect(() => {
    setData(groupTasks)
  }, [groupTasks])

  const onSaveTask = (event) => {
    const taskDueDate = event.target.taskDueDate.value
    const earliestVideoOrderDueDate =
      event.target.earliestVideoOrderDueDate.value
    const formattedTaskDueDate = `${taskDueDate[5]}${taskDueDate[6]}/${taskDueDate[8]}${taskDueDate[9]}/${taskDueDate[0]}${taskDueDate[1]}${taskDueDate[2]}${taskDueDate[3]}`
    const formattedEarliestVideoOrderDueDate = `${earliestVideoOrderDueDate[5]}${earliestVideoOrderDueDate[6]}/${earliestVideoOrderDueDate[8]}${earliestVideoOrderDueDate[9]}/${earliestVideoOrderDueDate[0]}${earliestVideoOrderDueDate[1]}${earliestVideoOrderDueDate[2]}${earliestVideoOrderDueDate[3]}`

    const newTask = {
      id: event.target.jobNumber.value,
      jobNumber: event.target.jobNumber.value,
      processName: event.target.processName.value,
      taskName: event.target.taskName.value,
      taskDueDate: formattedTaskDueDate,
      taskStatus: event.target.taskStatus.value,
      priority: event.target.priority.value,
      earliestVideoOrderDays: event.target.earliestVideoOrderDays.value,
      caseName: event.target.caseName.value,
      earliestVideoOrderDueDate: formattedEarliestVideoOrderDueDate,
      division: event.target.division.value,
      assignedTo: event.target.assignedTo.value,
    }

    const newData = [...data]
    newData.push(newTask)
    setData(newData)
  }

  const handleChange = (newData) => {
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
        type="urgent-unclaimed"
        title="Urgent Unclaimed Tasks"
        data={urgentUnclaimed}
        handleChange={handleChange}
      />

      <TableAccordion
        classes={{
          accordion: classes.accordion3,
          title: classes.title,
          summary: classes.accordionSummary3,
          details: classes.accordionDetails,
        }}
        type="unclaimed"
        title="Unclaimed Tasks"
        data={unclaimed}
        handleChange={handleChange}
      />

      <TableAccordion
        classes={{
          accordion: classes.accordion2,
          title: classes.title,
          summary: classes.accordionSummary2,
          details: classes.accordionDetails,
        }}
        type="claimed"
        title="Claimed Tasks"
        data={claimed}
        handleChange={handleChange}
      />
    </div>
  )
}

export default TeamTasks
