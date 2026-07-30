import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Box, Divider, Typography, Button } from '@mui/material';
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
import Paper from '@mui/material/Paper';
import Header from '../Components/Header';

function PlantDetails() {
    const [image, setImage] = useState(1)

    const [count, setCount] = useState(0)
    const Increment = () => {
        setCount(count + 1)
        console.log(count);
    }

    const Decrement = () => {
        count > 0 ? setCount(count - 1) : count
    }
    return (
        <div>
            <Header color='#051F20'/>
            <Container className='mt-5'>
                <Row className='d-flex justify-content-center mb-5'>
                    <Col className='d-flex flex-column align-items-center pb-3 pt-4'>
                        {image == 1 && <img className='main-img' style={{ borderRadius: '10px', }} src="https://www.ugaoo.com/cdn/shop/files/A_image_11_37da353e-2353-42a8-af30-66d54a26f8e1.jpg?v=1778241492&width=1000" height={450} alt="" />}
                        {image == 2 && <img className='main-img' style={{ borderRadius: '10px' }} src="https://www.ugaoo.com/cdn/shop/files/Listing_Master_Peace_Lily_finalll-02.webp?v=1781762357&width=1000" height={450} alt="" />}
                        {image == 3 && <img className='main-img' style={{ borderRadius: '10px' }} src="https://www.ugaoo.com/cdn/shop/files/Listing_Master_Peace_Lily_finalll-04.webp?v=1781762396&width=1000" height={450} alt="" />}
                        {image == 4 && <img className='main-img' style={{ borderRadius: '10px' }} src="https://www.ugaoo.com/cdn/shop/files/Listing_Master_Peace_Lily_finalll-05.webp?v=1781762416&width=1000" height={450} alt="" />}
                        {image == 5 && <img className='main-img' style={{ borderRadius: '10px' }} src="https://www.ugaoo.com/cdn/shop/files/Listing_Master_Peace_Lily_finalll-07.webp?v=1781762444&width=1000" height={450} alt="" />}

                        <div className='d-flex mt-4 gap-3 ' >
                            <img className={image == 1 ? 'image-active' : 'image'} style={{ borderRadius: '10px' }} onClick={() => setImage(1)} src="https://www.ugaoo.com/cdn/shop/files/A_image_11_37da353e-2353-42a8-af30-66d54a26f8e1.jpg?v=1778241492&width=1000" height={70} alt="" />
                            <img className={image == 2 ? 'image-active' : 'image'} onClick={() => setImage(2)} src="https://www.ugaoo.com/cdn/shop/files/Listing_Master_Peace_Lily_finalll-02.webp?v=1781762357&width=1000" height={70} alt="" />
                            <img className={image == 3 ? 'image-active' : 'image'} onClick={() => setImage(3)} src="https://www.ugaoo.com/cdn/shop/files/Listing_Master_Peace_Lily_finalll-04.webp?v=1781762396&width=1000" height={70} alt="" />
                            <img className={image == 4 ? 'image-active' : 'image'} onClick={() => setImage(4)} src="https://www.ugaoo.com/cdn/shop/files/Listing_Master_Peace_Lily_finalll-05.webp?v=1781762416&width=1000" height={70} alt="" />
                            <img className={image == 5 ? 'image-active' : 'image'} onClick={() => setImage(5)} src="https://www.ugaoo.com/cdn/shop/files/Listing_Master_Peace_Lily_finalll-07.webp?v=1781762444&width=1000" height={70} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <Box>
                            <Typography variant='h2' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '700', color: '#051F20' }}>
                                Peace Lily Plant
                            </Typography>
                            <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347', mb: 1 }}>
                                Stunning air-purifying plant
                            </Typography>

                            {/* <Typography variant='h5' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347' }}>
                                Stunning air-purifying plant
                            </Typography> */}
                            <div className='d-flex gap-3 align-items-center'>
                                <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: '#235347' }}>
                                    ₹ 200
                                </Typography>
                                <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: '#235347', textDecoration: 'line-through', opacity: '0.4' }}>
                                    ₹ 500
                                </Typography>
                                <Typography variant='h6' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: '#235347', backgroundColor: '#8EB69B', px: 2, borderRadius: '20px' }}>
                                    31% off
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347', mt: 1 }}>
                                    Select Size
                                </Typography>
                                <div className='d-flex gap-3 mb-3'>
                                    <Box sx={{ backgroundColor: '#051F20', height: '90px', width: '129px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                                        <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#DAF1DE' }}>
                                            Small <br />₹299
                                        </Typography>
                                    </Box>
                                    <Box sx={{ backgroundColor: '#051F20', height: '90px', width: '129px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                                        <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#DAF1DE' }}>
                                            Medium <br />₹499
                                        </Typography>
                                    </Box>
                                    <Box sx={{ backgroundColor: '#051F20', height: '90px', width: '129px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                                        <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#DAF1DE' }}>
                                            Large <br />₹699
                                        </Typography>
                                    </Box>
                                </div>
                            </div>
                            <div className='mb-3'>
                                <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347' }}>
                                    How to guide
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#235347' }}>
                                    Use well-draining soil and keep it in a spot with soft, indirect light. Water when the leaves start to droop, and avoid letting it sit in water. Wipe the leaves occasionally to keep them clean and shiny. Feed with a liquid fertiliser once a month during spring and summer.
                                </Typography>
                            </div>
                            <Box sx={{ backgroundColor: '#8EB69B', display: 'flex', justifyContent: 'space-around', borderRadius: '10px', py: 3 }}>
                                {/* <div className='d-flex'> */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'end', border: '1px solid #235347', color: '#DAF1DE', width: '40%', borderRadius: '80px' }}>
                                    <p><RemoveIcon onClick={Increment} style={{ fontSize: '30px' }} /></p>
                                    <p className='my-2' style={{ fontSize: '30px' }}>{count}</p>
                                    <p><AddIcon onClick={Increment} style={{ fontSize: '30px' }} /></p>
                                </Box>
                                {/* </div> */}
                                <Box sx={{ width: '2px', height: '60px', bgcolor: '#235347' }} />
                                <Button variant='contained' sx={{ display: 'flex', backgroundColor: '#235347', color: '#DAF1DE', width: '40%', borderRadius: '30px' }}>
                                    Order now
                                </Button>
                            </Box>
                            {/* <Box sx={{backgroundColor: '#8EB69B', display: 'flex', justifyContent: 'space-around', borderRadius: '10px', py:3}}> 
                                 <div className='d-flex'>
                                    <GiWateringCan style={{ fontSize: '50px', color: '#235347', fontWeight: 'bolder' }}/>  
                                    <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', color: '#235347',lineHeight: 1 }}>
                              Water <br/><span style={{fontSize: '15px', }}>Twice a week</span>
                            </Typography>
                                </div>
                               <Box sx={{ width: '2px', height: '60px', bgcolor: '#235347' }}/>
                                 <div className='d-flex'>
                                    <PiSunLight style={{ fontSize: '50px', color: '#235347', fontWeight: 'bolder' }}/>  
                                    <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold',  color: '#235347',lineHeight: 1 }}>
                              
Light <br/><span style={{fontSize: '15px', }}>Indirect light</span>
                            </Typography>
                                </div>
                                
                               </Box> */}
                        </Box>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col>
                        <Box>
                            <TableContainer component={Paper}>
                                <Table sx={{ maxWidth: 800, mx: "auto", backgroundColor: '#DAF1DE'}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{backgroundColor: '#c6dbca'}}>Name</TableCell>
                                            <TableCell >Peace Lily Plant</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Category
                                            </TableCell>
                                            <TableCell>	PLANTS</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Country of Origin</TableCell>
                                            <TableCell>INDIA</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Marketed by</TableCell>
                                            <TableCell>Ugaoo Agritech Pvt Ltd, Plot No. 90, Floriculture Park, Ambi, MIDC, Talegaon Dabhade, Maharashtra 410507</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">MRP</TableCell>
                                            <TableCell>₹350.00 (Incl. of all taxes)</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Net Quantity</TableCell>
                                            <TableCell>1</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Manufactured by</TableCell>
                                            <TableCell>Ugaoo Agritech Pvt Ltd, Plot No. 90, Floriculture Park, Ambi, MIDC, Talegaon Dabhade, Maharashtra 410507</TableCell>
                                        </TableRow>
                                         <TableRow>
                                            <TableCell component="th" scope="row">Customer Support</TableCell>
                                            <TableCell>Email : support@ugaoo.com <br/>Call: +91-9129912991</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Col>
                    <Col>
                        <div className='main-img pt-3' style={{ position: 'relative' }}>
                            {/* <img className='main-img' style={{ borderRadius: '10px', position: 'relative' }} src="https://www.ugaoo.com/cdn/shop/files/A_image_11_37da353e-2353-42a8-af30-66d54a26f8e1.jpg?v=1778241492&width=1000" height={550} alt="" /> */}
                            <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '25px', color: '#235347', mb: 1, ml: 4 }}>
                                Know when to water your plant
                            </Typography>
                            <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347', mb: 1, ml: 4 }}>
                                The ultimate ungli test
                            </Typography>
                            <Box sx={{ position: 'absolute', bottom: 10 }}>
                                <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '19px', color: '#DAF1DE', mb: 1, ml: 4 }}>
                                    Dip your finger in the soil
                                </Typography>
                                <ul >
                                    <li style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', color: '#DAF1DE' }}>Finger dry: Time to water</li>
                                </ul>
                                <ul >
                                    <li style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', color: '#DAF1DE' }}>Finger moist: Avoid watering</li>
                                </ul>
                            </Box>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PlantDetails