import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Box, Divider, Typography, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { GiWateringCan } from "react-icons/gi";
import { PiSunLight } from "react-icons/pi";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StarIcon from '@mui/icons-material/Star';
import Paper from '@mui/material/Paper';
import Header from '../Components/Header';
import { addReviewAPI, viewPlantAPI } from '../services/allApIs';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import WestSharpIcon from '@mui/icons-material/WestSharp';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import Footer from '../Components/Footer';
import Reviews from '../Components/Reviews';
import Favorites from '../Components/Favorites';

function PlantDetails() {

    const [token, setToken] = useState('');
    const [plant, setPlant] = useState({});

    const params = useParams();
    const { id } = params;
    console.log(id);

    const viewPlant = async () => {
        const reqHeader = {
            Authorization: `Bearer ${token}`
        }
        try {
            const response = await viewPlantAPI(id, reqHeader);
            console.log(response);
            setPlant(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        viewPlant();
    }, [token])
    useEffect(() => {
        setToken(sessionStorage.getItem('token'));
    }, [])





    const [image, setImage] = useState(1)

    const [count, setCount] = useState(0)
    const Increment = () => {
        setCount(count + 1)
        console.log(count);
    }

    const Decrement = () => {
        if (count > 0) {
        setCount(count - 1);
    }
    }


    //review
        const [open, setOpen] = useState(false);
        const onClose = () => setOpen(false);
    
        const [reviewPage, setReviewPage] = useState(0);
        const [formData, setFormData] = useState({ productName: '', review: '', rating: 0 });
        const handleReview = async () => {
            try {
                const reqHeader = {
                    Authorization: `Bearer ${token}`
                };
                const response = await addReviewAPI(formData, reqHeader);
                console.log(response);
                if (response.status == 200) {
                    setReviewPage(2);
                    // setTimeout(() => {
                       setOpen(false); 
                    // }, 1000)
                }
            }
            catch (err) {
                console.log(err);
    
            }
        }
    return (
        <div>
            <Header color='#051F20' />
            <Container className='mt-5'>
                <Row className='d-flex justify-content-center mb-5'>
                    <Favorites item={plant} token={token} productType="plant"/>
                    <Col className="d-flex flex-column align-items-center pb-3 pt-4">
                        {plant?.images?.length > 0 && (
                            <img className="main-img" src={plant.images[image - 1]} style={{ borderRadius: '10px', width: '100%', maxWidth: '500px', height: '450px', objectFit: 'cover' }} alt={plant?.name} />)}

                        <div className="d-flex mt-4 gap-3 flex-wrap justify-content-center">
                            {plant?.images?.map((img, index) => (
                                <img key={index} className={image === index + 1 ? 'image-active' : 'image'} onClick={() => setImage(index + 1)} src={img} style={{ borderRadius: '10px', width: '70px', height: '70px', objectFit: 'cover', cursor: 'pointer' }} />))}
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <Box>
                            <Typography variant='h2' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '700', fontSize: { xs: '36px', sm: '44px', md: '52px', }, color: '#051F20' }}>
                                {plant?.name}
                            </Typography>
                            <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', fontSize: { xs: '22px', sm: '26px', md: '30px', }, color: '#235347', mb: 1 }}>
                                {plant?.subtitle}
                            </Typography>

                            {/* <Typography variant='h5' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347' }}>
                                Stunning air-purifying plant
                            </Typography> */}
                            <div className='d-flex gap-3 align-items-center'>
                                <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontSize: { xs: '17px', sm: '19px', md: '20px', }, color: '#235347' }}>
                                    ₹ {plant?.price?.current}
                                </Typography>
                                <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: { xs: '14px', sm: '16px', md: '20px', }, color: '#235347', textDecoration: 'line-through', opacity: '0.4' }}>
                                    ₹ {plant?.price?.original}
                                </Typography>
                                <Typography variant='h6' sx={{ fontFamily: '"Inter", sans-serif', fontSize: { xs: '14px', sm: '16px', md: '20px', }, color: '#235347', backgroundColor: '#8EB69B', px: 2, borderRadius: '20px' }}>
                                    {plant?.price?.discount}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', fontSize: { xs: '25px', sm: '28px', md: '30px', }, color: '#235347', mt: 1 }}>
                                    Select Size
                                </Typography>
                                <div className='d-flex gap-3 mb-3'>
                                    {plant?.sizes?.map((item, index) => (
                                        <Box sx={{ backgroundColor: '#051F20', height: {xs: '75px', sm: '85px', md: '90px'}, width: '129px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                                            <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#DAF1DE' }}>
                                                {item.name}<br />₹ {item.price}
                                            </Typography>
                                        </Box>))}

                                </div>
                            </div>
                            <div className='mb-3'>
                                <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347' }}>
                                    How to guide
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#235347' }}>
                                    {plant?.guide?.description}
                                </Typography>
                            </div>
                            <Box sx={{ backgroundColor: '#8EB69B', display: 'flex', justifyContent: 'space-around', borderRadius: '10px', py: 3 }}>
                                {/* <div className='d-flex'> */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'end', border: '1px solid #235347', color: '#DAF1DE', width: '40%', borderRadius: '80px' }}>
                                    <p><RemoveIcon onClick={Decrement} style={{ fontSize: '30px' }} /></p>
                                    <p className='my-2' style={{ fontSize: '30px' }}>{count}</p>
                                    <p><AddIcon onClick={Increment} style={{ fontSize: '30px' }} /></p>
                                </Box>
                                {/* </div> */}
                                <Box sx={{ width: '2px', height: '60px', bgcolor: '#235347' }} />
                                <Button variant='contained' sx={{ display: 'flex', backgroundColor: '#235347', color: '#DAF1DE', width: '40%', borderRadius: '30px' }}>
                                    Order now
                                </Button>
                            </Box>
                        </Box>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center gy-5'>
                    <Col xs={12} md={6} >
                        <Box>
                            <TableContainer component={Paper}>
                                <Table sx={{ maxWidth: 800, mx: "auto", backgroundColor: '#DAF1DE' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ backgroundColor: '#c6dbca' }}>Name</TableCell>
                                            <TableCell >{plant?.name}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Category
                                            </TableCell>
                                            <TableCell>	{plant?.productDetails?.category}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Country of Origin</TableCell>
                                            <TableCell>{plant?.productDetails?.countryOfOrigin}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">MRP</TableCell>
                                            <TableCell>{plant?.productDetails?.mrp} (Incl. of all taxes)</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Net Quantity</TableCell>
                                            <TableCell>{plant?.productDetails?.netQuantity}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Manufactured by</TableCell>
                                            <TableCell>Ugaoo Agritech Pvt Ltd, Plot No. 90, Floriculture Park, Ambi, MIDC, Talegaon Dabhade, Maharashtra 410507</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Customer Support</TableCell>
                                            <TableCell>Email :  {plant?.productDetails?.customerSupport?.email}<br />Call: {plant?.productDetails?.customerSupport?.phone}</TableCell>
                                        </TableRow>
                                         <TableRow>
                                            <TableCell component="th" scope="row">Rating</TableCell>
                                            <TableCell>{plant?.rating?.value} <StarIcon/></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='main-img pt-3' style={{ position: 'relative' }}>
                            {/* <img className='main-img' style={{ borderRadius: '10px', position: 'relative' }} src="https://www.ugaoo.com/cdn/shop/files/A_image_11_37da353e-2353-42a8-af30-66d54a26f8e1.jpg?v=1778241492&width=1000" height={550} alt="" /> */}
                            <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '25px', color: '#235347', mb: 1, ml: 4 }}>
                                {plant?.wateringGuide?.title}
                            </Typography>
                            <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347', mb: 1, ml: 4 }}>
                                {plant?.wateringGuide?.subtitle}
                            </Typography>
                            <Box sx={{ position: 'absolute', bottom: 10 }}>
                                <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '19px', color: '#DAF1DE', mb: 1, ml: 4 }}>
                                    {plant?.wateringGuide?.instruction}
                                </Typography>
                                <ul >
                                    {plant?.wateringGuide?.tips?.map((tip) => (
                                        <li style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', color: '#DAF1DE' }}>{tip}</li>))}
                                </ul>
                            </Box>
                        </div>
                    </Col>
                </Row>
            </Container>
              <Container className='mt-4'>
                <Row className='d-flex justify-content-center mb-5'>
                    <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', fontSize: { xs: '25px', sm: '28px', md: '30px', }, color: '#235347', textAlign: 'center' }}>
                        Ratings & Reviews
                    </Typography>
                    <Button variant="contained" onClick={() => { setFormData({ productName: plant?.name, review: '', rating: 0 }); setReviewPage(0); setOpen(true); }} sx={{ width: '250px', py: 1, mt: 2, backgroundColor: '#235347', color: '#DAF1DE', borderRadius: '30px' }}>Share Review & Rating</Button>
                </Row>
            </Container>
  <Reviews productName={plant?.name}/>
              <Dialog onClose={onClose} open={open} maxWidth="sm" fullWidth >
                <DialogTitle sx={{ textAlign: 'center', fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '1.5rem', color: '#051F20' }}>{reviewPage == 0 ? 'How would you rate this product?' : reviewPage == 1 ? plant?.name : 'Review Added Successfully!'}</DialogTitle>
                <DialogContent sx={{ mt: -1 }}>
                    {reviewPage == 0 ? (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, color: '#235347', textAlign: 'center' }}>We would love it if you would share a bit about your experience.</Typography>
                        <img src={plant?.images?.[0]} style={{ borderRadius: '10px', width: '100%', maxWidth: '500px', height: '400px', objectFit: 'cover' }} alt={plant?.name} />
                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, color: '#235347', textAlign: 'center' }}>{plant?.name}</Typography>
                        <Rating value={formData.rating} onChange={(event, newValue) => {
                            setFormData({ ...formData, rating: newValue }); if (newValue > 0) {
                                setReviewPage(1);
                            }
                        }} size="large" sx={{ color: '#235347', borderColor: '#235347', fontSize: '60px' }} />
                    </Box>) : reviewPage == 1 ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Rating value={formData.rating} readOnly onChange={(event, newValue) => { setFormData({ ...formData, rating: newValue }); }} size="large" sx={{ color: '#235347', borderColor: '#235347', fontSize: '60px' }} />
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, color: '#235347', textAlign: 'left', width: '100%', }}>Review content (Required)</Typography>
                            <TextField variant="outlined" value={formData.review} onChange={(e) => setFormData({ ...formData, review: e.target.value })} multiline minRows={4} fullWidth />
                            <div className='d-flex justify-content-between w-100'>
                                <Button variant="text" onClick={() => setReviewPage(0)} sx={{ mt: 3, py: 1, color: '#051F20' }}><WestSharpIcon />Previous</Button>
                                <Button variant="contained" onClick={handleReview} sx={{ mt: 3, py: 1, backgroundColor: '#051F20', '&:hover': { backgroundColor: '#235347' } }}>Submit Review</Button>
                            </div>
                        </Box>) : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ width: '55px', height: '55px', borderRadius: '50%', backgroundColor: '#DAF1DE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: '25px' }}>
                                <DoneSharpIcon sx={{ color: '#051F20' }} />
                            </Box>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, color: '#235347', textAlign: 'center', width: '100%', }}>Thank you for sharing your experience!</Typography>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, color: '#235347', textAlign: 'center', width: '90%', }}>We appreciate you taking the time to share your experience. Your feedback will help others make better choices.</Typography>
                        </Box>
                    )}
                </DialogContent>
            </Dialog>
            <Footer/>
        </div>
    )
}

export default PlantDetails