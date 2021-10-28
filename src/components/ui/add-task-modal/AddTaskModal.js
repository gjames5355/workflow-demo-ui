import {
    Button, Dialog, DialogTitle,
    DialogContent, TextField, DialogActions,
    FormControl, InputLabel, Select, MenuItem, Box, OutlinedInput, makeStyles
} from "@material-ui/core";


import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";



const AddTaskModal = (props) => {

    const { onClose, isOpen, onSaveTask } = props

    const [form, setForm] = useState({
        priority: "",
        division: "",
        client: "",
        dueDate: "",
        status: "",
        deliveryMethod: ""
    })

    const handleChange = (event) => {
        const newTask = {...form}
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

                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="title"
                        fullWidth
                        variant="outlined"
                        required
                        margin="dense"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="processName"
                        label="Process Name"
                        fullWidth
                        variant="outlined"
                        required
                        margin="dense"
                    />

                    <FormControl margin="dense" fullWidth
                    >
                        <InputLabel htmlFor="priority-control">Priority</InputLabel>
                        <Select
                            variant="outlined"
                            required
                            labelId="priority-label"
                            label="Priority"
                            id="priority-control"
                            name="priority"
                            value={form.priority}
                            onChange={handleChange.bind(this)}
                            margin="dense"

                        >
                            <MenuItem value="Urgent">Urgent</MenuItem>
                            <MenuItem value="Normal">Normal</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl margin="dense" fullWidth>
                        <InputLabel id="select-division">Division</InputLabel>
                        <Select
                            variant="outlined"
                            required
                            labelId="select-division"
                            id="division"
                            name="division"
                            value={form.division}
                            onChange={handleChange.bind(this)}
                        >
                            <MenuItem value="dallas">Dallas</MenuItem>
                            <MenuItem value="houston">houston</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl margin="dense" fullWidth>
                        <InputLabel id="select-client">Client</InputLabel>
                        <Select
                            variant="outlined"
                            required
                            labelId="select-client"
                            id="client"
                            name="client"
                            value={form.client}
                            onChange={handleChange.bind(this)}
                        >
                            <MenuItem value="arnold_itkin">Arnold & Itkin LLP</MenuItem>
                            <MenuItem value="garret_shawn">Shawn</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="dense" fullWidth>

                        <TextField
                            id="duedate"
                            variant="outlined"
                            type="date"
                            label="DueDate"
                            defaultValue="now"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={form.dueDate}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl margin="dense" fullWidth
                    >
                        <InputLabel htmlFor="status-control">Status</InputLabel>
                        <Select
                            variant="outlined"
                            required
                            labelId="status-label"
                            label="Status"
                            id="status-control"
                            name="status"
                            value={form.status}
                            onChange={handleChange.bind(this)}
                            margin="dense"

                        >
                            <MenuItem value="New">New</MenuItem>
                            <MenuItem value="Assigned">Assigned</MenuItem>
                        </Select>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="submit" primary={true}>Save</Button>
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