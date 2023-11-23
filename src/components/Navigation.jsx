import * as React from 'react';

// @mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
    { title: 'Servicii Consultare', href: './#units-section' },
    { title: 'Servicii Laborator', href: './#laboratory-section' },
    { title: 'Contact', href: './#contact-section' },
];

function Navigation() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOnScroll = () => {
        console.log('yoffset', window.scrollY);
        // change navigationBar background
        if (window.scrollY > 200) {
            document.querySelector('.navigationBar').style.backgroundColor =
                '#173F73';
        } else {
            document.querySelector('.navigationBar').style.backgroundColor =
                'transparent';
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);
        return () => window.removeEventListener('scroll', handleOnScroll);
    }, []);

    return (
        <AppBar
            className='navigationBar'
            sx={{
                position: 'fixed',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                transition: 'all 0.5s ease',
            }}
        >
            <Container maxWidth='lg'>
                <Toolbar disableGutters>
                    <img
                        src={`${require('../assets/images/logo.png')}`}
                        alt='logo'
                        height='36px'
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none' },
                            '@media (min-width: 900px)': {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'end',
                                columnGap: '2rem',
                            },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.title}
                                href={page.href}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontWeight: 400,
                                    fontSize: '1.125rem',
                                    textTransform: 'none',
                                }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                    {/* MOBILE VERSION */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { md: 'none' },
                            '@media (max-width: 900px)': {
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'end',
                            },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.title}
                                    href={page.href}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign='center'>
                                        {page.title}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navigation;
