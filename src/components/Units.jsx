import React from 'react';

// @mui
import { Box, Typography, Card } from '@mui/material';

// components
import Unit from './Unit';

function Units() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
                paddingBottom: '3rem',
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
                <Card
                    sx={{
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        width: '100%',
                        height: '494px',
                        backgroundColor: '#F6FAFF',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Box
                        sx={{
                            width: '30%',
                            height: '100%',
                            boxSizing: 'border-box',
                            backgroundColor: 'red',
                            overflow: 'auto',
                        }}
                    >
                        <Unit />
                        <Unit />
                        <Unit />
                        <Unit />
                    </Box>
                    <Box
                        sx={{
                            width: '70%',
                            height: '100%',
                            boxSizing: 'border-box',
                            backgroundColor: 'blue',
                        }}
                    ></Box>
                </Card>
            </Box>
        </Box>
    );
}

export default Units;
