import React from 'react';

// @mui
import { Box, IconButton, Typography, Button } from '@mui/material';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish, faCow, faTractor } from '@fortawesome/free-solid-svg-icons';

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
    let icon = null;

    switch (title) {
        case 'Comerț':
            icon = (
                <IconButton>
                    <StoreIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Depozitare Comerț cu ridicata':
            icon = (
                <IconButton>
                    <LocalShippingIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Depozitare Procesare Export miere':
            icon = (
                <IconButton>
                    <HiveIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Panificație':
            icon = (
                <IconButton>
                    <BakeryDiningIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Patiserie':
        case 'Cofetărie':
            icon = (
                <IconButton>
                    <CakeIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Abatorizare Animale Păsări':
            icon = (
                <IconButton>
                    <FactoryIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Procesare Carne':
            icon = (
                <IconButton>
                    <AcUnitIcon sx={iconStyle} />
                </IconButton>
            );
            break;
        case 'Procesare Pește':
            icon = (
                <FontAwesomeIcon
                    icon={faFish}
                    style={{ fontSize: '2rem', color: 'white' }}
                />
            );
            break;
        case 'Procesare Laptelui':
            icon = (
                <FontAwesomeIcon
                    icon={faCow}
                    style={{ fontSize: '2rem', color: 'white' }}
                />
            );
            break;
        case 'Gospodării Animale Agricole':
            icon = (
                <FontAwesomeIcon
                    icon={faTractor}
                    style={{ fontSize: '2rem', color: 'white' }}
                />
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
            <Button variant='text' sx={{ textTransform: 'none' }}>
                <Typography sx={titleStyle}>{title}</Typography>
            </Button>
        </Box>
    );
}

export default CarouselUnit;
