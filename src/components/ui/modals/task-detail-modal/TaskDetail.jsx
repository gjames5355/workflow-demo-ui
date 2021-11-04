import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Grid,
    TextField,
    Button,
    Divider,
    Accordion,
    AccordionSummary,
    Typography,
    AccordionDetails,
    Paper,
    FormLabel,
    Select,
    FormControl,
    MenuItem,
} from '@material-ui/core'
import Item from "@material-ui/core/Grid"
import { ExpandMore } from '@material-ui/icons'

const TaskDetail = ({
    row,
    open,
    onClose,
    location,
    onClaim,
    onUnclaim,
    onComplete,
}) => {
    const [updatedRow, setUpdatedRow] = useState()
    useEffect(() => setUpdatedRow(row), [row])
    const type = location.pathname === '/team' ? 'group' : 'personal'

    const handleChange = (event) => {
        const newRow = { ...row }
        newRow[event.target.name] = event.target.value;
        setUpdatedRow(newRow)
    }
    
    return (
        <>
            {updatedRow && 
                <Dialog 
                    open={open}
                    onClose={onClose}
                    fullWidth={true}
                    maxWidth='md'
                >
                    <DialogTitle>
                        {updatedRow.jobNumber} - {updatedRow.taskName}
                    </DialogTitle>
                    <DialogContent dividers={true}>
                        <Grid 
                            container 
                            spacing={2}
                            style={{
                                marginBottom: '20px'
                            }}
                        >
                            <Grid item xs={6}>
                                <Item>
                                    <FormLabel>Process Name: </FormLabel>
                                    <FormControl margin="dense" fullWidth>
                                        <TextField
                                            id="standard-read-only-input"
                                            defaultValue={updatedRow.processName}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            variant="outlined"
                                        />
                                    </FormControl>
                                </Item>
                            </Grid>
                            {type === 'group' ?
                                <>
                                    <Grid item xs={6}>
                                        <Item>
                                            <FormLabel>Case Name: </FormLabel>
                                            <FormControl margin="dense" fullWidth>
                                                <TextField
                                                    id="standard-read-only-input"
                                                    defaultValue={updatedRow.caseName}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    variant="outlined"
                                                />
                                            </FormControl>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Item>
                                            <FormLabel>Assigned To: </FormLabel>
                                            <FormControl margin="dense" fullWidth>
                                            <Select
                                                variant="outlined"
                                                required
                                                id="assigned-control"
                                                name="assignedTo"
                                                value={updatedRow.assignedTo}
                                                onChange={handleChange}
                                                margin="dense"
                                            >
                                                <MenuItem value="gjames">Garret James</MenuItem>
                                                <MenuItem value="cgalinda">Carmen Galinda</MenuItem>
                                                <MenuItem value="mdrenkalo">Matt Drenkalo</MenuItem>
                                            </Select>
                                            </FormControl>
                                        </Item>
                                    </Grid>
                                </>
                                : null
                            }
                            <Grid item xs={6}>  
                            <Item>
                                <FormLabel>Priority: </FormLabel>
                                <FormControl margin="dense" fullWidth>
                                    <Select
                                        variant="outlined"
                                        required
                                        id="priority-control"
                                        name="priority"
                                        value={updatedRow.priority}
                                        onChange={handleChange}
                                        margin="dense"
                                    >
                                        <MenuItem value="Urgent">Urgent</MenuItem>
                                        <MenuItem value="Normal">Normal</MenuItem>
                                        <MenuItem value="High">High</MenuItem>
                                    </Select>
                                    </FormControl>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>  
                                <Item>
                                    <FormLabel>Status</FormLabel>
                                    <FormControl margin="dense" fullWidth>
                                        <Select
                                            variant="outlined"
                                            required
                                            id="status-control"
                                            name="taskStatus"
                                            value={updatedRow.taskStatus}
                                            onChange={handleChange}
                                            margin="dense"
                                        >
                                            <MenuItem value="New">New</MenuItem>
                                            <MenuItem value="Assigned">Assigned</MenuItem>
                                            <MenuItem value="Overdue">Overdue</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>  
                                <Item>
                                    <FormLabel>Division:</FormLabel>
                                    <FormControl margin="dense" fullWidth>
                                        <Select
                                            variant="outlined"
                                            required
                                            id="division-control"
                                            name="division"
                                            readOnly={true}
                                            value={updatedRow.division}
                                            onChange={handleChange}
                                            margin="dense"
                                        >
                                            <MenuItem value="South Carolina">South Carolina</MenuItem>
                                            <MenuItem value="Dallas">Dallas</MenuItem>
                                            <MenuItem value="Maryland">Maryland</MenuItem>
                                            <MenuItem value="Houston">Houston</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <FormLabel>Due Date: </FormLabel>
                                    <FormControl margin="dense" fullWidth>
                                        <TextField
                                            id="standard-read-only-input"
                                            defaultValue={updatedRow.taskDueDate}
                                            InputProps={{
                                                readOnly: false,
                                            }}
                                            variant="outlined"
                                        />
                                    </FormControl>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <FormLabel>E.V.O.Date: </FormLabel>
                                    <FormControl margin="dense" fullWidth>
                                        <TextField
                                            id="standard-read-only-input"
                                            defaultValue={updatedRow.earliestVideoOrderDueDate}
                                            InputProps={{
                                                readOnly: false,
                                            }}
                                            variant="outlined"
                                        />
                                    </FormControl>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <FormLabel>E.V.O.Days: </FormLabel>
                                    <FormControl margin="dense" fullWidth>
                                        <TextField
                                            id="standard-read-only-input"
                                            defaultValue={updatedRow.earliestVideoOrderDays}
                                            InputProps={{
                                                readOnly: false,
                                            }}
                                            variant="outlined"
                                        />
                                    </FormControl>
                                </Item>
                            </Grid>
                            
                        </Grid>
                        <Divider />
                        <Accordion 
                            defaultExpanded={true}
                            style={{marginTop: '4px'}}
                        >
                            <AccordionSummary expandIcon={<ExpandMore />} >
                                <Typography>Comments</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{display: 'inherit'}}>
                                {updatedRow.comments && updatedRow.comments.map(comment => 
                                    <Paper 
                                        elevation={2}
                                        key={comment.id}
                                        style={{padding: '10px', margin: '4px'}}
                                    >
                                        <Typography>{comment.title}</Typography>
                                        <p>{comment.description}</p>
                                        <small>{comment.creator}</small>
                                    </Paper>
                                )}
                            </AccordionDetails>
                        </Accordion>
                        <Accordion 
                            defaultExpanded={false}
                            style={{marginTop: '8px'}}
                        >
                            <AccordionSummary expandIcon={<ExpandMore />} >
                                <Typography>History</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{display: 'inherit'}}>
                                {updatedRow.history && updatedRow.history.map(item => 
                                    <Paper 
                                        elevation={2}
                                        key={item.id}
                                        style={{padding: '10px', margin: '4px'}}
                                    >
                                        <p>{item.description} on {item.date}</p>
                                    </Paper>
                                )}
                            </AccordionDetails>
                        </Accordion>
                    </DialogContent>
                    <DialogActions>
                        {location.pathname === "/team" && (
                            <Button
                                size="medium"
                                color="primary"
                                variant="outlined"
                                onClick={onClaim}
                            >
                                Claim
                            </Button>
                        )}
                        {(updatedRow.assignedTo || location.pathname) !== 'team' && (
                            <Button
                                size="medium"
                                color="primary"
                                variant="outlined"
                                onClick={onUnclaim}
                            >
                                Unclaim
                            </Button>
                        )}
                        {location.pathname !== "/team" && (
                            <Button
                                size="medium"
                                color="primary"
                                variant="outlined"
                            >
                                Assign
                            </Button>
                        )}
                        {/* <Button
                            size="medium"
                            color="primary"
                            variant="outlined"
                        >
                            Change Due Date
                        </Button>
                        <Button
                            size="medium"
                            color="primary"
                            variant="outlined"
                        >
                            Change Priority
                        </Button> */}
                        <Button
                            size="medium"
                            color="primary"
                            variant="outlined"
                        >
                            Snooze
                        </Button>
                        <Button
                            size="medium"
                            color="primary"
                            variant="contained"
                            onClick={onComplete}
                        >
                            Complete
                        </Button>
                        <Button 
                            size='medium'
                            color='primary'
                            variant='text'
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </>
    )
}

export default TaskDetail
