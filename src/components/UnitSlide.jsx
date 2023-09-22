import React, { Component } from 'react';

// carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// @mui
import CarouselUnit from './CarouselUnit';
import { Box } from '@mui/material';

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
        breakpoint: { max: 464, min: 0 },
        items: 3,
    },
};

function UnitSlide() {
    return (
        <Box sx={{ width: '100%' }}>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                centerMode={true}
                arrows={false}
            >
                <CarouselUnit title={'Comerț'} />
                <CarouselUnit title={'Depozitare Comerț cu ridicata'} />
                <CarouselUnit title={'Panificație'} />
                <CarouselUnit title={'Depozitare Procesare Export miere'} />
                <CarouselUnit title={'Patiserie'} />
                <CarouselUnit title={'Abatorizare Animale Păsări'} />
                <CarouselUnit title={'Cofetărie'} />
                <CarouselUnit title={'Procesare Carne'} />
                <CarouselUnit title={'Procesare Pește'} />
                <CarouselUnit title={'Procesare Laptelui'} />
                <CarouselUnit
                    title={'Gospodării Animale Agricole'}
                />
            </Carousel>
        </Box>
    );
}

export default UnitSlide;
