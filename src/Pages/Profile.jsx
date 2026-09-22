import React from 'react'
import Header from '../Components/Header'
import { Container, Row, Col } from 'react-bootstrap'
import { Box, Typography, Divider, Button, Drawer, TextField } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { getFavoritesAPI, userProfileAPI, viewOrderAPI } from '../services/allApIs';
import { useEffect } from 'react';
import { Update } from '@mui/icons-material';
import ProfileDialog from '../Components/ProfileDialog';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Profile() {

    const [token, setToken] = useState('');
    const [profile, setProfile] = useState({});

    const userProfile = async () => {
        const reqHeader = {
            Authorization: `Bearer ${token}`
        }
        try {
            const response = await userProfileAPI(reqHeader);
            console.log(response);
            setProfile(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        userProfile();
    }, [token])
    useEffect(() => {
        setToken(sessionStorage.getItem('token'));
    }, [])









    const [openProfile, setOpenProfile] = useState(false);


    const [state, setState] = React.useState({ bottom: false });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };



    const [order, setOrder] = useState([]);

    const viewOrder = async () => {
        const reqHeader = {
            Authorization: `Bearer ${token}`
        }
        try {
            const response = await viewOrderAPI(reqHeader);
            console.log(response.data);
            setOrder(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

   


    const [fav, setfav] = useState([]);
    const getFavorites = async () => {
        const reqHeader = {
             Authorization: `Bearer ${token}`
        }
        try{
            const response = await getFavoritesAPI(reqHeader);
            console.log(response.data);
            setfav(response.data)
        }
        catch(err){
            console.log(err);
        }
    }

     useEffect(() => {
        viewOrder();
        getFavorites();
    }, [token]);

    return (
        <div>
            <section className='pb-4' style={{ backgroundColor: '#051F20' }}>
                <Header />
                <Container className='text-center pt-5 mb-4'>
                    <Row>
                        <Col xs={12} md={6} className='mt-5'>
                            <div className='d-flex justify-content-center align-items-center gap-4 text-start'>
                                <Avatar src={profile?.profile ? `http://localhost:3000/uploads/${profile.profile}` : "/broken-image.jpg"} onClick={() => setOpenProfile(true)} sx={{ height: { xs: 130, sm: 170, md: 200 }, width: { xs: 130, sm: 170, md: 200 }, cursor: 'pointer' }} />
                                <Box>
                                    <Typography variant='h5' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', fontSize: { xs: '22px', sm: '25px', md: '28px' }, color: '#DAF1DE' }}>
                                        Hello, {profile?.username} !
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', fontSize: { xs: '13px', sm: '14px', md: '17px' }, color: '#DAF1DE', mb: 2 }}>
                                        Plant lover & nature enthusiast.
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', fontSize: { xs: '12px', sm: '13px', md: '15px' }, color: '#DAF1DE', mb: 2 }}>
                                        {profile?.email}
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', fontSize: { xs: '12px', sm: '13px', md: '15px' }, color: '#DAF1DE', mb: 2 }}>
                                        {profile?.address || "Enter address"}
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', fontSize: { xs: '12px', sm: '13px', md: '15px' }, color: '#DAF1DE', mb: 2 }}>
                                        +91 {profile?.mobileNo || "0000000000"}
                                    </Typography>
                                    <Button variant='outlined' sx={{ borderColor: '#8EB69B', color: '#8EB69B', pt: 1 }} startIcon={<EditIcon />} onClick={() => setOpenProfile(true)}>Edit Details</Button>
                                </Box>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='d-flex align-items-center mt-5'>
                            <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
                                <Box>
                                    <FavoriteRoundedIcon sx={{ color: '#DAF1DE' }} />
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', textAlign: 'center', mb: 2 }}>
                                        {order?.length}
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', textAlign: 'center', mb: 2 }}>
                                        Order
                                    </Typography>
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "#DAF1DE", height: 80 }} />
                                <Box>
                                    <FavoriteRoundedIcon sx={{ color: '#DAF1DE' }} />
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#DAF1DE', textAlign: 'center', mb: 2 }}>
                                        {fav?.length}
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
                            <Typography variant='h5' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', fontSize: { xs: '21px', sm: '23px', md: '26px' }, color: '#051F20', textAlign: 'start', mb: 4, ml: 3 }}>
                                Recent Order
                            </Typography>
                            {order?.map(item => (<div className='d-flex justify-content-around align-items-center text-start mb-3 review-card'>
                                <img src={item?.image} height={150} alt="" className='mb-2' />
                                <Box>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        {item?.productName}
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                                        Quantity {item?.quantity} <span className='text-end'>Amount {item?.totalAmount}</span>
                                    </Typography>
                                    <Typography className='review-text2' variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>

                                        Address {item?.address?.slice(0, 21)}-<br /> {item?.address?.slice(22,)}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Oder Id #{item?._id?.slice(0, 7)}
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        +91 {item?.mobileNo}
                                    </Typography>
                                    <Typography className='review-text2' variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 2 }}>
                                        Order {item?.orderDate?.slice(0, 10)}
                                    </Typography>
                                </Box>
                            </div>))}
                        </Box>
                    </Col>
                    <Col xs={12} md={6} className='mt-1'>
                        <Box sx={{ backgroundColor: '#c3e3c9', borderRadius: '10px', pt: 3, }}>
                            <Typography variant='h5' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', fontSize: { xs: '21px', sm: '23px', md: '26px' }, color: '#051F20', textAlign: 'start', mb: 4, ml: 3 }}>
                                Saved Items
                            </Typography>
                       <Row>
    {fav?fav?.map((item) => (
        <Col xs={12} sm={6} key={item?._id}>
           <Link to={item?.productType=="plant"?`/plant-details/${item?._id}`:`/pot-details/${item?._id}`} style={{ textDecoration: 'none'}}>
            <Box className="text-center mb-4">
                <img src={item?.image} height={150} width={150} style={{ objectFit: 'contain' }} alt={item?.productName}/>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20', mb: 1}}>{item?.productName}</Typography>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#051F20' }}>₹{item?.price}</Typography>
            </Box>
           </Link>
        </Col>
    )):'No favorites here added'}
</Row>              
                        </Box>
                    </Col>
                </Row>
            </Container>

            <ProfileDialog open={openProfile}
                onClose={() => setOpenProfile(false)}
                profile={profile}
                token={token} />

            <Footer />
        </div>
    )
}

export default Profile