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


function PotDetails() {
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
                        {image == 1 && <img className='main-img' style={{ borderRadius: '10px', }} src="https://www.ugaoo.com/cdn/shop/files/1_33b8bfaa-0a57-4586-bcc6-df156a6c694e.jpg?v=1709700211&width=1000" height={450} alt="" />}
                        {image == 2 && <img className='main-img' style={{ borderRadius: '10px' }} src="https://www.ugaoo.com/cdn/shop/files/6_12be073f-479c-4574-a6a9-e34c31516e69.png?v=1770027655&width=1000" height={450} alt="" />}
                        {image == 3 && <img className='main-img' style={{ borderRadius: '10px' }} src="https://www.ugaoo.com/cdn/shop/files/3_eb0fd7b5-63df-48f7-9813-1694bcae292f.png?v=1770027655&width=1000" height={450} alt="" />}
                        {image == 4 && <img className='main-img' style={{ borderRadius: '10px' }} src="https://www.ugaoo.com/cdn/shop/files/4_b9adf128-0f34-459e-be0c-3f9270af5f50.png?v=1770027655&width=1000" height={450} alt="" />}
                        {image == 5 && <img className='main-img' style={{ borderRadius: '10px' }} src="https://www.ugaoo.com/cdn/shop/files/5_9bfada87-f947-45aa-8230-6606625c4167.png?v=1770027655&width=1000" height={450} alt="" />}

                        <div className='d-flex mt-4 gap-3 ' >
                            <img className={image == 1 ? 'image-active' : 'image'} style={{ borderRadius: '10px' }} onClick={() => setImage(1)} src="https://www.ugaoo.com/cdn/shop/files/1_33b8bfaa-0a57-4586-bcc6-df156a6c694e.jpg?v=1709700211&width=1000" height={70} alt="" />
                            <img className={image == 2 ? 'image-active' : 'image'} onClick={() => setImage(2)} src="https://www.ugaoo.com/cdn/shop/files/6_12be073f-479c-4574-a6a9-e34c31516e69.png?v=1770027655&width=1000" height={70} alt="" />
                            <img className={image == 3 ? 'image-active' : 'image'} onClick={() => setImage(3)} src="https://www.ugaoo.com/cdn/shop/files/3_eb0fd7b5-63df-48f7-9813-1694bcae292f.png?v=1770027655&width=1000" height={70} alt="" />
                            <img className={image == 4 ? 'image-active' : 'image'} onClick={() => setImage(4)} src="https://www.ugaoo.com/cdn/shop/files/4_b9adf128-0f34-459e-be0c-3f9270af5f50.png?v=1770027655&width=1000" height={70} alt="" />
                            <img className={image == 5 ? 'image-active' : 'image'} onClick={() => setImage(5)} src="https://www.ugaoo.com/cdn/shop/files/5_9bfada87-f947-45aa-8230-6606625c4167.png?v=1770027655&width=1000" height={70} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <Box>
                            <Typography variant='h2' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '700', color: '#051F20' }}>
                                Orbit Wooden Planter
                            </Typography>
                            <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347', mb: 1 }}>
                                Plants are only for representation purpose
                            </Typography>


                            <div className='d-flex gap-3 align-items-center'>
                                <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: '#235347' }}>
                                    ₹ 1,399
                                </Typography>
                                <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: '#235347', textDecoration: 'line-through', opacity: '0.4' }}>
                                    ₹ 2,199
                                </Typography>
                                <Typography variant='h6' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', color: '#235347', backgroundColor: '#8EB69B', px: 2, borderRadius: '20px' }}>
                                    15% off
                                </Typography>
                            </div>
                            <div>
                                <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347', mt: 1 }}>
                                    Select Size
                                </Typography>
                                <Box sx={{ backgroundColor: '#8EB69B', display: 'flex', justifyContent: 'space-around', borderRadius: '10px', py: 3 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'end', border: '1px solid #235347', color: '#DAF1DE', width: '40%', borderRadius: '80px' }}>
                                        <p><RemoveIcon onClick={Increment} style={{ fontSize: '30px' }} /></p>
                                        <p className='my-2' style={{ fontSize: '30px' }}>{count}</p>
                                        <p><AddIcon onClick={Increment} style={{ fontSize: '30px' }} /></p>
                                    </Box>
                                    <Box sx={{ width: '2px', height: '60px', bgcolor: '#235347' }} />
                                    <Button variant='contained' sx={{ display: 'flex', backgroundColor: '#235347', color: '#DAF1DE', width: '40%', borderRadius: '30px' }}>
                                        Order now
                                    </Button>
                                </Box>
                            </div>
                            <div className='mb-3'>
                                <Typography variant='h4' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#235347' }}>
                                    About The Product
                                </Typography>
                                <Typography variant='subtitle1' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#235347' }}>
                                    The Set of 2 of these Orbit Wooden Planters are everything you want - sleek, modern, and aesthetic. They add an elegant charm to any space and every plant. With intricately carved designs, they are resistant to weathering and are thus durable and lasting!                                </Typography>
                            </div>

                            <Box sx={{ backgroundColor: '#8EB69B', display: 'flex', justifyContent: 'space-around', borderRadius: '10px', py: 3 }}>
                                <div className='d-flex'>
                                    <Typography variant='h5' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', color: '#235347', ml: 1 }}>
                                        30 days Guaranteed Replacement of Damaged Product
                                    </Typography>
                                </div>
                                <div className='d-flex'>
                                    <PiSunLight style={{ fontSize: '50px', color: '#235347', fontWeight: 'bolder' }} />
                                </div>
                            </Box>
                        </Box>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col>
                        <Box>
                            <TableContainer component={Paper}>
                                <Table sx={{ maxWidth: 800, mx: "auto", backgroundColor: '#DAF1DE' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ backgroundColor: '#c6dbca' }}>Name</TableCell>
                                            <TableCell >Orbit Wooden Planter - Set of 2t</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Category
                                            </TableCell>
                                            <TableCell>Planter</TableCell>
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
                                            <TableCell>₹2,199.00 (Incl. of all taxes)</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Net Quantity</TableCell>
                                            <TableCell>2</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Manufactured by</TableCell>
                                            <TableCell>Ugaoo Agritech Pvt Ltd, Plot No. 90, Floriculture Park, Ambi, MIDC, Talegaon Dabhade, Maharashtra 410507</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">Customer Support</TableCell>
                                            <TableCell>Email : support@ugaoo.com <br />Call: +91-9129912991</TableCell>
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

export default PotDetails