import React, { useState } from 'react';
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

const menuItems = {
  Plants: [
    { name: "Indoor Plants", path: "/plants" },
    { name: "Flowering Plants", path: "/flowering-plants" },
    { name: "Hanging Plants", path: "/hanging-plants" },
    { name: "Medicinal & Aromatic Plants", path: "/medicinal-plants" },
  ],
  "Pots & Planters": [
    { name: "Wooden Pots", path: "/pots" },
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
                    if (menuItems[page].length > 0) {
                      handleOpenDropdown(e, page);
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
                      to={item.path}
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
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <IconButton onClick={handleOpenUserMenu}>
              {/* <IconButton onClick={handleClick}>*/}
              <PersonOutlineOutlinedIcon sx={{ color: '#DAF1DE', fontSize: '40px' }} />
            </IconButton>

            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
              slotProps={{
                paper: {
                  sx: { width: 'auto', color: '#DAF1DE', borderRadius: 1, background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(15px)' }
                }
              }}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => setAnchorElUser(null)}
                  component={Link} to={setting == 'Profile' ? '/p' : ''}
                >
                  {setting}
                </MenuItem>
              ))}
            </Menu>


            <Auth/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;