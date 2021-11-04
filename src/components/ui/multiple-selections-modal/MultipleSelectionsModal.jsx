import React from "react"
import {
  Button,
  Dialog,
  DialogContentText,
  DialogContent,
  Box,
  makeStyles,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  buttonGroup3: {
    display: "flex",
    width: "25%",
    justifyContent: "space-around",
  },
  buttonGroup1: {
    display: "flex",
    width: "35%",
    justifyContent: "space-evenly",
  },
  container: {
    display: "flex",
    width: "100%",
    height: "45px",
    marginTop: "7px",
    marginBottom: "12px",
  },
}))

const MultipleSelectionsModal = ({
  onClose,
  isOpen,
  handleCompleted,
  count,
}) => {
  const styles = useStyles()
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogContent>
        <Box padding="30px">
          <div>
            <DialogContentText>
              You have selected {count} items
            </DialogContentText>
            <DialogContentText>Do you wish to continue?</DialogContentText>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonGroup3}>
              <Button
                color="primary"
                size="medium"
                variant="outlined"
                onClick={handleCompleted}
                style={{
                  padding: "10px",
                  color: "red",
                }}
              >
                Yes
              </Button>
              <Button
                color="primary"
                size="medium"
                variant="outlined"
                onClick={onClose}
                style={{
                  padding: "10px",
                }}
              >
                No
              </Button>
            </div>
          </div>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default MultipleSelectionsModal