import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  OutlinedInput,
  makeStyles,
} from "@material-ui/core"

import FormLabel from "@material-ui/core/FormLabel"
import Grid from "@material-ui/core/Grid"
import Item from "@material-ui/core/Grid"

import { useContext, useState } from "react"
import { GlobalContext } from "../../../context/GlobalContext"

const AddTaskModal = ({ onClose, isOpen, onSaveTask }) => {
  const currentDate = new Date()
  const defaultDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`
  const [form, setForm] = useState({
    priority: "",
    division: "",
    client: "",
    dueDate: defaultDate,
    status: "",
    deliveryMethod: "",
  })

  const handleChange = (event) => {
    const newTask = { ...form }
    newTask[event.target.name] = event.target.value
    setForm(newTask)
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
    onSaveTask(event)
    onClose()
  }

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Create Task</DialogTitle>

      <form onSubmit={handlerSubmit}>
        <DialogContent>
          <Box padding="15px">
            <Item>
              <FormLabel>Name: </FormLabel>

              <TextField
                autoFocus
                margin="dense"
                id="title"
                fullWidth
                variant="outlined"
                required
                margin="dense"
              />
            </Item>

            <Item>
              <FormLabel>Process Name: </FormLabel>

              <TextField
                autoFocus
                margin="dense"
                id="processName"
                fullWidth
                variant="outlined"
                required
                margin="dense"
              />
            </Item>

            <Item>
              <FormLabel>Priority: </FormLabel>

              <FormControl margin="dense" fullWidth>
                <Select
                  variant="outlined"
                  required
                  id="priority-control"
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                  margin="dense"
                >
                  <MenuItem value="Urgent">Urgent</MenuItem>
                  <MenuItem value="Normal">Normal</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
            </Item>
            <Item>
              <FormLabel>Division: </FormLabel>
              <FormControl margin="dense" fullWidth>
                <Select
                  variant="outlined"
                  required
                  labelId="select-division"
                  id="division"
                  name="division"
                  value={form.division}
                  onChange={handleChange}
                >
                  <MenuItem value="dallas">Dallas</MenuItem>
                  <MenuItem value="houston">houston</MenuItem>
                </Select>
              </FormControl>
            </Item>

            <Item>
              <FormLabel>Client: </FormLabel>
              <FormControl margin="dense" fullWidth>
                <Select
                  variant="outlined"
                  required
                  labelId="select-client"
                  id="client"
                  name="client"
                  value={form.client}
                  onChange={handleChange}
                >
                  <MenuItem value="arnold_itkin">Arnold & Itkin LLP</MenuItem>
                  <MenuItem value="garret_shawn">Shawn</MenuItem>
                </Select>
              </FormControl>
            </Item>
            <Item>
              <FormLabel>Due Date: </FormLabel>
              <FormControl margin="dense" fullWidth>
                <TextField
                  id="duedate"
                  name="dueDate"
                  variant="outlined"
                  type="date"
                  value={form.dueDate}
                  onChange={handleChange}
                />
              </FormControl>
            </Item>
            <Item>
              <FormLabel>Status: </FormLabel>
              <FormControl margin="dense" fullWidth>
                <Select
                  variant="outlined"
                  required
                  labelId="status-label"
                  label="Status"
                  id="status-control"
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  margin="dense"
                >
                  <MenuItem value="New">New</MenuItem>
                  <MenuItem value="Assigned">Assigned</MenuItem>
                </Select>
              </FormControl>
            </Item>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" primary={true}>
            Save
          </Button>
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
    return (
      <div
        style={{
          marginTop: "7px",
        }}
      >
        <Button
          color="primary"
          size="medium"
          variant="outlined"
          onClick={onAddTaskHandler}
          style={{
            padding: "10px",
          }}
        >
          Add Task
        </Button>
        <AddTaskModal
          isOpen={isModalOpen}
          onClose={onCloseModal}
          onSaveTask={onSaveTask}
        ></AddTaskModal>
      </div>
    )
  }

  return null
}

export default AddTaskButton
