import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    FormControl,
    FormLabel,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField, 
} from '@material-ui/core'
import Item from '@material-ui/core/Grid'
import { Schedule, Today } from '@material-ui/icons'
import React, { useState } from 'react'
import moment from 'moment'

const SnoozeModal = ({open, onClose}) => {
    const [selectedIndex, setSelectedIndex] = useState()
    const [openDateTime, setOpenDateTime] = useState(false)
    const [date, setDate] = useState()
    const [time, setTime] = useState()

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    }

    const times = [
        {
            name: '30 Minutes', 
            time: getTime('minutes'),
        },
        {
            name: '1 Hour', 
            time: `${new Date().getHours() + 1}:${new Date().getMinutes()}`,
        },
        {
            name: '2 Hours', 
            time: `${new Date().getHours() + 2}:${new Date().getMinutes()}`,
        },
        {
            name: '4 Hours', 
            time: `${new Date().getHours() + 4}:${new Date().getMinutes()}`,
        },
        {
            name: 'Tomorrow', 
            time: getTime('days', 1),
        },
        {
            name: '2 Days', 
            time: getTime('days', 2),
        },
        {
            name: '1 Week', 
            time: getTime('days', 7),
        }
    ]

    function getTime(measure, amount) {
        if (measure === 'minutes') {
            let hour = new Date().getHours()
            let minute = new Date().getMinutes()
            if ((minute + 30) > 60) {
                hour += 1
                minute = (minute + 30) - 60
            }
            return `${hour}:${minute.toString().padStart(2, '0')}`
        }
        if (measure === 'days') {
            const today = moment()
            const nextDate = today.clone().add(amount, 'days').format('ddd, MMM Do, YYYY, HH:mm')
            return nextDate
        }
    }

    const handleOpenDateTime = () => {
        setOpenDateTime(prev => !prev)
    }

    return (
       <>
            <Dialog 
                open={open}
                onClose={onClose}
                fullWidth={true}
                maxWidth="sm"
            >
                <DialogTitle>
                    Snooze Task
                </DialogTitle>
                <DialogContent>
                    <List>
                        {times.map((time, index) => (
                            <ListItem 
                                key={time.name}
                                selected={selectedIndex === index}
                                onClick={(event) => handleListItemClick(event, index)}    
                            >
                                <ListItemAvatar>
                                    <Schedule />
                                </ListItemAvatar>
                                <ListItemText>
                                    <div style={{display: 'flex',justifyContent: 'space-between'}}>
                                        <div>{time.name}</div>
                                        <div>{time.time}</div>
                                    </div>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <List style={{cursor: 'pointer'}}>
                        <ListItem onClick={handleOpenDateTime}>
                            <ListItemAvatar>
                                <Today />
                            </ListItemAvatar>
                            <ListItemText primary="Set Day & Time" />
                        </ListItem>
                    </List>
                    <Divider/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>
                        Close
                    </Button>
                    <Button
                        size="medium"
                        color="primary"
                        variant="contained"
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog 
                open={openDateTime}
                onClose={handleOpenDateTime}
                fullWidth={true}
                maxWidth='xs'
            >
                <DialogTitle>Select Date and Time</DialogTitle>
                <DialogContent>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item xs={12}>
                            <Item>
                                <FormLabel>Date</FormLabel>
                                <FormControl fullWidth>
                                    <TextField
                                        id="date"
                                        name="date"
                                        variant="outlined"
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </FormControl>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <FormLabel>Time</FormLabel>
                                <FormControl fullWidth>
                                    <TextField
                                        id="date"
                                        name="date"
                                        variant="outlined"
                                        type="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                </FormControl>
                            </Item>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOpenDateTime}>
                        Close
                    </Button>
                    <Button
                        size="medium"
                        color="primary"
                        variant="contained"
                        onClick={handleOpenDateTime}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
       </>
    )
}

export default SnoozeModal
