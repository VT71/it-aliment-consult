import React from 'react';

// @mui
import { Box, Typography, IconButton } from '@mui/material';

function ContactItem({ icon, text }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                rowGap: '0.6rem',
            }}
        >
            {text === 'ion.toma.asv@gmail.com' ? (
                <IconButton href='mailto: ion.toma.asv@gmail.com'>
                    {icon}
                </IconButton>
            ) : (
                icon
            )}
            {text === 'ion.toma.asv@gmail.com' ? (
                <a href='mailto: ion.toma.asv@gmail.com'>
                    <Typography
                        sx={{
                            color: '#FEFFFA',
                            ':hover': { color: '#97A626' },
                        }}
                    >
                        {text}
                    </Typography>
                </a>
            ) : (
                <Typography sx={{ color: '#FEFFFA' }}>{text}</Typography>
            )}
        </Box>
    );
}

export default ContactItem;
