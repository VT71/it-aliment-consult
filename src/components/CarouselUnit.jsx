import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';

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
            icon = <StoreIcon sx={iconStyle} />;
            break;
        case 'Depozitare Comerț cu ridicata':
            icon = <LocalShippingIcon sx={iconStyle} />;
            break;
        case 'Depozitare Procesare Export miere':
            icon = <HiveIcon sx={iconStyle} />;
            break;
        case 'Panificație':
            icon = <BakeryDiningIcon sx={iconStyle} />;
            break;
        case 'Patiserie':
        case 'Cofetărie':
            icon = <CakeIcon sx={iconStyle} />;
            break;
        case 'Abatorizare Animale Păsări':
            icon = <FactoryIcon sx={iconStyle} />;
            break;
        case 'Procesare Carne':
            icon = <AcUnitIcon sx={iconStyle} />;
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
            <Typography sx={titleStyle}>{title}</Typography>
        </Box>
    );
}

export default CarouselUnit;
