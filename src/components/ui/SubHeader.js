import { Button, makeStyles } from "@material-ui/core"
import React, { useContext, useEffect } from "react"
import { useLocation } from "react-router"
// import WorkLoadBar from './WorkLoadBar';
import { Check } from "@material-ui/icons"
import { GlobalContext } from "../../context/GlobalContext"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "45px",
    marginTop: "7px",
    marginBottom: "12px",
  },
  subHeaderRight: {
    width: "50%",
    display: "flex",
  },
  subHeaderLeft: {
    width: "50%",
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
    width: "30%",
  },
  buttonGroup1: {
    display: "flex",
    width: "21%",
    justifyContent: "space-around",
  },
  buttonGroup2: {
    width: "10%",
    display: "flex",
  },
  buttonGroup3: {
    display: "flex",
    width: "20%",
    justifyContent: "space-around",
  },
  button1: {
    minWidth: "115px",
  },
  countButton: {
    minWidth: "",
  },
}))

const SubHeader = (props) => {
  const styles = useStyles()
  const location = useLocation()
  const { count, setCount } = useContext(GlobalContext)

  useEffect(() => {
    setCount(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

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
              >
                Claim
              </Button>
            )}
            <Button
              className={styles.button1}
              size="medium"
              color="primary"
              variant="outlined"
            >
              Unclaim
            </Button>
            <Button
              className={styles.button1}
              size="medium"
              color="primary"
              variant="outlined"
            >
              Refer
            </Button>
          </div>
          <div className={styles.buttonGroup2}>
            <Button
              className={styles.button1}
              size="medium"
              color="primary"
              variant="outlined"
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
            >
              Change Due Date
            </Button>
            <Button
              className={styles.button3}
              size="medium"
              color="primary"
              variant="outlined"
            >
              Snooze
            </Button>
          </div>
        </div>
        {/* :<> */}
        {/* <div className={styles.subHeaderLeft}> */}
        {/* <div className={styles.filterContainer}> */}
        {/* <FilterListOutlined /> */}
        {/* </div> */}
        {/* </div> */}
        {/* <div className={styles.subHeaderRight}> */}
        {/* {location.pathname === '/' ?  */}
        {/* <> */}
        {/* <div className={styles.workLoadBar}></div> */}
        {/* <div className={styles.workLoadBar}> */}
        {/* <WorkLoadBar value={props.value}/> */}
        {/* </div> */}
        {/* </> */}
        {/* : null */}
        {/* } */}
        {/* </div> */}
        {/* </> */}
        {/* } */}
      </div>
    )
  )
}

export default SubHeader
