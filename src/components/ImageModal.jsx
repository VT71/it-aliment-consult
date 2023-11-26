import * as React from 'react';

// @mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

// icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxWidth: '80%',
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid rgb(23, 63, 115)',
    boxShadow: 24,
    p: 4,
    paddingY: 2,
    borderRadius: '8px',
    overflowY: 'scroll',
};

export default function ImageModal({ type }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let imageLimit = 1;
    let imageName = '';

    switch (type) {
        case 'animaleCompanie':
            imageLimit = 10;
            imageName = 'animaleCompanie';
            break;
        case 'pasari':
            imageLimit = 3;
            imageName = 'pasari';
            break;
        case 'suine':
            imageLimit = 4;
            imageName = 'suine';
            break;
        case 'rumegatoare':
            imageLimit = 4;
            imageName = 'rumegatoare';
            break;
        case 'furajeApa':
            imageLimit = 5;
            imageName = 'furaje';
            break;
        default:
            break;
    }

    return (
        <div>
            <Box
                sx={{
                    wdith: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Button
                    variant={'contained'}
                    onClick={handleOpen}
                    sx={{
                        position: 'absolute',
                        bottom: '0.8rem',
                        backgroundColor: 'rgb(23, 63, 115)',
                    }}
                >
                    <Typography>Lista Completă</Typography>
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    >
                        <IconButton
                            onClick={() => {
                                handleClose();
                            }}
                        >
                            <CloseRoundedIcon sx={{ fontSize: '1.8rem' }} />
                        </IconButton>
                    </Box>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.primary.light,
                            fontSize: '1.5rem',
                            fontWeight: '500',
                            textAlign: 'center',
                        }}
                    >
                        Lista Servicii Synevovet
                    </Typography>
                    <Box
                        sx={{
                            marginTop: '2rem',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            rowGap: '0',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '60px',
                                display: 'flex',
                                justifyContent: 'end',
                                marginBottom: '1rem',
                            }}
                        >
                            <img
                                src={`${require('../assets/images/synevovetLogo.png')}`}
                                style={{
                                    height: '100%',
                                    width: 'auto',
                                }}
                            />
                        </Box>

                        {imageName &&
                            imageLimit &&
                            new Array(imageLimit).fill(0).map((_, index) => (
                                <img
                                    key={index}
                                    src={`${require('../assets/images/' +
                                        imageName +
                                        (index + 1) +
                                        '.png')}`}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            ))}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
