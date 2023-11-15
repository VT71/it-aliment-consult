import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';

// components
import Navigation from './components/Navigation';
import UnitSlide from './components/UnitSlide';
import Services from './components/Services';
import LaboratoryServices from './components/LaboratoryServices';
import Units from './components/Units';

function HomePage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                position: 'relative',
            }}
        >
            <Navigation />
            <Box
                sx={{
                    boxSizing: 'border-box',
                    height: '100vh',
                    maxHeight: '800px',
                    width: '100vw',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={`${require('./assets/images/cafe.jpg')}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        filter: 'blur(9px)',
                        scale: '1.1',
                    }}
                />
            </Box>

            <Box
                sx={{
                    boxSizing: 'border-box',
                    paddingTop: '80px',
                    position: 'absolute',
                    top: '0',
                    height: '100vh',
                    maxHeight: '800px',
                    width: '100%',
                    maxWidth: '1280px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{ fontSize: '4rem', fontWeight: '500', color: 'white' }}
                >{`IT ALIMENT CONSULT`}</Typography>
                <Typography
                    sx={{
                        fontSize: '1.8rem',
                        fontWeight: '400',
                        color: 'white',
                        marginBottom: '4rem',
                    }}
                >{`Suport consultativ în domeniul sanitar-veterinar și siguranța alimentelor`}</Typography>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '20px',
                        width: '90%',
                        marginRight: '4rem',
                    }}
                >
                    <UnitSlide />
                </Box>
            </Box>

            {/* Website Sections */}

            {/* <Services /> */}

            <Units />

            <LaboratoryServices />
        </Box>
    );
}

export default HomePage;
