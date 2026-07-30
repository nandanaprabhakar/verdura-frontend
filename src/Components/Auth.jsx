import { Box, Button, IconButton, Popover, TextField, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Auth() {
  const [register, setRegister] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //login & register
 const [formData, setFormData] = useState({ userName: "", email: "", password: "" });

 const handleRegister =()=>{
  console.log(formData.userName, formData.email, formData.password);
    if(!formData.userName||!formData.email||!formData.password){
      alert('please fill the form')
    }
    else{
      sessionStorage.setItem('email',JSON.stringify(formData))
       alert('login successfully');
    }
 }

  const handleLogin =()=>{
    
    console.log(formData.email, formData.password);
    if(!formData.email||!formData.password){
      alert('please fill the form')
    }
    else{
      const data=JSON.parse(sessionStorage.getItem('email'))
      if(data.password!=formData.password){
       alert('invalid password')
        
      }
      if(data.email!=formData.email){
       alert('account not fount')
        
      }
      else{
        alert('login successfully');
        
      }
    }
  }

  // console.log(userName, email, password);
  
  return (
    <div>
      <IconButton onClick={handleClick}>
        <PersonOutlineOutlinedIcon sx={{ color: '#DAF1DE', fontSize: '40px' }} />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: { width: 'auto', background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(15px)', p: 2, borderRadius: 2, },
          },
        }}
      >
        <Box>
       { register && ( <>
        <Typography sx={{ color: '#DAF1DE' }}>UserName</Typography>
        <TextField fullWidth margin="normal"  value={formData.userName} onChange={(e)=>setFormData({...formData, userName: e.target.value})} sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "transparent", color: "#DAF1DE", },
            "& .MuiInputLabel-root": { color: "#DAF1DE", },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: '#DAF1DE' },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#DAF1DE" },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#DAF1DE" },
            "& input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px transparent inset",
              WebkitTextFillColor: "white",
              transition: "background-color 5000s ease-in-out 0s",
            },
          }} />
          </>)}
           <Typography sx={{ color: '#DAF1DE', mb: 0 }}>Email</Typography>
          <TextField fullWidth margin="normal"   value={formData.email} onChange={(e) =>setFormData({ ...formData, email: e.target.value })} 
          sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "transparent", color: "#DAF1DE", },
            "& .MuiInputLabel-root": { color: "#DAF1DE", },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: '#DAF1DE' },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#DAF1DE" },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#DAF1DE" },
            "& input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px transparent inset",
              WebkitTextFillColor: "white",
              transition: "background-color 5000s ease-in-out 0s",
            },
          }} />
          <Typography sx={{ color: '#DAF1DE', mb: 0 }}>Password</Typography>
          <TextField fullWidth type="password" margin="normal"   value={formData.password}
  onChange={(e) =>
    setFormData({ ...formData, password: e.target.value })
  } sx={{
            "& .MuiOutlinedInput-root": { backgroundColor: "transparent", color: "#DAF1DE", },
            "& .MuiInputLabel-root": { color: "#DAF1DE", },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: '#DAF1DE' },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#DAF1DE" },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#DAF1DE" },
            "& input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px transparent inset",
              WebkitTextFillColor: "white",
              transition: "background-color 5000s ease-in-out 0s",
            },
          }}/>
          <Button fullWidth variant="contained" sx={{ mt: 2, backgroundColor: '#235347' }} onClick={register? handleRegister: handleLogin}>
            {register? 'Register': 'Login'}
          </Button>
          <Typography variant='subtitle1' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#DAF1DE' }}>
            {register ? "Already have an account? " : "Create an account? "}

  <span onClick={() => setRegister(!register)} style={{ color: "#DAF1DE", cursor: "pointer", textDecoration: "underline",}}>
    {register ? "Login" : "Register"}</span>
          </Typography>
        </Box>
      </Popover>
    </div>
  )
}

export default Auth