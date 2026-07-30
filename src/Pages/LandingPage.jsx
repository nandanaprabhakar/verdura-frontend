import { Box, Typography, Button } from '@mui/material'
import { FaLeaf } from "react-icons/fa";
import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className='landing-banner pt-1'>
            <Box sx={{ width: { xs: '80%', md: '530px' }, position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)' }}>
                <Typography variant='h1' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: { xs: 400, md: 500, lg: 500 }, fontSize: { xs: '60px', sm: '80px', md: '100px', lg: '113px', }, color: '#051F20', textAlign: 'center' }}>
                    VERDURA
                </Typography>
                <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '400', color: '#DAF1DE', textAlign: 'center', ml: 3 }}>
                    Explore a curated collection of indoor plants, premium seeds, elegant pots and gardening essentials to transform your <br /> space into a green sanctuary.
                </Typography>
                <Link to={'/home'}>
                <Button variant="contained" sx={{backgroundColor: '#235347', borderRadius: '30px', py: 2, width: '150px', my: 3, mx: '40%' }}>Shop Now</Button>
                </Link>
            </Box>
            <Box sx={{ width: { xs: '80%', md: '530px' }, position: 'absolute', bottom: 90, left: {xs:'50%', md: 'auto'}, right: { xs: 'auto', md: 150,},transform: { xs: 'translateX(-50%)', md: 'none' }}}>
                <Typography variant='h2' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: { xs: 400, md: 500, lg: 500 }, color: '#0b2b26', textAlign: 'center' }}>
                    For Every Plant Parent
                </Typography>
                <Typography variant='h6' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: { xs: 500, md: 600, lg: 700 }, color: '#132018', textAlign: 'start', ml: 1}}>
                    Nurture. Grow. Thrive.
                </Typography>
                <Typography variant='h6' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: { xs: 500, md: 600, lg: 700 }, color: '#132018', textAlign: 'start', mt: -1, ml: 1}}>
                  `````````````````````````````````````````````` <FaLeaf style={{marginTop: '-17px'}}/>
                </Typography>
                <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '400', color: '#DAF1DE', textAlign: 'start', mx: 1 }}>
                    Whether you're a beginner or a seasoned plant
                    enthusiast, Verdura provides everything you
                    need to grow, care for, and enjoy your green
                    space with confidence.
                </Typography>
            </Box>
        </div>
    )
}

export default LandingPage