import React from 'react';

// @mui
import { Card, Box, Typography, Divider } from '@mui/material';

// services
import servicesInfo from '../lib/laboratoryServices';

function LaboratoryService({ type }) {
    let title = null;
    let imageUrl = null;
    let tests = null;

    switch (type) {
        case 'pasari':
            title = servicesInfo['pasari'].title;
            imageUrl = servicesInfo['pasari'].imageUrl;
            tests = servicesInfo['pasari'].tests;
            break;
        case 'rumegatoare':
            title = servicesInfo['rumegatoare'].title;
            imageUrl = servicesInfo['rumegatoare'].imageUrl;
            tests = servicesInfo['rumegatoare'].tests;
            break;
        case 'suine':
            title = servicesInfo['suine'].title;
            imageUrl = servicesInfo['suine'].imageUrl;
            tests = servicesInfo['suine'].tests;
            break;
        default:
            break;
    }

    return (
        <Card
            sx={{
                boxSizing: 'border-box',
                width: '280px',
                height: '550px',
                borderRadius: '8px',
                textAlign: 'center',
            }}
        >
            <Card
                sx={{
                    height: '180px',
                    width: '100%',
                    backgroundImage: `url("${imageUrl}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></Card>
            <Box
                sx={{
                    wdith: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        color: (theme) => theme.palette.primary.light,
                        fontSize: '1.5rem',
                        fontWeight: '500',
                        marginTop: '1.2rem',
                    }}
                >
                    {title}
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        rowGap: '1.2rem',
                        marginTop: '1.2rem',
                    }}
                >
                    {tests.map((test, index) => (
                        <Box key={index} sx={{ width: '80%' }}>
                            <Typography key={index} sx={{ fontSize: '1.1rem' }}>
                                {test}
                            </Typography>
                            <Divider />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Card>
    );
}

export default LaboratoryService;
