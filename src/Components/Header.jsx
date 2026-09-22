import React, { use, useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Avatar,
  Button,
  TextField
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import { Label } from '@mui/icons-material';
import Auth from './Auth';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const menuItems = {
  Plants: [
    { name: "Indoor Plants", path: "/plants", type: "indoor plant" },
    { name: "Flowering Plants", path: "/plants", type: "flowering plant" },
    { name: "Hanging Plants", path: "/plants", type: "hanging plant" },
    { name: "Medicinal & Aromatic Plants", path: "/plants", type: "medicinal & aromatic plant" },
  ],
  "Pots & Planters": [
    { name: "Wooden Pots", path: "/pots", type: "wooden pot" },
    { name: "Ceramic Pots", path: "/ceramic-pots" },
    { name: "Hydroponic Planter", path: "/hydroponic-planter" },
    { name: "Basket Planter", path: "/basket-planter" },
  ],
  Seeds: [
    { name: "Flower Seeds", path: "/flower-seeds" },
    { name: "Vegetable Seeds", path: "/vegetable-seeds" },
    { name: "Microgreen Seeds", path: "/microgreen-seeds" },
  ],
  Blog: [],
};

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header({ color = '#DAF1DE' }) {


  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(sessionStorage.getItem('token'));
  })

const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                setOpen(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [open]);

  const [mobileMenu, setMobileMenu] = useState('');

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [anchorElDropdown, setAnchorElDropdown] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenDropdown = (event, menuName) => {
    setAnchorElDropdown(event.currentTarget);
    setSelectedMenu(menuName);
  };

  const handleCloseDropdown = () => {
    setAnchorElDropdown(null);
    setSelectedMenu('');
  };

const handleLogOut = () => {
  sessionStorage.removeItem('token');
  setAnchorElDropdown(null);
}

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '70px' }}>

          {/* Left Side */}
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton color="#DAF1DE" onClick={handleOpenNavMenu}>
                <MenuIcon sx={{ color }} />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={() => {
                  setAnchorElNav(null);
                  setMobileMenu('');
                }}
                slotProps={{
                  paper: {
                    sx: { background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(15px)' }
                  }
                }}
              >
                {!mobileMenu ? (
                  Object.keys(menuItems).map((page) => (
                    <MenuItem
                      key={page}
                      component={page == 'Blog' ? Link : 'li'}
                      to={page == 'Blog' ? '/blogs' : undefined}
                      onClick={() => {
                        if (page === "Blog") {
                          setAnchorElNav(null);
                        } else {
                          setMobileMenu(page);
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: '200px',
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography sx={{ color }}>
                          {page}
                        </Typography>

                        {menuItems[page].length > 0 && (
                          <Typography sx={{ color }}>
                            {'>'}
                          </Typography>
                        )}
                      </Box>
                    </MenuItem>
                  ))
                ) : (
                  <>
                    <MenuItem onClick={() => setMobileMenu('')} sx={{ color: '#DAF1DE' }}>
                      ← Back
                    </MenuItem>

                    {menuItems[mobileMenu].map((item) => (
                      <MenuItem sx={{ color: '#DAF1DE' }}
                        key={item}
                        onClick={() => {
                          setAnchorElNav(null);
                          setMobileMenu('');
                        }}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </>
                )}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {Object.keys(menuItems).map((page) => (
                <Button component={Link} to={page == 'Blog' ? '/blogs' : ''}
                  key={page}
                  sx={{ color }}
                  onClick={(e) => {
                    if(token){
                    if (menuItems[page].length > 0) {
                      handleOpenDropdown(e, page);
                    }
                  }
                  else{
                    handleClickOpen()
                  }
                  }}>
                  {page}
                </Button>
              ))}

              <Menu
                anchorEl={anchorElDropdown}
                open={Boolean(anchorElDropdown)}
                onClose={handleCloseDropdown}
                slotProps={{
                  paper: {
                    sx: { width: 'auto', color, borderRadius: 1, background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(15px)' }
                  }
                }}
              >
                {selectedMenu &&
                  menuItems[selectedMenu].map((item) => (
                    <MenuItem
                      key={item}
                      key={item.path}
                      component={Link}
                      to={`${item.path}?type=${encodeURIComponent(item.type)}`}
                      onClick={handleCloseDropdown}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          </Box>

          {/* Center Logo */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color,
                fontWeight: 700,
                letterSpacing: '.2rem',
                fontSize: {
                  xs: '1rem',
                  sm: '1.2rem',
                  md: '1.5rem'
                }
              }}
            >
              VERDURA
            </Typography>
          </Box>

          {/* Right Side */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {token ? (<>
              <IconButton onClick={handleOpenUserMenu}>
                <PersonOutlineOutlinedIcon sx={{ color, fontSize: '40px' }} />
              </IconButton>
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
                slotProps={{
                  paper: {
                    sx: { width: 'auto', color, borderRadius: 1, background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(15px)' }
                  }
                }}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => setting == 'Logout' ? handleLogOut() : setAnchorElUser(null)} component={Link} to={setting == 'Profile' ? '/profile' : 'Logout' ? '/home' : ''}>
                    {setting}
                  </MenuItem>
                ))}
              </Menu>
            </>) : <Auth />}
          </Box>
        </Toolbar>
      </Container>
      <Dialog open={open} onClose={handleClose} BackdropProps={{ sx: { backgroundColor: 'rgba(5, 31, 32, 0.35)', backdropFilter: 'blur(3px)' } }}
                      PaperProps={{ sx: { width: { xs: '90%', sm: '590px' }, borderRadius: '8px', padding: '12px', background: 'rgba(5, 31, 32, 0.55)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', border: '1px solid rgba(142, 182, 155, 0.4)', boxShadow: '0 15px 50px rgba(0, 0, 0, 0.4)' } }}>
                      <DialogTitle id="login-dialog-title" sx={{ textAlign: 'center', color: '#051F20', fontFamily: '"Cormorant Garamond", serif', fontSize: '32px', fontWeight: 600, pb: 1 }}>
                          Welcome to Verdura
                      </DialogTitle>
                      <DialogContent sx={{ textAlign: 'center', px: 3 }}>
                          <Box sx={{ width: '55px', height: '55px', borderRadius: '50%', backgroundColor: '#DAF1DE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: '25px' }}>
                              🌿
                          </Box>
                          <DialogContentText
                              sx={{ color: '#235347', fontFamily: '"Inter", sans-serif', fontSize: '14px', lineHeight: 1.7, }}>
                              Please login to your account to explore our
                              collection of beautiful plants and botanical essentials.
                          </DialogContentText>
                      </DialogContent>
                  </Dialog>
    </AppBar>
  );
}

export default Header;