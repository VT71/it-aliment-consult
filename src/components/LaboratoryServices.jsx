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
                boxSizing: 'border-box',
                paddingX: '2rem',
            }}
        >
            <Box
                id={'laboratory-section'}
                sx={{ position: 'relative', top: '-50px' }}
            ></Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '940px',
                    rowGap: '2rem',
                    boxSizing: 'border-box',
                    paddingBottom: ' 3rem',
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
                            '@media (max-width: 700px)': { fontSize: '2.6rem' },
                            '@media (max-width: 600px)': { fontSize: '2.4rem' },
                            '@media (max-width: 500px)': { fontSize: '2.2rem' },
                        }}
                    >{`Servicii Laborator`}</Typography>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'start',
                        justifyContent: 'center',
                        columnGap: '3rem',
                        rowGap: '2rem',
                    }}
                >
                    <LaboratoryService type={'animaleCompanie'} />
                    <LaboratoryService type={'pasari'} />
                    <LaboratoryService type={'suine'} />
                    <LaboratoryService type={'rumegatoare'} />
                    <LaboratoryService type={'furajeApa'} />
                </Box>
            </Box>
        </Box>
    );
}

export default LaboratoryServices;
