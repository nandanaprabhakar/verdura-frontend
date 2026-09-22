import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getHomePlantAPI } from '../services/allApIs';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Components/Footer';

function HomePage() {

    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(sessionStorage.getItem('token'));
    }, [])
    console.log(token);
    const [hide, setHide] = useState(false);

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
    
     const [plants, setPlants] = useState();
        const getHomePlant = async()=>{
            const reqHeader = {
                Authorization: `Bearer ${token}`
            }
            try{
                const response = await getHomePlantAPI(reqHeader);
                console.log(response);
                setPlants(response.data);
            }
            catch(err){
                console.log(err);
                
            }
        }
        useEffect(()=>{
            getHomePlant();
        },[token])
 
    return (
        <div>

            <section className='home-banner  mt:5'>
                <Header />
                <Box sx={{ width: { xs: '80%', md: '590px' }, position: 'absolute', top: 67, left: '50%', transform: 'translate(-50%)' }}>
                    <Typography variant='h2' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '700', color: '#051F20' }}>
                        VERDURA BOTANICS
                    </Typography>
                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '500', color: '#DAF1DE', textAlign: 'center' }}>
                        Elevate your home with timeless greenery,
                        premium planters, and botanical pieces that
                        bring calm, beauty, and life to every space.
                    </Typography>
                </Box>
                <Box sx={{ position: 'absolute', bottom: 1, left: '50%', transform: 'translate(-50%)' }}>
                    <Button variant='outlined' sx={{ borderColor: '#8EB69B', color: '#8EB69B', pt: 1 }} onClick={() => token ? setHide(true) : handleClickOpen()}>Step Inside</Button>
                </Box>
            </section>
            {hide ? <div>
                <Container className='text-center my-4 c h-auto'>
                    <Typography variant='h3' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#051F20' }}>
                        Why shop with Verdura?
                    </Typography>
                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#235347', textAlign: 'center', mb: 2 }}>
                        Everything you need to create, nurture, and enjoy a flourishing green sanctuary at home.
                    </Typography>
                    <Row className='d-flex justify-content-center align-items-start g-3 mb-3'>
                        <Col xs={12} md={6} className='card1 text-start d-flex justify-content-center justify-content-md-end align-items-start'>
                            <Box sx={{
                                width: '460px', background: 'rgba(255, 255, 255, 0.08)',
                                // backdropFilter: 'blur(0px)',
                                WebkitBackdropFilter: 'blur(15px)', border: '1px solid #8EB69B', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', borderRadius: '10px', p: 1
                            }}>
                                <h4><b>1.Premium Quality Plants</b></h4>
                                <p>Carefully sourced plants that bring freshness and beauty to your home.</p>
                            </Box>
                        </Col>
                        <Col xs={12} md={6} className='text-start d-flex justify-content-center justify-content-md-start'>
                            <Box sx={{
                                width: '460px', background: 'rgba(255, 255, 255, 0.08)',
                                // backdropFilter: 'blur(0px)',
                                WebkitBackdropFilter: 'blur(15px)', border: '1px solid #8EB69B', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', borderRadius: '10px', p: 1
                            }}>
                                <h4><b>2.Stylish Pots & Accessories</b></h4>
                                <p>Elegant planters and gardening essentials designed for every interior.</p>
                            </Box>
                        </Col>
                    </Row>
                    <Row className='g-3 d-flex justify-content-center align-items-end pt-mt-5 mt-md-5'>
                        <Col xs={12} md={6} className='text-start d-flex justify-content-center justify-content-md-end mt-md-5'>
                            <Box sx={{
                                width: '460px', background: 'rgba(255, 255, 255, 0.08)',
                                // backdropFilter: 'blur(0px)',
                                WebkitBackdropFilter: 'blur(15px)', border: '1px solid #8EB69B', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', borderRadius: '10px', p: 1
                            }}>
                                <h4><b>3.Expert Growing Guidance</b></h4>
                                <p>Helpful care tips and recommendations for healthy plant growth.</p>
                            </Box>
                        </Col>
                        <Col xs={12} md={6} className='text-start d-flex justify-content-center justify-content-md-start mt-md-'>
                            <Box sx={{
                                width: '460px', background: 'rgba(255, 255, 255, 0.08)',
                                // backdropFilter: 'blur(0px)',
                                WebkitBackdropFilter: 'blur(15px)', border: '1px solid #8EB69B', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', borderRadius: '10px', p: 1
                            }}>
                                <h4><b>4.Safe & Reliable Delivery</b></h4>
                                <p>Plants and products delivered with care directly to your doorstep.</p>
                            </Box>
                        </Col>
                    </Row>
                </Container>
                <section className='testimonial-banner text-center my-4'>
                    <Container className='pb-4'>
                        <Typography variant='h3' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#8EB69B' }}>
                            What our customers say
                        </Typography>
                        <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#8EB69B', textAlign: 'center', mb: 2 }}>
                            Hear from our happy customers who love our fresh and healthy plants delivered right to their homes.
                        </Typography>
                        <Row className="align-items-center g-3 mb-3">
                            <Col xs={12} md={6}>
                                <Card className="d-flex flex-row" style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(15px)',
                                }}>

                                    <Card.Img
                                        style={{ width: '30%', objectFit: 'cover' }}
                                        src="https://static.vecteezy.com/system/resources/thumbnails/055/496/891/small/a-woman-holding-a-potted-plant-free-png.png"
                                    />

                                    <Card.Body>
                                        <Card.Title className="text-start" style={{ color: '#8EB69B' }}>
                                            Emily Johnson
                                        </Card.Title>

                                        <Card.Text className="text-start">
                                            ⭐⭐⭐⭐⭐
                                        </Card.Text>

                                        <Card.Text className="text-start" style={{ color: '#8EB69B' }}>
                                            <span style={{ fontSize: '30px' }}>"</span>
                                            The ordering process was super easy and delivery was fast.
                                            The plant I received looks even better than the photos!
                                            <span style={{ fontSize: '30px' }}>"</span>
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            </Col>
                            <Col xs={12} md={6}>
                                <Card className="d-flex flex-row" style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(15px)',
                                }}>

                                    <Card.Img
                                        style={{ width: '30%', objectFit: 'cover' }}
                                        src="https://static.vecteezy.com/system/resources/thumbnails/055/496/891/small/a-woman-holding-a-potted-plant-free-png.png"
                                    />

                                    <Card.Body>
                                        <Card.Title className="text-start" style={{ color: '#8EB69B' }}>
                                            Daniel Smith
                                        </Card.Title>
                                        <Card.Text className="text-start">
                                            ⭐⭐⭐⭐⯨
                                        </Card.Text>
                                        <Card.Text className="text-start" style={{ color: '#8EB69B' }}>
                                            <span style={{ fontSize: '30px' }}>"</span>
                                            Absolutely love the quality of plants! They arrived fresh and healthy.
                                            My home feels so much more alive now.
                                            <span style={{ fontSize: '30px' }}>"</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="align-items-center g-3">

                            <Col xs={12} md={6}>
                                <Card className="d-flex flex-row" style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(15px)',
                                }}>
                                    <Card.Img
                                        style={{ width: '30%', objectFit: 'cover' }}
                                        src="https://static.vecteezy.com/system/resources/thumbnails/055/496/891/small/a-woman-holding-a-potted-plant-free-png.png"
                                    />
                                    <Card.Body>
                                        <Card.Title className="text-start" style={{ color: '#8EB69B' }}>
                                            Emily Johnson
                                        </Card.Title>
                                        <Card.Text className="text-start">
                                            ⭐⭐⭐⭐⭐
                                        </Card.Text>
                                        <Card.Text className="text-start" style={{ color: '#8EB69B' }}>
                                            <span style={{ fontSize: '30px' }}>"</span>
                                            The ordering process was super easy and delivery was fast.
                                            The plant I received looks even better than the photos!
                                            <span style={{ fontSize: '30px' }}>"</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={6}>
                                <Card className="d-flex flex-row" style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(15px)',
                                }}>
                                    <Card.Img
                                        style={{ width: '30%', objectFit: 'cover' }}
                                        src="https://static.vecteezy.com/system/resources/thumbnails/055/496/891/small/a-woman-holding-a-potted-plant-free-png.png"
                                    />
                                    <Card.Body>
                                        <Card.Title className="text-start" style={{ color: '#8EB69B' }}>
                                            Daniel Smith
                                        </Card.Title>
                                        <Card.Text className="text-start">
                                            ⭐⭐⭐⭐⯨
                                        </Card.Text>
                                        <Card.Text className="text-start" style={{ color: '#8EB69B' }}>
                                            <span style={{ fontSize: '30px' }}>"</span>
                                            Absolutely love the quality of plants! They arrived fresh and healthy.
                                            My home feels so much more alive now.
                                            <span style={{ fontSize: '30px' }}>"</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Container className='text-center my-4'>
                    <Typography variant='h3' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#051F20' }}>
                        Find your perfect plant
                    </Typography>
                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#235347', textAlign: 'center', mb: 2 }}>
                        Browse our featured products and find everything you need to create a vibrant green sanctuary at home.
                    </Typography>
                    <Row className='d-flex justify-content-between mb-3 gy-3'>
                       { plants.map(item=>( <Col className='d-flex justify-content-center'>
                       <Link to={`/plant-details/${item?._id}`}>
                            <Box className='home-card1' sx={{ width: '390px', backgroundColor: '#163832', backgroundImage: `url(${item?.cardImage})`,borderRadius: '7px', position: 'relative' }}>
                                <Box sx={{ color: '#8EB69B', position: 'absolute', bottom: 2, left: '50%', transform: 'translate(-50%)' }}>
                                    <h5>{item?.name}</h5>
                                </Box>
                            </Box>
                            </Link>
                        </Col>))}
                       
                    </Row>
                </Container>
 <Footer/>

                {/* <section
                    style={{ background: "#051F20", height: 'auto' }}>
                    <Container>
                        <Row className="gx-2 gy-4  justify-content-center">
                            <Col xs={12} md={4}>
                                <Card
                                    style={{
                                        height: "220px",
                                        background: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(12px)",
                                        border: "none",
                                        color: "#DAF1DE",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <Card.Body>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            We believe every space deserves the beauty of nature. Our mission is to bring vibrant greenery into homes and workplaces through healthy, carefully nurtured plants. With a passion for quality and sustainability, we create greener environments that inspire happiness, comfort, and a closer connection to nature every day.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card
                                    style={{
                                        height: "170px",
                                        marginTop: "0px", // lower than first
                                        background: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(12px)",
                                        border: "none",
                                        color: "#DAF1DE",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <Card.Body>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            Every plant is handpicked and grown with exceptional care before reaching your doorstep. We ensure each one is healthy, vibrant, and ready to thrive, making it easier for you to enjoy nature with complete confidence and without worry.                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card
                                    style={{
                                        height: "210px",
                                        marginTop: "0px",
                                        background: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(12px)",
                                        border: "none",
                                        color: "#DAF1DE",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <Card.Body>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            We are committed to promoting sustainable gardening by offering eco-friendly products and responsible growing practices. From reducing waste to encouraging greener lifestyles, every step we take supports a healthier planet while helping our customers create beautiful living spaces filled with nature.                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="gx-2 gy-4  justify-content-center mt-1">
                            <Col xs={12} md={4}>
                                <Card className='about-card1'
                                    style={{
                                        // width: '65%',
                                        height: "140px",
                                        // marginTop: {xs: '0px',sm: '0px', md:"-40px",lg: 'auto'},
                                        background: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(12px)",
                                        border: "none",
                                        color: "#DAF1DE",
                                        borderRadius: "20px",
                                    }}>
                                    <Card.Body>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            Our experienced team provides expert guidance and practical care tips to help you choose the perfect plants and keep them healthy throughout every season.                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className='about-card2'
                                    style={{
                                        // width: '65%',
                                        height: "190px",
                                        background: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(12px)",
                                        border: "none",
                                        color: "#DAF1DE",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <Card.Body>
                                        <Card.Text className='text-justify'>
                                            From elegant indoor plants to decorative planters and essential gardening accessories, we offer thoughtfully selected products that combine beauty, quality, and functionality. Everything is designed to help you create a relaxing and refreshing green space with ease.                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className='about-card3'
                                    style={{
                                        height: "170px",
                                        background: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(12px)",
                                        border: "none",
                                        color: "#DAF1DE",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <Card.Body>
                                        <Card.Text className='text-justify'>
                                            We value every customer and strive to deliver a seamless shopping experience. From placing your order to receiving your plants, our focus is on exceptional quality, reliability, and complete satisfaction.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                        <Row className="gx-2 gy-4 justify-content-center mt-1 pb-4">
                            <Col xs={12} md={4}>
                                <Card className='about-card4'
                                    style={{
                                        // width: '65%',
                                        height: "140px",
                                        // marginTop: {xs: '0px',sm: '0px', md:"-40px",lg: 'auto'},
                                        background: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(12px)",
                                        border: "none",
                                        color: "#DAF1DE",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <Card.Body>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            Whether you're a beginner or an experienced gardener, we make plant care simple with trusted advice, quality products, and ongoing support whenever you need it.                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className='about-card5'
                                    style={{
                                        // width: '65%',
                                        height: "140px",
                                        background: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(12px)",
                                        border: "none",
                                        color: "#DAF1DE",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <Card.Body>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            Our collection is carefully curated to include premium plants, stylish planters, and gardening essentials that enhance the beauty of every indoor and outdoor space.                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={4}>
                                <Card className='about-card6'
                                    style={{
                                        height: "120px",
                                        background: "rgba(255,255,255,0.08)",
                                        backdropFilter: "blur(12px)",
                                        border: "none",
                                        color: "#DAF1DE",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <Card.Body>
                                        <Card.Text style={{ textAlign: 'justify' }}>
                                            Together, let's grow greener spaces and create a healthier, happier future—one beautiful plant at a time.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section> */}
            </div> : ''}
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
        </div>
    )
}

export default HomePage