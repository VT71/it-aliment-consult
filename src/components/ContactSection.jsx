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
            sx={{
                width: '100%',
                maxWidth: '1280px',
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
                            color: '#FEFFFA',
                            fontSize: '3rem',
                            fontWeight: '500',
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
                                        color: '#97A626',
                                        fontSize: '1.85rem',
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
