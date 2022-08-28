import { Box } from '@mui/material';
import React from 'react';

interface Props {
    username: string;
    usernameTextColor: string;
    hostTextColor: string;
}

const Prompt = (props: Props) => {
    return (
        <Box component="span" sx={{marginRight: '8px'}}>
            <Box component="span" sx={{color: props.usernameTextColor}}>{props.username}</Box>
            <Box component="span">@</Box>
            <Box component="span" sx={{color: props.hostTextColor}}>{window.location.hostname}</Box>
            <Box component="span">:$&nbsp;~</Box>
        </Box>
    );
};

export default Prompt;