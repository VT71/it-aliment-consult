import React from 'react';
import { useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setUnit } from '../store/slices/unitSlice';

// @mui
import { Box, Typography } from '@mui/material';

function Unit({ title }) {
    const dispatch = useDispatch();

    const selectedUnit = useSelector((state) => state.unit.unit);

    let currentUnit = title && selectedUnit && title === selectedUnit;

    let image = null;

    switch (title) {
        case 'Comerț (Produse Alimentare)':
            image = 'supermarket.jpg';
            break;
        case 'Depozitare, Comerț cu ridicata':
            image = 'warehouse.jpg';
            break;
        case 'Depozitare, Procesare, Comerț miere':
            image = 'honey.jpg';
            break;
        case 'Unități de panificație':
            image = 'bakery.jpg';
            break;
        default:
            break;
    }

    return (
        <Box
            sx={{
                width: '100%',
                height: '120px',
                overflow: 'hidden',
                marginBottom: '0.3rem',
                borderRadius: '8px',
                ...(currentUnit && { borderRadius: '8px 0 0 8px' }),
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    position: 'relative',
                    ...(image && {
                        backgroundImage: `url("${require('../assets/images/' +
                            image)}")`,
                    }),
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    transition:
                        'scale 0.4s ease-out, background-color 0.4s ease-out',
                    '&:hover': {
                        scale: '1.02',
                        // ...(currentUnit && {
                        //     backgroundColor: 'white',
                        // }),
                    },
                    '&:active': {
                        transition:
                            'scale 0.2s ease-out, background-color 0.2s ease-out',
                        scale: '1.03',
                        border: 'none',
                        outline: 'none',
                        textDecoration: 'none',
                        WebkitTapHighlightColor: 'transparent',
                        ...(currentUnit && {
                            backgroundColor: '#F6FAFF',
                        }),
                    },
                    ...(currentUnit && {
                        backgroundImage: 'none',
                        backgroundColor: '#F6FAFF',
                    }),
                }}
                onClick={() => {
                    if (title) {
                        dispatch(setUnit(title));
                    }
                }}
            >
                <Box
                    sx={{
                        top: '0',
                        width: '100%',
                        height: '100%',
                        positon: 'absolute',
                        backgroundColor: '#B8B8B8',
                        opacity: '0.6',
                        zIndex: '-1',
                        ...(currentUnit && { opacity: '0' }),
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
                            textAlign: 'center',
                            color: 'white',
                            fontSize: '1.3rem',
                            fontWeight: 500,
                            textShadow: '0px 0px 10px black',
                            ...(currentUnit && {
                                color: (theme) => theme.palette.primary.light,
                                textShadow: '0px 0px 10px #e8e8e8',
                            }),
                        }}
                    >
                        {title ? title : ''}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Unit;
