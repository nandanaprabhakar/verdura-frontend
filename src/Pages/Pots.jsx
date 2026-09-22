import React, { useEffect, useState } from 'react'
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
import card from '../assets/potCard-bg.png'
import StarIcon from '@mui/icons-material/Star';
import { Link, useSearchParams } from 'react-router-dom';
import { getPotAPI } from '../services/allApIs';
import Footer from '../Components/Footer';

function Pots() {

    const [token, setToken] = useState('');
    const [pot, setPot] = useState([]);
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    console.log(type);
    
    const getPot =async()=>{
         const reqHeader = {
            Authorization: `Bearer ${token}`
        }
        try{
            const response = await getPotAPI(type, reqHeader);
            console.log(response);
            setPot(response.data || []);
            
        }
        catch(err){
            console.log(err);         
        }
    }
    useEffect(()=>{
        getPot();
    }, [token, type])
     useEffect(()=>{
        setToken(sessionStorage.getItem('token'));
    },[])

    return (
        <div>
            <section className='pot-banner text-center mb-5'>
                <Header color='#235347'/>
                <Box sx={{ width: { xs: '80%', md: '590px' }, position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Typography variant='h2' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '700', fontSize: { xs: '44px', sx: '64px', md: '64px' }, color: '#235347' }}>
                        OUR COLLECTIONS
                    </Typography>
                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '500', color: '#235347', textAlign: 'center' }}>
                        Discover a wide variety of beautifully crafted plant pots, designed to complement every space with timeless style, quality, and functionality.
                    </Typography>
                    {/* <Button variant='outlined' sx={{ borderColor: '#8EB69B', color: '#8EB69B', pt: 1 }} onClick={() => setHide(true)}>Step Inside</Button> */}
                </Box>
            </section>
            <Container className='pt-4'>
                <Row>
                    {pot.map((item) => (
                       <Col className='mb-5' xs={12} sm={6} md={4} lg={3}>
                        <Link style={{ textDecoration: 'none' }} to={`/pot-details/${item?._id}`}>
                            <Card className='pot-card' sx={{ maxWidth: 345, height: 375, backgroundImage: `url(${item?.cardImage})`, backgroundSize: 'cover', backgroundPositionY: 'bottom', boxShadow: '0 29px 29px rgb(55, 55, 55)' }}>
                                <CardHeader sx={{ color: '#051F20' }}
                                    action={<p className='p-1' style={{ background: 'rgba(255, 255, 255, 0.08)', WebkitBackdropFilter: 'blur(15px)', backdropFilter: 'blur(15px)', borderRadius: '6px', boxShadow: '0 5px 16px rgba(0, 0, 0, 15)', fontSize: '15px' }}>4.8 <StarIcon sx={{ fontSize: '15px' }} />|427</p>} />
                                <CardContent>
                                    <div className='d-flex justify-content-between py-2 pot-div'>
                                        <p className='p' style={{ color: '#051F20' }}>{item?.name?.split('-')[0]}</p>
                                        <p className='p' style={{ color: '#051F20' }}>₹ {item?.price?.current}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </Col>
                    ))}
                </Row>
            </Container>
            <Footer color='#031F18' backgroundColor='transparent'/>
        </div>
    )
}

export default Pots