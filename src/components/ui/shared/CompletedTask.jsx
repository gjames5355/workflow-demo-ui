import React, { useContext, useEffect, useState } from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  InputBase,
  alpha,
} from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
import { makeStyles } from "@material-ui/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { GlobalContext } from "../../../context/GlobalContext"
import { TABLE_COLUMNS } from "../../../constants/constants"
import SearchIcon from "@material-ui/icons/Search"

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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: 10,
    width: "20%",
    maxHeight: "35px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(3em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

const CompletedTasks = () => {
  const classes = useStyles()
  const { groupTasks, personalTasks } = useContext(GlobalContext)
  const data = [...groupTasks, ...personalTasks]
  const [inputValue, setInputValue] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const completed = data.filter((item) => item.taskStatus === "Complete")

  useEffect(() => {
    if (inputValue) {
      const filteredCompleted = completed.filter(
        (r) =>
          r.jobNumber.toString().includes(inputValue.toLowerCase()) ||
          r.processName.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.taskName.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.taskDueDate.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.taskStatus.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.earliestVideoOrderDays
            .toString()
            .includes(inputValue.toLowerCase()) ||
          r.earliestVideoOrderDueDate
            .toLowerCase()
            .includes(inputValue.toLowerCase()) ||
          r.priority.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.caseName.toLowerCase().includes(inputValue.toLowerCase()) ||
          r.division.toLowerCase().includes(inputValue.toLowerCase())
      )
      setFilteredData(filteredCompleted)
    }
  }, [inputValue])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

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
            <div className={classes.container}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  value={inputValue}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onChange={handleInputChange}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
            <DataGrid
              rows={inputValue ? filteredData : completed}
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
