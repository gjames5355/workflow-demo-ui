import { Button, makeStyles } from "@material-ui/core"
import React, { useEffect } from "react"
import { useLocation } from "react-router"
import { Check } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "45px",
    marginTop: "7px",
    marginBottom: "12px",
  },
  subHeaderRight: {
    width: "70%",
    display: "flex",
  },
  subHeaderLeft: {
    width: "30%",
  },
  workLoadBar: {
    width: "50%",
  },
  filterContainer: {
    height: "100%",
    alignItems: "center",
    display: "flex",
    marginLeft: "30px",
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  selectedCount: {
    display: "flex",
    width: "15%",
  },
  buttonGroup1: {
    display: "flex",
    width: "35%",
    justifyContent: "space-evenly",
  },
  buttonGroup2: {
    width: "10%",
    display: "flex",
  },
  buttonGroup3: {
    display: "flex",
    width: "25%",
    justifyContent: "space-around",
  },
  button1: {
    minWidth: "115px",
  },
  countButton: {
    minWidth: "",
  },
}))

const SubHeader = ({
  count,
  handleCount,
  rows,
  handleRows,
  onClaim, 
  onUnclaim,
  onAssign,
  onChangePriority,
  onChangeDueDate
}) => {
  const styles = useStyles()
  const location = useLocation()

  useEffect(() => {
    handleCount(0)
    handleRows([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const unAssignedTaskSelected = rows.every(
    (x) => !x.assignedTo || x.assignedTo === ""
  )

  const assignedTaskSelected = rows.every(
    (x) => x.assignedTo && x.assignedTo !== ""
  )

  const locationTrue = location.pathname === "/team"

  const handleDueDate = () => {
    //onChangeDueDate()
  }

  return (
    count > 0 && (
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <div className={styles.selectedCount}>
            <Button
              className={styles.countButton}
              startIcon={<Check />}
              size="medium"
              variant="outlined"
              disabled={locationTrue && unAssignedTaskSelected}
            >
              Mark {count} as Complete
            </Button>
          </div>
          <div className={styles.buttonGroup1}>
            {location.pathname === "/team" && (
              <Button
                className={styles.button1}
                size="medium"
                color="primary"
                variant="outlined"
                disabled={locationTrue && assignedTaskSelected}
                onClick={onClaim}
              >
                Claim
              </Button>
            )}
            <>
              <Button
                className={styles.button1}
                size="medium"
                color="primary"
                variant="outlined"
                disabled={locationTrue && unAssignedTaskSelected}
                onClick={onUnclaim}
              >
                Unclaim
              </Button>
              <Button
                className={styles.button1}
                size="medium"
                color="primary"
                variant="outlined"
                disabled={locationTrue && unAssignedTaskSelected}
                onClick={onAssign}
              >
                Assign
              </Button>
            </>
          </div>
          <div className={styles.buttonGroup2}>
            <Button
              className={styles.button1}
              size="medium"
              color="primary"
              variant="outlined"
              disabled={locationTrue && unAssignedTaskSelected}
              onClick={onChangePriority}
            >
              Change Priority
            </Button>
          </div>
          <div className={styles.buttonGroup3}>
            <Button
              className={styles.button1}
              size="medium"
              color="primary"
              variant="outlined"
              disabled={locationTrue && unAssignedTaskSelected}
              onClick={handleDueDate}
            >
              Change Due Date
            </Button>
            <Button
              className={styles.button3}
              size="medium"
              color="primary"
              variant="outlined"
              disabled={locationTrue && unAssignedTaskSelected}
            >
              Snooze
            </Button>
          </div>
        </div>
      </div>
    )
  )
}

export default SubHeader
