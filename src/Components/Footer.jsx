import { Box, Button, Divider, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

function Footer({ color = '#D5DED4', backgroundColor = '#031F18' }) {
    return (
        <div style={{ backgroundColor }}>
            <Container className='pt-3 mt-4'>
                <Row className='mb-5'>
                    <Col>
                        <Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}><SpaOutlinedIcon sx={{ color, fontSize: 40 }} /></Box>
                            <Typography sx={{ textAlign: 'center', fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', letterSpacing: '4px', fontWeight: 500, color }}>VERDURA</Typography>
                            <Typography sx={{ textAlign: 'center', fontFamily: '"Cormorant Garamond", serif', fontSize: '15', letterSpacing: '4px', fontWeight: 500, mt: -2, mb: 2, color }}>BOTANICS</Typography>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', lineHeight: 1.8, color, mb: 3, textAlign: 'center' }}>
                                Bringing timeless greenery, premium planters, and <br />botanical beauty into your everyday spaces. <br />Cultivating calm, one space at a time.
                            </Typography>
                            <Box sx={{ border: `1px solid ${color}`, width: '250px', mt: -3, mx: 'auto' }} />
                        </Box>
                    </Col>
                    <Col className='text-center'>
                        <Box>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 600, letterSpacing: '1px', color, mb: 3 }} >EXPLORE VERDURA</Typography>
                            <Box>
                                <Link to={'/home'} style={{ color, textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: '16px', color, mb: 2 }}>Home</Typography>
                                </Link>
                                <Link to={'/blogs'} style={{ color, textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: '16px', color, mb: 2 }}>Botanical Blog</Typography>
                                </Link>
                                <Link to={'/plants'} style={{ color, textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: '16px', color, mb: 2 }}>Plant Collection</Typography>
                                </Link>
                                <Link to={'/pots'} style={{ color, textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: '16px', color, mb: 2 }}>Pots & Planters</Typography>
                                </Link>
                                <Link to={'/pot'} style={{ color, textDecoration: 'none' }}>
                                    <Typography sx={{ fontSize: '16px', color }}>Seed Collection</Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Box>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 600, color, mb: 3, textAlign: 'center' }}>STAY GREEN </Typography>
                            <Typography sx={{ color, fontSize: '14px', mb: 2, textAlign: 'center' }}>
                                Subscribe for plant care tips,
                                new arrivals <br /> and botanical inspiration.
                            </Typography>
                            <Box>
                                <Typography sx={{ color, fontSize: '13px', my: 3, letterSpacing: '1px', textAlign: 'center' }}>FOLLOW US</Typography>
                                <div className='d-flex justify-content-evenly mb-3'>
                                    <a href="mailto:hello@verdurabotanics.com" target="_blank" rel="noreferrer">
                                        <Tooltip describeChild title="hello@verdurabotanics.com" placement="top-end" arrow>
                                            <EmailIcon sx={{ color, fontSize: 40, background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '100%', p: 1 }} />
                                        </Tooltip>
                                    </a>
                                    <a href="https://wa.me/895674223" target="_blank" rel="noreferrer">
                                        <Tooltip describeChild title="895674223" placement="top-end" arrow>
                                            <WhatsAppIcon sx={{ color, fontSize: 40, background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '100%', p: 1 }} />
                                        </Tooltip>
                                    </a>
                                    <a href='https://facebook.com/verdurabotanics' target='_blank' rel='norefrrer'>
                                        <Tooltip describeChild title="facebook.com/verdurabotanics" placement="top-end" arrow>
                                            <FacebookIcon sx={{ color, fontSize: 40, background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '100%', p: 1 }} />
                                        </Tooltip>
                                    </a>
                                    <a href="tel:+91895674223" target="_blank" rel="noreferrer">
                                        <Tooltip describeChild title="895674223" placement="top-end" arrow>
                                            <CallIcon sx={{ color, fontSize: 40, background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '100%', p: 1 }} />
                                        </Tooltip>
                                    </a>
                                </div>
                            </Box>
                        </Box>
                    </Col>
                </Row>
                <Divider sx={{ height: '1px', border: `2px solid ${color}` }} />
                <div className='d-flex justify-content-evenly my-3'>
                    <div className='d-flex align-items-center gap-2'>
                        <VerifiedUserOutlinedIcon sx={{ color, fontSize: 40 }} />
                        <p style={{ color, marginTop: '7px' }}>Secure Payments</p>
                    </div> <p style={{ color, marginTop: '7px' }}>|</p>
                    <div className='d-flex align-items-center gap-2'>
                        <SpaOutlinedIcon sx={{ color, fontSize: 40 }} />
                        <p style={{ color, marginTop: '7px' }}>100% Organic & Natural</p>
                    </div> <p style={{ color, marginTop: '7px' }}>|</p>
                    <div className='d-flex align-items-center gap-2'>
                        <WorkspacePremiumOutlinedIcon sx={{ color, fontSize: 40 }} />
                        <p style={{ color, marginTop: '7px' }}>Premium Quality</p>
                    </div><p style={{ color, marginTop: '7px' }}>|</p>
                    <div className='d-flex align-items-center gap-2'>
                        <HeadphonesOutlinedIcon sx={{ color, fontSize: 40 }} />
                        <p style={{ color, marginTop: '7px' }}>24/7 Plant Support</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center gap-2' style={{ color, fontSize: 'small' }}> © 2026 Verdura Botanics. All rights reserved. <p style={{ color }}>|</p> Privacy Policy <p style={{ color }} >|</p> Terms & Conditions
                </div>
            </Container>
        </div>
    )
}

export default Footer