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

const SnoozeModal = ({open, onClose, onSave}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [openDateTime, setOpenDateTime] = useState(false)
    const [date, setDate] = useState(moment().format('ddd, MMM Do, YYYY'))
    const [time, setTime] = useState(getTime('minutes'))

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
        setDate(times[index].dateTime.date)
        setTime(times[index].dateTime.time)
    }

    const times = [
        {
            name: '30 Minutes', 
            dateTime: {
                time:  getTime('minutes'),
                date:  getDate(),
            },
        },
        {
            name: '1 Hour', 
            dateTime: {
                time:  getTime('hours', 1),
                date:  getDate(),
            },
        },
        {
            name: '2 Hours', 
            dateTime: {
                time:  getTime('hours', 2),
                date:  getDate(),
            },
        },
        {
            name: '4 Hours', 
            dateTime: {
                time:  getTime('hours', 4),
                date:  getDate(),
            },
        },
        {
            name: 'Tomorrow', 
            dateTime: {
                time:  getTime('days', 1),
                date:  getDate(1),
            },
        },
        {
            name: '2 Days', 
            dateTime: {
                time:  getTime('days', 2),
                date:  getDate(2),
            },
        },
        {
            name: '1 Week', 
            dateTime: {
                time:  getTime('days', 7),
                date:  getDate(7),
            },
        }
    ]

    function getTime(measure, amount) {
        if (measure === 'minutes') {
            return moment().add(30, 'minutes').format('hh:mm A')
        }
        if (measure === 'days') {
            const today = moment()
            const nextDate = today.clone().add(amount, 'days').format('ddd, MMM Do, YYYY, hh:mm A')
            return nextDate
        }
        if (measure === 'hours') {
            return moment().add(amount, 'hours').format('hh:mm A')
        }
    }

    function getDate(amount = 0) {
        if (amount > 0 ) return moment().add(amount, 'days').format('ddd, MMM Do, YYYY')
        return moment().format('ddd, MMM Do, YYYY');
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
                                        <div>{time.dateTime.time}</div>
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
                        onClick={() => onSave({date, time})}
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
                                        onChange={(e) => setDate(moment(e.target.value).format('ddd, MMM Do, YYYY'))}
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
