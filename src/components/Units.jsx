import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';

// components
import LaboratoryService from './LaboratoryService';

function Units() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#F6FAFF',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    width: '940px',
                    rowGap: '2rem',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'center',
                        boxSizing: 'border-box',
                        paddingY: '2rem',
                    }}
                >
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.primary.main,
                            fontSize: '3rem',
                            fontWeight: '500',
                        }}
                    >{`Tipuri Unități`}</Typography>
                </Box>
                <Box></Box>
            </Box>
        </Box>
    );
}

export default Units;
