import React from 'react';

// @mui
import { Card, Typography, Box } from '@mui/material';

// utils
import servicesTexts from '../lib/services';

// icons
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WashIcon from '@mui/icons-material/Wash';
import CachedIcon from '@mui/icons-material/Cached';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

const iconStyle = {
    color: (theme) => theme.palette.secondary.light,
    fontSize: '2.5rem',
};

const titleStyle = {
    color: (theme) => theme.palette.primary.light,
    fontSize: '1.5rem',
    fontWeight: '500',
};

const descriptionStyle = { fontSize: '1.1rem', marginTop: '1rem' };

function Service({ type }) {
    let icon = null;
    let title = null;
    let description = null;

    switch (type) {
        case 'evaluarea-unitatii':
            icon = <AssignmentTurnedInIcon sx={iconStyle} />;
            title = servicesTexts['evaluarea-unitatii'].title;
            description = servicesTexts['evaluarea-unitatii'].description;
            break;
        case 'consultarea-beneficiarului':
            icon = <InfoIcon sx={iconStyle} />;
            title = servicesTexts['consultarea-beneficiarului'].title;
            description =
                servicesTexts['consultarea-beneficiarului'].description;
            break;
        case 'haccp':
            icon = <AssignmentIcon sx={iconStyle} />;
            title = servicesTexts['haccp'].title;
            description = servicesTexts['haccp'].description;
            break;
        case 'program-igienizare':
            icon = <WashIcon sx={iconStyle} />;
            title = servicesTexts['program-igienizare'].title;
            description = servicesTexts['program-igienizare'].description;
            break;
        case 'monitorizare-periodica':
            icon = <CachedIcon sx={iconStyle} />;
            title = servicesTexts['monitorizare-periodica'].title;
            description = servicesTexts['monitorizare-periodica'].description;
            break;
        case 'combatere-daunatori':
            icon = <CoronavirusIcon sx={iconStyle} />;
            title = servicesTexts['combatere-daunatori'].title;
            description = servicesTexts['combatere-daunatori'].description;
            break;
        default:
            break;
    }

    return (
        <Card
            sx={{
                boxSizing: 'border-box',
                backgroundColor: '#F8FBFF',
                width: '280px',
                height: '400px',
                borderRadius: '8px',
                paddingX: '1.5rem',
                paddingY: ' 2.2rem',
                textAlign: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: '1.5rem',
                }}
            >
                {icon}
                <Box
                    sx={{
                        width: '100%',
                        height: '4.5rem',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography sx={titleStyle}>{title}</Typography>
                </Box>
            </Box>
            <Typography sx={descriptionStyle}>{description}</Typography>
        </Card>
    );
}

export default Service;
