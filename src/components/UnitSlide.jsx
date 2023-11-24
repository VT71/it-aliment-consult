import React, { Component } from 'react';

// carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// @mui
import CarouselUnit from './CarouselUnit';
import { Box, Button, IconButton } from '@mui/material';

// css
import '../index.css';

// icons
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 599, min: 0 },
        items: 2,
    },
};

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType },
    } = rest;
    return (
        <IconButton
            sx={{
                position: 'absolute',
                right: '-3rem',
                zIndex: '10',
                cursor: 'pointer',
            }}
            onClick={() => onClick()}
        >
            <ArrowForwardIosRoundedIcon
                sx={{ color: 'white', fontSize: '2.5rem' }}
            />
        </IconButton>
    );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType },
    } = rest;
    return (
        <IconButton
            sx={{
                position: 'absolute',
                left: '0',
                zIndex: '10',
                cursor: 'pointer',
            }}
            onClick={() => onClick()}
        >
            <ArrowBackIosRoundedIcon
                sx={{ color: 'white', fontSize: '2.5rem' }}
            />
        </IconButton>
    );
};

function UnitSlide() {
    return (
        <Box sx={{ width: '100%' }}>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                centerMode={true}
                itemClass='carousel-item'
                containerClass='carousel-container'
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
            >
                <CarouselUnit title={'Alimentație publică'} />
                <CarouselUnit title={'Comerț'} />
                <CarouselUnit title={'Depozitare Comerț cu ridicata'} />
                <CarouselUnit title={'Depozitare Procesare Export miere'} />
                <CarouselUnit title={'Abatorizare Animale Păsări'} />
                <CarouselUnit title={'Procesare Carne'} />
                <CarouselUnit title={'Procesare Pește'} />
                <CarouselUnit title={'Procesare Laptelui'} />
                <CarouselUnit title={'Panificație'} />
                <CarouselUnit title={'Patiserie'} />
                <CarouselUnit title={'Cofetărie'} />
                <CarouselUnit title={'Gospodării Animale Agricole'} />
                <CarouselUnit
                    title={'Clinici veterinare  Cabinete veterinare'}
                />
            </Carousel>
        </Box>
    );
}

export default UnitSlide;
