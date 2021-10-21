import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import DataTable from "./TeamTasksTable"

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
      <Accordion className={classes.accordion1} defaultExpanded={true}>
        <AccordionSummary
          className={classes.accordionSummary1}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title}>
            Urgent Unclaimed Tasks
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable type='urgent-unclaimed' />
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordion3} defaultExpanded={true}>
        <AccordionSummary
          className={classes.accordionSummary3}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title}>Unclaimed task</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable type='unclaimed' />
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.accordion2} defaultExpanded={true}>
        <AccordionSummary
          className={classes.accordionSummary2}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title}>Claimed Tasks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable type='claimed' />
        </AccordionDetails>
      </Accordion>

      <p className={classes.paragraph}>
        View Completed Tasks
        <ArrowForwardIcon className={classes.arrowIcon} />
      </p>
    </div>
  )
}

export default TeamTasks
