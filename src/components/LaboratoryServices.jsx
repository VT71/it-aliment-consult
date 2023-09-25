import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';
import LaboratoryService from './LaboratoryService';

function LaboratoryServices() {
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
                    >{`Servicii Laborator`}</Typography>
                </Box>
                <LaboratoryService type={'pasari'} />
                <LaboratoryService type={'rumegatoare'} />
                <LaboratoryService type={'suine'} />
            </Box>
        </Box>
    );
}

export default LaboratoryServices;
