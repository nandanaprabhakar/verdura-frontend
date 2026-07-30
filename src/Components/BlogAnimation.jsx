import React, { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

import { Box, Button, CardActions } from "@mui/material"

// import "./BlogAnimation.css"



import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function BlogAnimation() {
 const [count, setCount]=useState(0)
 const Increment=()=>{
  setCount(count+1)
  console.log(count);
 }
 
 const Decrement =() =>{
  count > 0 ? setCount(count-1) : count
 }
  return (
    <div>
        <Container className="">
      <Row className="blogAnimation-row">
        <Col className="d-flex justify-content-center gap-2">
      <Box sx={{ display: 'flex'}}>
<Button variant="outlined" onClick={Increment}><AddIcon  /></Button>
<Box sx={{width: '70px', height: '100%', border: '1px solid black', textAlign: 'center'}}>{count}</Box>
<Button variant="outlined" onClick={Decrement}><RemoveIcon/></Button>
      </Box>
   
    
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default BlogAnimation