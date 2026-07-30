import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='pnf-banner d-flex justify-content-center align-items-top'>
            <Box sx={{ position: 'relative' }}>
                <Typography variant='h1' sx={{ fontFamily: '"Cormorant Garamond", serif', color: '#051F20', fontSize: { xs: "6rem", sm: "8rem", md: 500, }, textAlign: 'center' }}>404</Typography>
                <Typography variant='h2' sx={{ fontFamily: '"Cormorant Garamond", serif', color: '#051F20', textAlign: 'center' }}>This page has wandered off</Typography>
                <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: '#235347', textAlign: 'center', mb: 2 }}>
                    The path you were looking for has been taken over by new growth.<br />Try returning to our garden below.
                </Typography>
                <Link to={'/'} style={{}}>
                    <Button variant="contained" sx={{ backgroundColor: '#235347', borderRadius: '40px', py: 2, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>Return To The Garden</Button>
                </Link>
            </Box>
        </div>
    )
}

export default PageNotFound