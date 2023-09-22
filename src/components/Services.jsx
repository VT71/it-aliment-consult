import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';

// components
import Service from './Service';

function Services() {
    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
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
                    >{`Serviciile Noastre`}</Typography>
                </Box>
                <Service type={'evaluarea-unitatii'} />
                <Service type={'consultarea-beneficiarului'} />
                <Service type={'haccp'} />
                <Service type={'program-igienizare'} />
                <Service type={'monitorizare-periodica'}/>
                <Service type={'combatere-daunatori'}/>
            </Box>
        </Box>
    );
}

export default Services;
