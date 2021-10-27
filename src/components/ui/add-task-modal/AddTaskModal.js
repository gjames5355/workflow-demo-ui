import {
  Button, Dialog, DialogTitle,
  DialogContent, TextField, DialogActions,
  FormControl, InputLabel, Select, MenuItem
} from "@material-ui/core";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

const AddTaskModal = (props) => {
  const { onClose, isOpen, onSaveTask } = props

  const [priority, setPriority] = useState('');


  const handlerSubmit = (event) => {
    console.log('values', event);
    onSaveTask(event)
    onClose()
  }

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };


  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Set backup account</DialogTitle>
      <form onSubmit={handlerSubmit}>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            fullWidth
            variant="outlined"
            required
          />

          <FormControl fullWidth>
            <InputLabel id="select-priority">Priority</InputLabel>
            <Select
            variant="outlined"
            required
              labelId="select-priority"
              id="priority"
              name="priority"
              label="Priority"
              value={priority}
              onChange={handlePriorityChange.bind(this)}
            >
              <MenuItem value="Urgent">Urgent</MenuItem>
              <MenuItem value="Mid">Mid</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>


        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" primary={true}>Save</Button>
          <input type="submit" hidden />
        </DialogActions>
      </form>
    </Dialog>
  )


}

const AddTaskButton = (props) => {
  const { count } = useContext(GlobalContext)
  const [isModalOpen, setModalOpen] = useState(false)
  const { onSaveTask } = props

  const onAddTaskHandler = () => {
    setModalOpen(true)
  }

  const onCloseModal = () => {
    setModalOpen(false)
  }

  if (count === 0) {
    return (<div style={{
      marginTop: "7px"
    }}>
      <Button
        size="medium"
        variant="outlined"
        onClick={onAddTaskHandler}
      >
        Add Task
      </Button>
      <AddTaskModal isOpen={isModalOpen} onClose={onCloseModal} onSaveTask={onSaveTask}></AddTaskModal>
    </div>);
  }

  return null;
};

export default AddTaskButton
