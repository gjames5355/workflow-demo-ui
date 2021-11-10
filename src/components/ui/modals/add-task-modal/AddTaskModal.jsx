import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core"

import FormLabel from "@material-ui/core/FormLabel"
import Item from "@material-ui/core/Grid"

import { useContext, useState } from "react"
import { GlobalContext } from "../../../../context/GlobalContext"

const AddTaskModal = ({ onClose, isOpen, onSaveTask }) => {
  // const currentDate = new Date()
  // const defaultDate = `${currentDate.getFullYear()}-${
  //   currentDate.getMonth() + 1
  // }-${currentDate.getDate()}`
  const [form, setForm] = useState({
    jobNumber: "",
    processName: "",
    taskName: "",
    taskDueDate: "",
    taskStatus: "",
    priority: "",
    earliestVideoOrderDays: "",
    earliestVideoOrderDueDate: "",
    division: "",
    caseName: "",
    assignedTo: "",
  })

  const handleChange = (event) => {
    const newTask = { ...form }
    newTask[event.target.name] = event.target.value

    setForm(newTask)
  }

  const resetForm = () => {
    setForm({
      jobNumber: "",
      processName: "",
      taskName: "",
      taskDueDate: "",
      taskStatus: "",
      priority: "",
      earliestVideoOrderDays: "",
      earliestVideoOrderDueDate: "",
      division: "",
      caseName: "",
      assignedTo: "",
    })
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
    onSaveTask(event)
    resetForm()
    onClose()
  }

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Create Task</DialogTitle>

      <form onSubmit={handlerSubmit}>
        <DialogContent>
          <Box padding="15px">
            <Item>
              <FormLabel>Job Number: </FormLabel>

              <TextField
                autoFocus
                margin="dense"
                id="jobNumber"
                fullWidth
                variant="outlined"
                value={form.jobNumber}
                onChange={handleChange}
                name="jobNumber"
              />
            </Item>

            <Item>
              <FormLabel>Process Name: </FormLabel>

              <TextField
                margin="dense"
                id="processName"
                fullWidth
                variant="outlined"
                required
                name="processName"
                value={form.processName}
                onChange={handleChange}
              />
            </Item>

            <Item>
              <FormLabel>Task Name: </FormLabel>

              <TextField
                margin="dense"
                id="taskName"
                fullWidth
                variant="outlined"
                required
                name="taskName"
                value={form.taskName}
                onChange={handleChange}
              />
            </Item>
            <Item>
              <FormLabel>Task Due Date: </FormLabel>
              <FormControl margin="dense" fullWidth>
                <TextField
                  id="taskDuedate"
                  name="taskDueDate"
                  variant="outlined"
                  type="date"
                  value={form.taskDueDate}
                  onChange={handleChange}
                />
              </FormControl>
            </Item>
            <Item>
              <FormLabel>Task Status: </FormLabel>
              <FormControl margin="dense" fullWidth>
                <Select
                  variant="outlined"
                  required
                  labelId="status-label"
                  label="Status"
                  id="status-control"
                  name="taskStatus"
                  value={form.taskStatus}
                  onChange={handleChange}
                  margin="dense"
                >
                  <MenuItem value="New">New</MenuItem>
                  <MenuItem value="Assigned">Assigned</MenuItem>
                </Select>
              </FormControl>
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
              <FormLabel>Earliest Video Order Days: </FormLabel>

              <TextField
                margin="dense"
                id="earliestVideoOrderDays"
                fullWidth
                variant="outlined"
                required
                name="earliestVideoOrderDays"
                value={form.earliestVideoOrderDays}
                onChange={handleChange}
              />
            </Item>
            <Item>
              <FormLabel>Earliest Video Order Due Date: </FormLabel>
              <FormControl margin="dense" fullWidth>
                <TextField
                  id="earliestVideoOrderDueDate"
                  name="earliestVideoOrderDueDate"
                  variant="outlined"
                  type="date"
                  value={form.earliestVideoOrderDueDate}
                  onChange={handleChange}
                />
              </FormControl>
            </Item>
            <Item>
              <FormLabel>Case Name: </FormLabel>

              <TextField
                margin="dense"
                id="caseName"
                fullWidth
                variant="outlined"
                required
                name="caseName"
                value={form.caseName}
                onChange={handleChange}
              ></TextField>
            </Item>
            <Item>
              <FormLabel>Division: </FormLabel>

              <TextField
                margin="dense"
                id="division"
                fullWidth
                variant="outlined"
                required
                name="division"
                value={form.division}
                onChange={handleChange}
              ></TextField>
            </Item>
            <Item>
              <FormLabel>Assigned To: </FormLabel>

              <TextField
                margin="dense"
                id="assignedTo"
                fullWidth
                variant="outlined"
                name="assignedTo"
                value={form.assignedTo}
                onChange={handleChange}
              ></TextField>
            </Item>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              onClose()
              resetForm()
            }}
          >
            Cancel
          </Button>
          <Button type="submit" primary="true">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

const AddTaskButton = ({ onSaveTask }) => {
  const { count } = useContext(GlobalContext)
  const [isModalOpen, setModalOpen] = useState(false)

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
          disabled
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
