import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Components/Header';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import card from '../assets/plantCard-bg.png'
import StarIcon from '@mui/icons-material/Star';
import { Link, useSearchParams } from 'react-router-dom';
import { getAllPlantAPI } from '../services/allApIs';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Components/Footer';

function Plants() {
    const [token, setToken] = useState('');
    const [plants, setPlants] = useState();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    console.log(type);

    const getAllPlant = async () => {
        const reqHeader = {
            Authorization: `Bearer ${token}`
        }
        try {
            const response = await getAllPlantAPI(type, reqHeader);
            console.log(response);
            setPlants(response.data);
        }
        catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        getAllPlant();
    }, [token, type])
    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
    }, [])
    return (
        <div>
            <section className='plant-banner text-center mb-5'>
                <Header />
                <Box sx={{ width: { xs: '80%', md: '590px' }, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Typography variant='h2' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '700', fontSize: { xs: '44px', sx: '64px', md: '64px' }, color: '#235347' }}>
                        OUR COLLECTIONS
                    </Typography>
                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '500', color: '#DAF1DE', textAlign: 'center' }}>
                        Discover a wide variety of lush indoor and outdoor plants, selected to create greener, healthier, and more vibrant living spaces.
                    </Typography>
                    {/* <Button variant='outlined' sx={{ borderColor: '#8EB69B', color: '#8EB69B', pt: 1 }} onClick={() => setHide(true)}>Step Inside</Button> */}
                </Box>
            </section>
            <Container className='pt-4'>
                <Row>
                    {plants ? plants.map(item => (
                        <Col className='mb-4' xs={12} sm={6} md={4} lg={3}>
                            <Link style={{ textDecoration: 'none' }} to={`/plant-details/${item?._id}`}>
                                <Card className='plant-div' sx={{ maxWidth: 345, height: 375, backgroundImage: `url(${card})`, backgroundSize: 'cover', backgroundPositionY: 'bottom', boxShadow: '0 29px 29px rgb(55, 55, 55)' }}>
                                    <CardHeader sx={{ color: '#051F20' }}
                                        action={<p className='p-1' style={{ background: 'rgba(255, 255, 255, 0.08)', WebkitBackdropFilter: 'blur(15px)', backdropFilter: 'blur(15px)', borderRadius: '6px', boxShadow: '0 5px 16px rgba(0, 0, 0, 15)', fontSize: '15px' }}>{item?.rating?.value} <StarIcon sx={{ fontSize: '15px' }} />|{item?.rating?.count}</p>} />
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={item?.cardImage}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className='d-flex justify-content-between py-2'>
                                            <p className='p' style={{ color: '#DAF1DE' }}>{item?.name}</p>
                                            <p className='p' style={{ color: '#DAF1DE' }}>₹ {item?.price?.current}</p>
                                        </div>
                                    </CardContent>
                                    <CardActions disableSpacing>


                                    </CardActions>

                                </Card>
                            </Link>
                        </Col>
                    )) : 'error'}
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Plants