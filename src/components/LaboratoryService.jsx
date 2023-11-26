import React, { useRef } from 'react';
import '../index.css';

// @mui
import { Card, Box, Typography, Divider } from '@mui/material';

// services
import servicesInfo from '../lib/laboratoryServices';

// icons
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ImageModal from './ImageModal';

function LaboratoryService({ type }) {
    const myRef = useRef(null);

    let title = null;
    let imageName = null;
    let tests = null;

    switch (type) {
        case 'animaleCompanie':
            title = servicesInfo['animaleCompanie'].title;
            imageName = 'animaleCompanie.jpg';
            tests = servicesInfo['animaleCompanie'].tests;
            break;
        case 'pasari':
            title = servicesInfo['pasari'].title;
            imageName = 'pasari.jpg';
            tests = servicesInfo['pasari'].tests;
            break;
        case 'rumegatoare':
            title = servicesInfo['rumegatoare'].title;
            imageName = 'rumegatoare.jpg';
            tests = servicesInfo['rumegatoare'].tests;
            break;
        case 'suine':
            title = servicesInfo['suine'].title;
            imageName = 'suine.jpg';
            tests = servicesInfo['suine'].tests;
            break;
        case 'furajeApa':
            title = servicesInfo['furajeApa'].title;
            imageName = 'furajeApa.jpg';
            tests = servicesInfo['furajeApa'].tests;
            break;
        default:
            break;
    }

    return (
        <Card
            sx={{
                boxSizing: 'border-box',
                width: '280px',
                height: '590px',
                borderRadius: '8px',
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <Card
                sx={{
                    height: '180px',
                    width: '100%',
                    ...(imageName && {
                        backgroundImage: `url("${require('../assets/images/' +
                            imageName)}")`,
                    }),
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
                <Box
                    sx={{
                        height: '72px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
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
                </Box>

                <Box
                    ref={myRef}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        rowGap: '1.2rem',
                        marginTop: '1.2rem',
                        maxHeight: '217px',
                        overflowY: 'auto',
                    }}
                >
                    {tests &&
                        tests.map((test, index) => (
                            <Box key={index} sx={{ width: '80%' }}>
                                <Typography
                                    key={index}
                                    sx={{ fontSize: '1.1rem' }}
                                >
                                    {test}
                                </Typography>
                                <Divider />
                            </Box>
                        ))}
                </Box>
                <Box>
                    {type !== 'furajeApa' && (
                        <ArrowBackIosRoundedIcon
                            sx={{
                                transform: 'rotate(270deg)',
                                marginTop: '0.5rem',
                                cursor: 'pointer',
                                ':hover': {
                                    color: '#97A626',
                                },
                            }}
                            onClick={() => (myRef.current.scrollTop += 217)}
                        />
                    )}
                </Box>
                <ImageModal type={type} />
            </Box>
        </Card>
    );
}

export default LaboratoryService;
