import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// components
import Navigation from './components/Navigation';
import UnitSlide from './components/UnitSlide';
import Services from './components/Services';
import LaboratoryServices from './components/LaboratoryServices';
import Units from './components/Units';
import ContactSection from './components/ContactSection';

function HomePage() {
    const max600 = useMediaQuery('(max-width:600px)');

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
                    paddingX: '1rem',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '4rem',
                        fontWeight: '500',
                        color: 'white',
                        textAlign: 'center',
                        '@media (max-width: 900px)': { fontSize: '3rem' },
                        '@media (max-width: 650px)': { fontSize: '2.6rem' },
                        '@media (max-width: 450px)': { fontSize: '2.4rem' },
                    }}
                >{`IT ALIMENT CONSULT`}</Typography>
                <Typography
                    sx={{
                        fontSize: '1.8rem',
                        fontWeight: '400',
                        color: 'white',
                        marginBottom: '4rem',
                        ...(max600 && { marginBottom: '9rem' }),
                        textAlign: 'center',
                        '@media (max-width: 900px)': { fontSize: '1.5rem' },
                        '@media (max-width: 650px)': { fontSize: '1.3rem' },
                        '@media (max-width: 450px)': { fontSize: '1.1rem' },
                    }}
                >{`Suport consultativ în domeniul sanitar-veterinar și siguranței alimentelor`}</Typography>
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

            <ContactSection />
        </Box>
    );
}

export default HomePage;
