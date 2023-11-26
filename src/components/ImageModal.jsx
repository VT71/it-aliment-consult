import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid rgb(23, 63, 115)',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
};

export default function ImageModal({ type }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <Typography>Lista completă</Typography>
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                <Typography
                        sx={{
                            color: (theme) => theme.palette.primary.light,
                            fontSize: '1.7rem',
                            fontWeight: '500',
                            textAlign: 'center'
                        }}
                    >
                        Lista Servicii
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
