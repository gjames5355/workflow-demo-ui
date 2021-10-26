import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { makeStyles } from "@material-ui/core/styles"
import TableAccordion from "../table-accordion/TableAccordion"

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

const TeamTasks = () => {
  const classes = useStyles()

  return (
    <div>
      <TableAccordion 
        classes={{
          accordion: classes.accordion1,
          title: classes.title,
          summary: classes.accordionSummary1
          }} 
        type='urgent-unclaimed'
        title='Urgent Unclaimed Tasks'
      />

      <TableAccordion 
        classes={{
          accordion: classes.accordion3,
          title: classes.title,
          summary: classes.accordionSummary3
          }} 
        type='unclaimed'
        title='Unclaimed Tasks'
      />

      <TableAccordion 
        classes={{
          accordion: classes.accordion2,
          title: classes.title,
          summary: classes.accordionSummary2
          }} 
        type='claimed'
        title='Claimed Tasks'
      />

      <p className={classes.paragraph}>
        View Completed Tasks
        <ArrowForwardIcon className={classes.arrowIcon} />
      </p>
    </div>
  )
}

export default TeamTasks
