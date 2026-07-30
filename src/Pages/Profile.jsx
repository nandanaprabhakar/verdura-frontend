import React from 'react'
import Header from '../Components/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { Box, Typography, Divider, Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
function Profile() {
    return (
        <div>
            <section className='pb-4' style={{ backgroundColor: '#051F20' }}>
                <Header />
                <Container className='text-center pt-5 mb-4'>
                    <Row>
                        <Col xs={12} md={6} className='mt-5'>
                            <div className='d-flex justify-content-around align-items-center text-start'>
                                <Avatar src="/broken-image.jpg" sx={{ height: 200, width: 200 }} />
                                <Box>
                                    <Typography variant='h5' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#DAF1DE' }}>
                                        Hello, Nandana !
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', mb: 2 }}>
                                        Plant lover & nature enthusiast.
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', mb: 2 }}>
                                        nand097@gmail.com
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', mb: 2 }}>
                                        nand097@gmail.com<br/>nand097@gmail.com
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', mb: 2 }}>
                                        +91 9786031127
                                    </Typography>
                                    <Button variant='outlined' sx={{ borderColor: '#8EB69B', color: '#8EB69B', pt: 1 }} onClick={() => setHide(true)}>Step Inside</Button>
                                </Box>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='d-flex align-items-center mt-5'>
                            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
                                <Box>
                                    <FavoriteRoundedIcon sx={{ color: '#DAF1DE' }} />
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', textAlign: 'center', mb: 2 }}>
                                        8
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', textAlign: 'center', mb: 2 }}>
                                        Wishlist
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "#DAF1DE", height: 80 }}/>
                                <Box>
                                    <FavoriteRoundedIcon sx={{ color: '#DAF1DE' }} />
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', textAlign: 'center', mb: 2 }}>
                                        8
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', textAlign: 'center', mb: 2 }}>
                                        Wishlist
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" variant="middle" sx={{ bgcolor: "#DAF1DE", height: 80 }} />
                                <Box>
                                    <FavoriteRoundedIcon sx={{ color: '#DAF1DE' }} />
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', textAlign: 'center', mb: 2 }}>
                                        8
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', textAlign: 'center', mb: 2 }}>
                                        Wishlist
                                    </Typography>
                                </Box>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container className='text-center pt-5 mb-4'>
                    <Row>
                        <Col xs={12} md={6} className='mt-1'>
                         <Box sx={{ backgroundColor: '#c3e3c9', borderRadius: '10px', pt: 3, }}>
                        <Typography variant='h5' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#051F20', textAlign: 'start', mb: 4, ml: 3 }}>
                                        Recent Order
                                    </Typography>
                            <div className='d-flex justify-content-around align-items-center text-start'>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/051/680/246/small/a-peace-lily-plant-in-a-white-pot-png.png" height={150} alt="" />
                                <Box>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Peace Lily Plant
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder #34654
                                    </Typography>
                                </Box>
                                  <Box>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder #34654
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        +91 9786031127
                                    </Typography>
                                </Box>
                            </div>
                             <div className='d-flex justify-content-around align-items-center text-start'>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/051/680/246/small/a-peace-lily-plant-in-a-white-pot-png.png" height={150} alt="" />
                                <Box>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Peace Lily Plant
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder #34654
                                    </Typography>
                                </Box>
                                  <Box>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder #34654
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        +91 9786031127
                                    </Typography>
                                </Box>
                            </div>
                            <div className='d-flex justify-content-around align-items-center text-start'>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/051/680/246/small/a-peace-lily-plant-in-a-white-pot-png.png" height={150} alt="" />
                                <Box>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Peace Lily Plant
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder #34654
                                    </Typography>
                                </Box>
                                  <Box>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder #34654
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        +91 9786031127
                                    </Typography>
                                </Box>
                            </div>
                            </Box>
                        </Col>
                         <Col xs={12} md={6} className='mt-1'>
                         <Box sx={{ backgroundColor: '#c3e3c9', borderRadius: '10px', pt: 3, }}>
                        <Typography variant='h5' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#051F20', textAlign: 'start', mb: 4, ml: 3 }}>
                                        Saved Items
                                    </Typography>
                            <div className='d-flex justify-content-around align-items-center text-start'>
                                <Box>
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/051/680/246/small/a-peace-lily-plant-in-a-white-pot-png.png" height={150} alt="" />
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Peace Lily Plant
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder #34654
                                    </Typography>
                                </Box>
                                  <Box>
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/051/680/246/small/a-peace-lily-plant-in-a-white-pot-png.png" height={150} alt="" />
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder #34654
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        +91 9786031127
                                    </Typography>
                                </Box>
                            </div>
                             <div className='d-flex justify-content-around align-items-center text-start'>
                                <Box>
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/051/680/246/small/a-peace-lily-plant-in-a-white-pot-png.png" height={150} alt="" />
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Peace Lily Plant
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder #34654
                                    </Typography>
                                </Box>
                                  <Box>
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/051/680/246/small/a-peace-lily-plant-in-a-white-pot-png.png" height={150} alt="" />
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder #34654
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        +91 9786031127
                                    </Typography>
                                </Box>
                            </div>
                            </Box>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Profile