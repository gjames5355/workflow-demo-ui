import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Grid,
    TextField,
    Button,
} from '@material-ui/core'
import Item from "@material-ui/core/Grid"

const TaskDetail = ({row, open, onClose, location,}) => {
    const type = location.pathname === '/team' ? 'group' : 'personal'

    return (
        <>
            {row && 
                <Dialog open={open} onClose={onClose}>
                    <DialogTitle>
                        {row.jobNumber} - {row.taskName}
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Item>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Job Number"
                                        defaultValue={row.jobNumber}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Task Name"
                                        defaultValue={row.taskName}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Process Name"
                                        defaultValue={row.processName}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </Item>
                            </Grid>
                            {type === 'group' ?
                                <>
                                    <Grid item xs={6}>
                                        <Item>
                                            <TextField
                                                id="standard-read-only-input"
                                                label="Case Name"
                                                defaultValue={row.caseName}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                variant="standard"
                                            />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Item>
                                            <TextField
                                                id="standard-read-only-input"
                                                label="Assigned To"
                                                defaultValue={row.assignedTo}
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                                variant="standard"
                                            />
                                        </Item>
                                    </Grid>
                                </>
                                : null
                            }
                            <Grid item xs={6}>  
                                <Item>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Priority"
                                        defaultValue={row.priority}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>  
                                <Item>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Status"
                                        defaultValue={row.taskStatus}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>  
                                <Item>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Division"
                                        defaultValue={row.division}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Due Date"
                                        defaultValue={row.taskDueDate}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="E.V.O.Date"
                                        defaultValue={row.earliestVideoOrderDueDate}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <TextField
                                        id="standard-read-only-input"
                                        label="E.V.O.Days"
                                        defaultValue={row.earliestVideoOrderDays}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="standard"
                                    />
                                </Item>
                            </Grid>
                            
                        </Grid>
                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </>
    )
}

export default TaskDetail
