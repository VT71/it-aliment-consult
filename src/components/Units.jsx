import React, { useEffect } from 'react';

// @mui
import { Box, Typography, Card } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// components
import Unit from './Unit';

// redux
import { useSelector } from 'react-redux';

// lib
import descriptions from '../lib/unitDescriptions';

function Units() {
    const max600 = useMediaQuery('(max-width:600px)');

    const selectedUnit = useSelector((state) => state.unit.unit);
    const changeType = useSelector((state) => state.unit.changeType);

    let key = null;

    const myRef1 = React.useRef(null);
    const myRef2 = React.useRef(null);
    const myRef3 = React.useRef(null);
    const myRef4 = React.useRef(null);
    const myRef5 = React.useRef(null);
    const myRef6 = React.useRef(null);
    const myRef7 = React.useRef(null);
    const myRef8 = React.useRef(null);
    const myRef9 = React.useRef(null);
    const myRef10 = React.useRef(null);
    const myRef11 = React.useRef(null);
    const myRef12 = React.useRef(null);
    const myRef13 = React.useRef(null);

    const checkIfVisible = (ref) => {
        const top = ref.current.getBoundingClientRect().top;
        const bottom = ref.current.getBoundingClientRect().bottom;

        if (!(top >= 0 && bottom <= window.innerHeight)) {
            ref.current.scrollIntoView({
                block: 'center',
                inline: 'nearest',
            });
        } else return;
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         switch (selectedUnit) {
    //             case 'Alimentație publică':
    //                 checkIfVisible(myRef1);
    //                 break;
    //             case 'Comerț (Produse Alimentare)':
    //                 checkIfVisible(myRef2);
    //                 break;
    //             case 'Depozitare, Comerț cu ridicata':
    //                 checkIfVisible(myRef3);
    //                 break;
    //             case 'Depozitare, Procesare, Comerț miere':
    //                 checkIfVisible(myRef4);
    //                 break;
    //             case 'Panificație':
    //                 checkIfVisible(myRef5);
    //                 break;
    //             case 'Patiserie':
    //                 checkIfVisible(myRef6);
    //                 break;
    //             case 'Cofetărie':
    //                 checkIfVisible(myRef7);
    //                 break;
    //             case 'Abatorizare a animalelor/păsărilor':
    //                 checkIfVisible(myRef8);
    //                 break;
    //             case 'Procesare carne':
    //                 checkIfVisible(myRef9);
    //                 break;
    //             case 'Procesare peste':
    //                 checkIfVisible(myRef10);
    //                 break;
    //             case 'Procesare lapte':
    //                 checkIfVisible(myRef11);
    //                 break;
    //             case 'Gospodării de creștere a animalelor agricole':
    //                 checkIfVisible(myRef12);
    //                 break;
    //             case 'Clinici veterinare/Cabinete veterinare':
    //                 checkIfVisible(myRef13);
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }, 1000);
    // }, [selectedUnit]);

    switch (selectedUnit) {
        case 'Alimentație publică':
            key = 'alimentatiePublica';
            break;
        case 'Comerț (Produse Alimentare)':
            key = 'comertProduseAlimentare';
            break;
        case 'Depozitare, Comerț cu ridicata':
            key = 'depozitareComertRidicata';
            break;
        case 'Depozitare, Procesare, Comerț miere':
            key = 'miere';
            break;
        case 'Panificație':
            key = 'panificatie';
            break;
        case 'Patiserie':
            key = 'patiserie';
            break;
        case 'Cofetărie':
            key = 'cofetarie';
            break;
        case 'Abatorizare a animalelor/păsărilor':
            key = 'abatoare';
        case 'Procesare carne':
            key = 'procesareCarne';
            break;
        case 'Procesare pește':
            key = 'procesarePeste';
            break;
        case 'Procesare lapte':
            key = 'procesareLapte';
            break;
        case 'Gospodării de creștere a animalelor agricole':
            key = 'gospodariiAnimale';
            break;
        case 'Clinici veterinare/Cabinete veterinare':
            key = 'cliniciVeterinare';
            break;
        default:
            break;
    }

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
                paddingBottom: '3rem',
                paddingX: '2rem',
            }}
        >
            <Box
                id={'units-section'}
                sx={{ position: 'relative', top: '-50px' }}
            ></Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '940px',
                    rowGap: '2rem',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'center',
                        boxSizing: 'border-box',
                        paddingY: '2rem',
                    }}
                >
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.primary.main,
                            fontSize: '3rem',
                            fontWeight: '500',
                            '@media (max-width: 700px)': { fontSize: '2.6rem' },
                            '@media (max-width: 600px)': { fontSize: '2.4rem' },
                            '@media (max-width: 500px)': { fontSize: '2.2rem' },
                        }}
                    >{`Tipuri Unități`}</Typography>
                </Box>
                <Card
                    sx={{
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        width: '100%',
                        height: '494px',
                        backgroundColor: '#F6FAFF',
                        display: 'flex',
                        flexDirection: 'row',
                        '@media (max-width: 600px)': {
                            flexDirection: 'column',
                        },
                    }}
                >
                    <Box
                        id={'units-scrollable-container'}
                        sx={{
                            width: '30%',
                            height: '100%',
                            boxSizing: 'border-box',
                            overflow: 'scroll',
                            backgroundColor: 'white',
                            '@media (max-width: 600px)': {
                                height: '100px',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                columnGap: '4.8px',
                            },
                        }}
                    >
                        <Box ref={myRef1}>
                            <Unit title={'Alimentație publică'} />
                        </Box>
                        <Box ref={myRef2}>
                            <Unit title={'Comerț (Produse Alimentare)'} />
                        </Box>
                        <Box ref={myRef3}>
                            <Unit title={'Depozitare, Comerț cu ridicata'} />
                        </Box>
                        <Box ref={myRef4}>
                            <Unit
                                title={'Depozitare, Procesare, Comerț miere'}
                            />
                        </Box>
                        <Box ref={myRef8}>
                            <Unit
                                title={'Abatorizare a animalelor/păsărilor'}
                            />
                        </Box>
                        <Box ref={myRef9}>
                            <Unit title={'Procesare carne'} />
                        </Box>
                        <Box ref={myRef10}>
                            <Unit title={'Procesare pește'} />
                        </Box>
                        <Box ref={myRef11}>
                            <Unit title={'Procesare lapte'} />
                        </Box>
                        <Box ref={myRef5}>
                            <Unit title={'Panificație'} />
                        </Box>
                        <Box ref={myRef6}>
                            <Unit title={'Patiserie'} />
                        </Box>
                        <Box ref={myRef7}>
                            <Unit title={'Cofetărie'} />
                        </Box>
                        <Box ref={myRef12}>
                            <Unit
                                title={
                                    'Gospodării de creștere a animalelor agricole'
                                }
                            />
                        </Box>
                        <Box ref={myRef13}>
                            <Unit
                                title={'Clinici veterinare/Cabinete veterinare'}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            width: '70%',
                            height: '100%',
                            boxSizing: 'border-box',
                            padding: '1rem 2rem',
                            overflow: 'scroll',
                            '@media (max-width: 600px)': {
                                height: '394px',
                                width: '100%',
                                padding: '1rem 0.5rem 0 0'
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '1.6rem',
                                fontWeight: 500,
                                marginBottom: '1.2rem',
                                paddingX: '1rem',
                                ...(max600 && { textAlign: 'center', fontSize: '1.5rem' }),
                            }}
                        >
                            {selectedUnit ? selectedUnit : ''}
                        </Typography>
                        <ul style={{ paddingLeft: '1.5rem' }}>
                            {/* {key
                                ? descriptions[key].map(
                                      (description, index) => {
                                          return (
                                              <li key={index}>
                                                  <Typography
                                                      key={index}
                                                      sx={{
                                                          marginBottom: '1rem',
                                                      }}
                                                  >
                                                      {description}
                                                  </Typography>
                                              </li>
                                          );
                                      }
                                  )
                                : ''} */}
                            {key && descriptions[key]
                                ? descriptions[key]
                                      .split('•')
                                      .map((item, index) => {
                                          if (index !== 0) {
                                              return (
                                                  <Typography
                                                      key={index}
                                                      sx={{
                                                          marginBottom: '1rem',
                                                      }}
                                                  >
                                                      {`• ${item}`}
                                                  </Typography>
                                              );
                                          }
                                      })
                                : ''}
                        </ul>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}

export default Units;
