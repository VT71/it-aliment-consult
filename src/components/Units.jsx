import React from 'react';

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

    switch (selectedUnit) {
        case 'Comerț (Produse Alimentare)':
            key = 'comertProduseAlimentare';
            break;
        case 'Depozitare, Comerț cu ridicata':
            key = 'depozitareComertRidicata';
            break;
        case 'Depozitare, Procesare, Comerț miere':
            key = 'miere';
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
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    width: '940px',
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
                            overflow: 'auto',
                            backgroundColor: 'white',
                        }}
                    >
                        <Unit title={'Comerț (Produse Alimentare)'} />
                        <Unit title={'Depozitare, Comerț cu ridicata'} />
                        <Unit title={'Depozitare, Procesare, Comerț miere'} />
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
                        <ul style={{paddingLeft: '1.5rem'}}>
                            {key
                                ? descriptions[key].map(
                                      (description, index) => {
                                          return (
                                              <li>
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
                                : ''}
                        </ul>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}

export default Units;
