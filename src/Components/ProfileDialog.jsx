import React, { useState } from 'react';
import {
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Box, Alert,
    Button, TextField
} from '@mui/material';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import EditIcon from '@mui/icons-material/Edit';
import { updateProfileAPI } from '../services/allApIs';
import { Login } from '@mui/icons-material';
import { ToastContainer, toast, Bounce } from 'react-toastify';

function ProfileDialog({ open, onClose, profile, token }) {

    const [formData, setFromData] = useState({ username: "", mobileNo: "", address: "", profile: "" });
    const [preview, setPreview] = useState('');
const [success, setSuccess] = useState(false);
    const fileUpload = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreview(url);

        setFromData(prev => ({
            ...prev,
            profile: file
        }));
    };
    const UpdateProfile = async () => {
        try {
            const reqHeader = {
                Authorization: `Bearer ${token}`
            };

            const reqBody = new FormData();

            reqBody.append("username", formData.username);
            reqBody.append("mobileNo", formData.mobileNo);
            reqBody.append("address", formData.address);

            if (formData.profile) {
                reqBody.append("profile", formData.profile);
            }
            const response = await updateProfileAPI(reqBody, reqHeader);
            console.log(response);
            if (response.status == 200) {
               setSuccess(response.data.message)
                setTimeout(() => {
                    onClose();
                    window.location.reload();
                }, 2000);
            }
        } catch (err) {
            console.log(err)
        }
    };
    return (
        <>
        <Dialog onClose={onClose} open={open} maxWidth="xs" fullWidth >
            <DialogTitle sx={{ textAlign: 'center', fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, color: '#051F20' }}>Profile</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', py: 2 }}>
                   { success?( <Typography sx={{ color: '#235347', fontSize: '1.5rem', fontFamily: '"Cormorant Garamond", serif', fontWeight: 600, py: 5 }}>{success} </Typography>):(<> 
                   <Box sx={{ position: 'relative' }}>
                        <label htmlFor='uploadImage'>
                            <input type='file' id='uploadImage' onChange={fileUpload} hidden />
                            <Avatar id='uploadImage' src={preview ? preview
                                : "/broken-image.jpg"} sx={{ width: 180, height: 180, mb: 2 }} /> <AddCircleTwoToneIcon sx={{ position: 'absolute', bottom: 20, right: 20, fontSize: 35, cursor: 'pointer', }} />
                        </label>
                    </Box>

                    <Typography
                        sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 600,
                            fontSize: '1.5rem',
                            color: '#051F20',
                            textAlign: 'center',
                        }}
                    >
                        {profile?.username}
                    </Typography>

                    {/* <TextField variant="standard" placeholder={profile?.email} onChange={(e) => setFromData({ ...formData, email: e.target.value })}
                        slotProps={{ input: { disableUnderline: true } }}
                        sx={{
                            '& .MuiInputBase-input': { fontFamily: '"Inter", sans-serif', color: '#235347', padding: 0, textAlign: 'center', mt: 1 },
                            '& .MuiInputBase-input::placeholder': { color: '#235347', opacity: 1, fontFamily: '"Inter", sans-serif', textAlign: 'center' }
                        }} /> */}

                    <TextField variant="standard" multiline minRows={1} maxRows={4} placeholder={profile?.address || 'Your Address'} onChange={(e) => setFromData({ ...formData, address: e.target.value })}
                        slotProps={{ input: { disableUnderline: true } }}
                        sx={{
                            '& .MuiInputBase-input': { fontFamily: '"Inter", sans-serif', color: '#235347', padding: 0, textAlign: 'center', mt: 1 },
                            '& .MuiInputBase-input::placeholder': { color: '#235347', opacity: 1, fontFamily: '"Inter", sans-serif', textAlign: 'center' }
                        }} />

                    <TextField variant="standard" placeholder={profile?.mobileNo || 'Your Phone Number'} onChange={(e) => setFromData({ ...formData, mobileNo: e.target.value })}
                        slotProps={{ input: { disableUnderline: true } }}
                        sx={{
                            '& .MuiInputBase-input': { fontFamily: '"Inter", sans-serif', color: '#235347', padding: 0, textAlign: 'center', mt: 1 },
                            '& .MuiInputBase-input::placeholder': { color: '#235347', opacity: 1, fontFamily: '"Inter", sans-serif', textAlign: 'center' }
                        }} />
                    <Button variant="contained" onClick={UpdateProfile} sx={{ mt: 3, backgroundColor: '#051F20', '&:hover': { backgroundColor: '#235347' } }}> Save Profile</Button>
                     </>    ) }
    
          </Box>
            </DialogContent>
        </Dialog>
</>
    );
}

export default ProfileDialog;