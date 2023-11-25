import React from 'react';

// @mui
import { Box, IconButton, Typography, Button } from '@mui/material';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish, faCow, faTractor } from '@fortawesome/free-solid-svg-icons';

// redux
import { useDispatch } from 'react-redux';
import { setUnit } from '../store/slices/unitSlice';

// icons
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HiveIcon from '@mui/icons-material/Hive';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CakeIcon from '@mui/icons-material/Cake';
import FactoryIcon from '@mui/icons-material/Factory';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const iconStyle = { color: 'white', fontSize: ' 2rem' };

const titleStyle = { color: 'white', fontWeight: 400, fontSize: ' 1.2rem' };

function CarouselUnit({ title }) {
    const dispatch = useDispatch();

    let icon = null;
    let clickHandler = null;

    switch (title) {
        case 'Alimentație publică':
            clickHandler = () => dispatch(setUnit('Alimentație publică'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <Box
                        sx={{
                            width: '32px',
                            height: '32px',
                            backgroundImage: `url("${require('../assets/images/foodSign.png')}")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    ></Box>
                </IconButton>
            );
            break;
        case 'Comerț':
            clickHandler = () =>
                dispatch(setUnit('Comerț (Produse Alimentare)'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <StoreIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Depozitare Comerț cu ridicata':
            clickHandler = () =>
                dispatch(setUnit('Depozitare, Comerț cu ridicata'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <LocalShippingIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Depozitare Procesare Export miere':
            clickHandler = () =>
                dispatch(setUnit('Depozitare, Procesare, Comerț miere'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <HiveIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Panificație':
            clickHandler = () => dispatch(setUnit('Panificație'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <Box
                        sx={{
                            width: '32px',
                            height: '32px',
                            backgroundImage: `url("${require('../assets/images/breadIcon.png')}")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    ></Box>
                </IconButton>
            );
            break;
        case 'Patiserie':
            clickHandler = () => dispatch(setUnit('Patiserie'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <BakeryDiningIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Cofetărie':
            clickHandler = () => dispatch(setUnit('Cofetărie'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <CakeIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Abatorizare Animale Păsări':
            clickHandler = () =>
                dispatch(setUnit('Abatorizare a animalelor/păsărilor'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <FactoryIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Procesare Carne':
            clickHandler = () => dispatch(setUnit('Procesare carne'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <AcUnitIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Procesare Pește':
            clickHandler = () => dispatch(setUnit('Procesare pește'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <FontAwesomeIcon icon={faFish} style={iconStyle} />
                </IconButton>
            );
            break;
        case 'Procesare Laptelui':
            clickHandler = () => dispatch(setUnit('Procesare lapte'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <FontAwesomeIcon icon={faCow} style={iconStyle} />
                </IconButton>
            );
            break;
        case 'Gospodării Animale Agricole':
            clickHandler = () =>
                dispatch(
                    setUnit('Gospodării de creștere a animalelor agricole')
                );
            icon = (
                <IconButton onClick={clickHandler}>
                    <Box
                        sx={{
                            width: '32px',
                            height: '32px',
                            backgroundImage: `url("${require('../assets/images/horseIcon.png')}")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    ></Box>
                </IconButton>
            );
            break;
        case 'Clinici veterinare  Cabinete veterinare':
            clickHandler = () =>
                dispatch(setUnit('Clinici veterinare/Cabinete veterinare'));
            icon = (
                <IconButton onClick={clickHandler}>
                    <Box
                        sx={{
                            width: '32px',
                            height: '32px',
                            backgroundImage: `url("${require('../assets/images/clinicSign.png')}")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    ></Box>
                </IconButton>
            );
            break;
        default:
            break;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                rowGap: ' 0.5rem',
                textAlign: 'center',
                width: '80px',
            }}
        >
            {icon}
            <Button
                variant='text'
                sx={{ textTransform: 'none' }}
                onClick={clickHandler}
            >
                <Typography sx={titleStyle}>{title}</Typography>
            </Button>
        </Box>
    );
}

export default CarouselUnit;
