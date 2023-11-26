import React, { useEffect } from 'react';
import { useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setUnit } from '../store/slices/unitSlice';

// @mui
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function Unit({ title }) {
    const max600 = useMediaQuery('(max-width:600px)');

    const dispatch = useDispatch();

    const selectedUnit = useSelector((state) => state.unit.unit);
    const changeType = useSelector((state) => state.unit.changeType);

    let currentUnit = title && selectedUnit && title === selectedUnit;
    console.log('title, current unit', title, currentUnit);

    let image = null;

    const ref = React.useRef(null);

    const checkIfVisible = () => {
        // const unitTop = ref.current.offsetTop;
        // const unitBottom = unitTop + ref.current.getBoundingClientRect().height;

        // console.log('unitTop', unitTop);
        // console.log('unitBottom', unitBottom);

        // const containerTop = document.getElementById(
        //     'units-scrollable-container'
        // ).scrollTop;
        // const containerBottom =
        //     containerTop +
        //     document.getElementById('units-scrollable-container').offsetHeight;

        // console.log('containerTop', containerTop);
        // console.log('containerBottom', containerBottom);
        let scrollTop = 0;
        console.log('title', title);
        switch (title) {
            // inscrease scrollTop by 124.8px for each unit
            case 'Alimentație publică':
                scrollTop = 0;
                break;
            case 'Comerț (Produse Alimentare)':
                !max600 ? (scrollTop = 124.8) : (scrollTop = 214.8);
                break;
            case 'Depozitare, Comerț cu ridicata':
                !max600 ? (scrollTop = 249.6) : (scrollTop = 429.6);
                break;
            case 'Depozitare, Procesare, Comerț miere':
                !max600 ? (scrollTop = 374.4) : (scrollTop = 644.4);
                break;
            case 'Abatorizare a animalelor/păsărilor':
                !max600 ? (scrollTop = 499.2) : (scrollTop = 859.2);
                break;
            case 'Procesare carne':
                !max600 ? (scrollTop = 624) : (scrollTop = 1074);
                break;
            case 'Procesare pește':
                !max600 ? (scrollTop = 748.8) : (scrollTop = 1289.8);
                break;
            case 'Procesare lapte':
                !max600 ? (scrollTop = 873.6) : (scrollTop = 1504.6);
                break;
            case 'Panificație':
                !max600 ? (scrollTop = 998.4) : (scrollTop = 1719.4);
                break;
            case 'Patiserie':
                !max600 ? (scrollTop = 1123.2) : (scrollTop = 1934.2);
                break;
            case 'Cofetărie':
                !max600 ? (scrollTop = 1248) : (scrollTop = 2149);
                break;
            case 'Gospodării de creștere a animalelor agricole':
                !max600 ? (scrollTop = 1372.8) : (scrollTop = 2363.8);
                break;
            case 'Clinici veterinare/Cabinete veterinare':
                !max600 ? (scrollTop = 1497.6) : (scrollTop = 2578.6);
                break;
            default:
                break;
        }
        if (changeType === 'carousel') {
            if (max600) {
                document.getElementById(
                    'units-scrollable-container'
                ).scrollLeft = scrollTop;
            } else {
                document.getElementById(
                    'units-scrollable-container'
                ).scrollTop = scrollTop;
            }

            //     setTimeout(() => {
            //         document.getElementById('units-section').scrollIntoView();
            //     }, 1000);
            //     if (!(unitBottom <= 713 && unitTop >= 218)) {
            //         console.log('not visible');
            //         ref.current.scrollIntoView({
            //             block: 'end',
            //             inline: 'nearest',
            //             behavior: 'instant',
            //         });
            //     } else {
            //         return;
            //     }
            // } else {
            //     return;
        }
    };

    useEffect(() => {
        if (currentUnit) {
            checkIfVisible();
        }
    }, [selectedUnit]);

    switch (title) {
        case 'Alimentație publică':
            image = 'alimentatiePublica.jpg';
            break;
        case 'Comerț (Produse Alimentare)':
            image = 'supermarket.jpg';
            break;
        case 'Depozitare, Comerț cu ridicata':
            image = 'warehouse.jpg';
            break;
        case 'Depozitare, Procesare, Comerț miere':
            image = 'honey.jpg';
            break;
        case 'Abatorizare a animalelor/păsărilor':
            image = 'abatoare.jpg';
            break;
        case 'Procesare carne':
            image = 'procesareCarne.jpg';
            break;
        case 'Procesare pește':
            image = 'procesarePeste.jpg';
            break;
        case 'Procesare lapte':
            image = 'procesareLapte.jpg';
            break;
        case 'Panificație':
            image = 'bakery.jpg';
            break;
        case 'Patiserie':
            image = 'patiserie.jpg';
            break;
        case 'Cofetărie':
            image = 'cofetarie.jpg';
            break;
        case 'Gospodării de creștere a animalelor agricole':
            image = 'animaleAgricole.jpg';
            break;
        case 'Clinici veterinare/Cabinete veterinare':
            image = 'veterinar.jpg';
            break;
        default:
            break;
    }

    return (
        <Box
            ref={ref}
            sx={{
                width: '100%',
                height: '120px',
                // overflow: 'hidden',
                ...(title !== 'Clinici veterinare/Cabinete veterinare' && {
                    marginBottom: '4.8px',
                }),
                borderRadius: '8px',
                ...(currentUnit && { borderRadius: '8px 0 0 8px' }),
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
                '@media (max-width: 600px)': {
                    width: '210px',
                    height: '100%',
                    margin: '0',
                },
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
                    ...(currentUnit && {
                        backgroundImage: 'none',
                        backgroundColor: '#F6FAFF',
                    }),
                    borderRadius: '8px',
                    ...(currentUnit && !max600 && { borderRadius: '8px 0 0 8px' }),
                    ...(currentUnit && max600 && { borderRadius: '8px 8px 0 0' }),
                    overflow: 'hidden',
                }}
                onClick={() => {
                    if (title) {
                        dispatch(setUnit({ unit: title, changeType: 'menu' }));
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
                            '@media (max-width: 600px)': {
                                fontSize: '1.1rem',
                            },
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
