import { Box, Button, IconButton, Popover, TextField, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { userLoginAPI, userRegisterAPI } from '../services/allApIs';
import { ToastContainer, toast, Bounce } from 'react-toastify';

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
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleRegister = async () => {
    console.log(formData.username, formData.email, formData.password);
    if (!formData.username || !formData.email || !formData.password) {
      toast.warn('please fill the form!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    else {
      try {
        const response = await userRegisterAPI(formData);
        console.log(response);
        if (response.status == 200) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          setTimeout(() => {
            setRegister(false);
            setFormData({ username: "", email: "", password: "" });
          }, 2000);
        }
        else {
          toast.error(response.response.data, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { email, password } = formData;
    if (!formData.email || !formData.password) {
      toast.warn('please fill the form!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    else {
      try {
        const response = await userLoginAPI({ email, password });
        console.log(response);
        if (response.status == 200) {
          sessionStorage.setItem('token', response.data.token);
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          setTimeout(() => {
            setAnchorEl(null);
            window.location.reload();
          }, 2000);
        }
        else if (response.status == 401) {
          toast.error(response.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          console.log(response.response);
        }
        else {
          toast.error(response.response.data, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          console.log(response.response);
        }

      }
      catch (err) {
        console.log(err);
      }
    }
  }

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
          {register && (<>
            <Typography sx={{ color: '#DAF1DE' }}>UserName</Typography>
            <TextField fullWidth margin="normal" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} sx={{
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
          <TextField fullWidth margin="normal" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          <TextField fullWidth type="password" margin="normal" value={formData.password}
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
            }} />
          <Button fullWidth variant="contained" sx={{ mt: 2, backgroundColor: '#235347' }} onClick={register ? handleRegister : handleLogin}>
            {register ? 'Register' : 'Login'}
          </Button>
          <Typography variant='subtitle1' sx={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#DAF1DE' }}>
            {register ? "Already have an account? " : "Create an account? "}

            <span onClick={() => setRegister(!register)} style={{ color: "#DAF1DE", cursor: "pointer", textDecoration: "underline", }}>
              {register ? "Login" : "Register"}</span>
          </Typography>
        </Box>
      </Popover>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"

        transition={Bounce}
      />
    </div>
  )
}

export default Auth