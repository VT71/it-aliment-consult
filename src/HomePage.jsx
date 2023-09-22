import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';

// components
import Navigation from './components/Navigation';
import UnitSlide from './components/UnitSlide';

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
            <Box
                sx={{
                    boxSizing: 'border-box',
                    height: '100vh',
                    maxHeight: '800px',
                    width: '100vw',
                    border: '5px solid red',
                    overflow: 'hidden',
                    // backgroundImage: 'url("./cafe.jpg")',
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat',
                }}
            >
                <img
                    src='./cafe.jpg'
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
                    }}
                >{`Suport consultativ în domeniul sanitar-veterinar și siguranța alimentelor`}</Typography>
                <Box sx={{ position: 'absolute', bottom: '80px', width: '90%' }}>
                    <UnitSlide />
                </Box>
            </Box>
            <Box sx={{ width: '100%', maxWidth: '1280px' }}>
                <Navigation />
                HomePage HELLO HELLO
            </Box>
        </Box>
    );
}

export default HomePage;