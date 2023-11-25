import React, { useEffect } from 'react';

// @mui
import { Box, Typography, Card } from '@mui/material';

// components
import Unit from './Unit';

// redux
import { useSelector } from 'react-redux';

// lib
import descriptions from '../lib/unitDescriptions';

function Units() {
    const selectedUnit = useSelector((state) => state.unit.unit);

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

    useEffect(() => {
        setTimeout(() => {
            switch (selectedUnit) {
                case 'Alimentație publică':
                    myRef1.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Comerț (Produse Alimentare)':
                    myRef2.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Depozitare, Comerț cu ridicata':
                    myRef3.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Depozitare, Procesare, Comerț miere':
                    myRef4.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Panificație':
                    console.log('PANIFICATIE');
                    myRef5.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Patiserie':
                    myRef6.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Cofetărie':
                    myRef7.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Abatorizare a animalelor/păsărilor':
                    myRef8.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Procesare carne':
                    myRef9.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Procesare peste':
                    myRef10.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Procesare lapte':
                    myRef11.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Gospodării de creștere a animalelor agricole':
                    myRef12.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                case 'Clinici veterinare/Cabinete veterinare':
                    myRef13.current.scrollIntoView({
                        block: 'end',
                        inline: 'nearest',
                    });
                    break;
                default:
                    break;
            }
        }, 1000);
    }, [selectedUnit]);

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
        case 'Procesare peste':
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
                    }}
                >
                    <Box
                        sx={{
                            width: '30%',
                            height: '100%',
                            boxSizing: 'border-box',
                            overflow: 'scroll',
                            backgroundColor: 'white',
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
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '1.6rem',
                                fontWeight: 500,
                                marginBottom: '1.2rem',
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
