import React from 'react';
import { useState } from 'react';

// @mui
import { Box, Typography } from '@mui/material';

function Unit() {
    const [clicked, setClicked] = useState(false);

    return (
        <Box
            sx={{
                width: '100%',
                height: '120px',
                overflow: 'hidden',
                marginBottom: '0.3rem',
                borderRadius: '8px',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    position: 'relative',
                    backgroundImage: 'url("./cafe.jpg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    transition: 'scale 0.4s ease-out',
                    '&:hover': {
                        scale: '1.03',
                    },
                }}
                onClick={() => setClicked((prev) => !prev)}
            >
                <Box
                    sx={{
                        top: '0',
                        width: '100%',
                        height: '100%',
                        positon: 'absolute',
                        backgroundColor: '#B8B8B8',
                        opacity: '0.45',
                        zIndex: '-1',
                    }}
                ></Box>
                <Box
                    sx={{
                        top: '0',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: '1',
                    }}
                >
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '2rem',
                            fontWeight: 400,
                            textShadow: '0px 0px 10px black',
                        }}
                    >
                        Title
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Unit;
