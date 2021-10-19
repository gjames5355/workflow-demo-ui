import React, { useState } from 'react'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Box,
    Popover,
    Select,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import './ReassignPopover.css';

const users = [
    {id: 1, name:'Magdiel Aybar'},
    {id: 2, name:'Carmen Galinda'},
    {id: 3, name:'Handerson Irias'},
    {id: 4, name:'Garret James'},
    {id: 5, name:'John Doe'},
]

const ReassignPopover = ({ isOpen, anchor, onClose }) => {

    const [placement, ] = useState('top');
    const [user, setUser] = useState('');
    
    const handleChange = (e) => {
        setUser(e.target.value);
    }

    return (
        <Popover
            open={isOpen}
            anchorEl={anchor} 
            placement={placement} 
            style={{
                width: "100%",
                maxHeight: "unset",
                maxWidth: "unset",
                }}
            onClose={onClose}
        >
            <Box style={{width: '300px'}}>
                <div className='popper-content'>
                    <RadioGroup
                        aria-label="gender"
                        name="controlled-radio-buttons-group"
                        value={1}
                    >
                        <FormControl component="fieldset">
                            <FormControlLabel
                                value="reassign"
                                control={<Radio />}
                                label="Reassign"
                            />
                            <FormControlLabel
                                value="refer"
                                control={<Radio />}
                                label="Refer"
                            />
                        </FormControl>
                    </RadioGroup>
                    <div className='popper-bottom'>
                        <FormControl sx={{ m: 1 }} fullWidth variant='standard'>
                            <InputLabel id="team-member">Team Member</InputLabel>
                            <Select
                                labelId="team-member"
                                id="team-member-select"
                                value={user}
                                label="Age"
                                placeholder='Team Member'
                                onChange={handleChange}
                            >
                                {users.map((x) => <MenuItem key={x.id} value={x.id}>{x.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <CheckCircleIcon fontSize='large' htmlColor='green' onClick={onClose}/>
                    </div>
                </div>
            </Box>
        </Popover>
    )
}

export default ReassignPopover
