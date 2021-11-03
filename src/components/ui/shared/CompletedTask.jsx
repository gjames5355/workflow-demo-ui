import React, { useContext } from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
import { makeStyles } from "@material-ui/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { GlobalContext } from "../../../context/GlobalContext"
import { TABLE_COLUMNS } from "../../../constants/constants"

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

const CompletedTasks = () => {
  const classes = useStyles()
  const { completedTasks } = useContext(GlobalContext)
  console.log(completedTasks)
  return (
    <div>
      <Accordion className={classes.accordion1} defaultExpanded={true}>
        <AccordionSummary
          className={classes.accordionSummary2}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title}>Completed Tasks</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={completedTasks}
              // pageSize={5}
              columns={TABLE_COLUMNS}
              onColumnOrderChange
              disableSelectionOnClick
              onSelectionModelChange
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CompletedTasks
