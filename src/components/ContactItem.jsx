import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';

function ContactItem({ icon, text }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                rowGap: '0.6rem'
            }}
        >
            {icon}
            <Typography sx={{ color: '#FEFFFA'}}>
                {text}
            </Typography>
        </Box>
    );
}

export default ContactItem;
