import React from 'react';
import { Box, LinearProgress, styled, Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 20,
  borderRadius: 5,
}));

const WorkLoadBar = ({value = 40, ...props}) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="h6" color="inherit">Workload</Typography>
            </Box>
            <Box sx={{ width: '55%', mr: 1 }}>
                <BorderLinearProgress variant="determinate" value={value} />
            </Box>
            <Box sx={{ minWidth: 25, fontSize: '0.675rem' }}>
                <Typography variant="subtitle2" color="inherit">{value}/100 Tasks</Typography>
            </Box>
        </Box>
    )
}

export default WorkLoadBar
