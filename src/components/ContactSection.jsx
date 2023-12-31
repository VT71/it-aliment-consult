import React from 'react';

// @mui
import { Box, Typography } from '@mui/material';
import ContactItem from './ContactItem';

// icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function ContactSection() {
    return (
        <Box
            id={'contact-section'}
            sx={{
                width: '100%',
                // maxWidth: '1280px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#173F73',
                paddingBottom: '1rem',
            }}
        >
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
                            color: '#FEFFFA',
                            fontSize: '3rem',
                            fontWeight: '500',
                            '@media (max-width: 700px)': { fontSize: '2.6rem' },
                            '@media (max-width: 600px)': { fontSize: '2.4rem' },
                            '@media (max-width: 500px)': { fontSize: '2.2rem' },
                        }}
                    >{`Contacte`}</Typography>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            columnGap: '6rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '1.5rem',
                            boxSizing: 'border-box',
                            paddingX: '2rem',
                            flexWrap: 'wrap',
                            rowGap: '1rem',
                        }}
                    >
                        <ContactItem
                            icon={
                                <LocalPhoneIcon
                                    sx={{
                                        color: '#97A626',
                                        fontSize: '1.85rem',
                                    }}
                                />
                            }
                            text={`+373 69 211 976`}
                        />
                        <ContactItem
                            icon={
                                <EmailIcon
                                    sx={{
                                        fill: '#97A626',
                                        fontSize: '1.85rem',
                                        transition: 'all 0.3s ease-in-out',
                                        ':hover': {
                                            fill: '#FEFFFA',
                                        },
                                    }}
                                />
                            }
                            text={`ion.toma.asv@gmail.com`}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactSection;
