import React from 'react';
import { Box, LinearProgress, styled, Typography } from '@material-ui/core';

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 20,
  borderRadius: 5,
}));

const WorkLoadBar = ({value = 40, ...props}) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <BorderLinearProgress variant="determinate" value={value} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="subtitle2" color="text.secondary">{value}/100 Tasks</Typography>
            </Box>
        </Box>
    )
}

export default WorkLoadBar
