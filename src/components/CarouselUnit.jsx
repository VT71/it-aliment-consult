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
            icon = (
                <IconButton href={'./#units-section'}>
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
            icon = (
                <IconButton href={'./#units-section'}>
                    <StoreIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Depozitare Comerț cu ridicata':
            icon = (
                <IconButton href={'./#units-section'}>
                    <LocalShippingIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Depozitare Procesare Export miere':
            icon = (
                <IconButton href={'./#units-section'}>
                    <HiveIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Panificație':
            icon = (
                <IconButton href={'./#units-section'}>
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
            icon = (
                <IconButton href={'./#units-section'}>
                    <BakeryDiningIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Cofetărie':
            icon = (
                <IconButton href={'./#units-section'}>
                    <CakeIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Abatorizare Animale Păsări':
            icon = (
                <IconButton href={'./#units-section'}>
                    <FactoryIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Procesare Carne':
            icon = (
                <IconButton href={'./#units-section'}>
                    <AcUnitIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Procesare Pește':
            icon = (
                <IconButton href={'./#units-section'}>
                    <FontAwesomeIcon icon={faFish} style={iconStyle} />
                </IconButton>
            );
            break;
        case 'Procesare Laptelui':
            icon = (
                <IconButton href={'./#units-section'}>
                    <FontAwesomeIcon icon={faCow} style={iconStyle} />
                </IconButton>
            );
            break;
        case 'Gospodării Animale Agricole':
            icon = (
                <IconButton href={'./#units-section'}>
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
            icon = (
                <IconButton href={'./#units-section'}>
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
                href={'./#units-section'}
            >
                <Typography sx={titleStyle}>{title}</Typography>
            </Button>
        </Box>
    );
}

export default CarouselUnit;
