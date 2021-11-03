import React from "react"
import {
  Button,
  Dialog,
  DialogContentText,
  DialogContent,
  Box,
} from "@material-ui/core"
const MultipleSelectionsModal = ({ onClose, isOpen, markCompleted, count }) => {
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
          <div>
            <Button
              color="primary"
              size="medium"
              variant="outlined"
              onClick={markCompleted}
              style={{
                padding: "10px",
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
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default MultipleSelectionsModal
