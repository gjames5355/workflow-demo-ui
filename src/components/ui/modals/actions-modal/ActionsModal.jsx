import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    FormLabel,
    FormControl,
    TextField,
    Select,
    MenuItem,
    Button
} from '@material-ui/core'
import Item from "@material-ui/core/Grid"

const ActionsModal = ({
    onClose,
    open,
    title,
    type,
    row,
    handleSave,
}) => {
    const handleChange = (e) => {
        
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {type === 'assign' &&
                    <Item>
                    <FormLabel>Assign to: </FormLabel>
      
                    <FormControl margin="dense" fullWidth>
                      <Select
                        variant="outlined"
                        required
                        id="assign-control"
                        name="assign"
                        onChange={handleChange}
                        margin="dense"
                      >
                        <MenuItem value="gjames">Garret James</MenuItem>
                        <MenuItem value="jdoe">John Doe</MenuItem>
                        <MenuItem value="mdrenkalo">Matt Drenkalo</MenuItem>
                      </Select>
                    </FormControl>
                  </Item>
                }
                {type === 'dueDate' && 
                  <Item>
                    <FormLabel>Task Due Date: </FormLabel>
                    <FormControl margin="dense" fullWidth>
                      <TextField
                        id="taskDuedate"
                        name="taskDueDate"
                        variant="outlined"
                        type="date"
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Item>
                }
                {type === 'priority' && 
                  <Item>
                    <FormLabel>Priority: </FormLabel>
      
                    <FormControl margin="dense" fullWidth>
                      <Select
                        variant="outlined"
                        required
                        id="priority-control"
                        name="priority"
                        value={row.priority}
                        onChange={handleChange}
                        margin="dense"
                      >
                        <MenuItem value="Urgent">Urgent</MenuItem>
                        <MenuItem value="Normal">Normal</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                      </Select>
                    </FormControl>
                  </Item>
                }
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleSave} primary="true">
                Save
              </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ActionsModal
