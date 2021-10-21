import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Typography from "@mui/material/Typography"
import makeStyles from '@mui/styles/makeStyles';
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
          <DataTable />
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
          <DataTable />
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
          <DataTable />
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
