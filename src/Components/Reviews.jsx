import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card';
import { getReviewAPI } from '../services/allApIs';

function Reviews({productName}) {

    const [token, setToken] = useState('');
    const [review, setReview] = useState([]);
    const getReview = async() => {
        console.log('hi');
        
          const reqHeader = {
                    Authorization: `Bearer ${token}`
                }
                try {
                    console.log("Product Name:", productName);
                    const response = await getReviewAPI(productName,reqHeader);
                    console.log(response.data);
                    setReview(response.data);
                }
        catch(err){
            console.log(err);    
        }
    }
 
    useEffect(() => {
           getReview();
       }, [token, productName])
       useEffect(() => {
           setToken(sessionStorage.getItem('token'));
       }, [])

  return (
    <div>
        <Container className='mt-5'>
            <Row className="align-items-center g-3 mb-3">
                                      {review?.map(item=>(<Col xs={6} md={4}>
                                            <Card className="d-flex flex-row review-card" style={{
                                                width: '100%', boxShadow: '0 30px 40px rgba(0, 0, 0, 0.2)', backgroundColor: 'transparent', border: 'none'
                                               
                                            }}>
            
                                              
            
                                                <Card.Body>
                                                    <Card.Title className="text-start" style={{ color: '#235347' }}>
                                                       {item?.username}
                                                    </Card.Title>
            
                                                    <Card.Text className="text-start review-rating">
                                                        {"⭐".repeat(item?.rating)}
                                                    </Card.Text>
            
                                                    <Card.Text className="text-start" style={{ color: '#235347' }}>
                                                        {/* <span style={{ fontSize: '30px' }}>"</span> */}
                                                        <div className='review-text1'>"{item?.review?.slice(0,89)}..."</div>
                                                       <div className='review-text2'>"{item?.review}"</div>
                                                        {/* <span style={{ fontSize: '30px' }}>"</span> */}
                                                    </Card.Text>
                                                </Card.Body>
            
                                            </Card>
                                        </Col>))}
                                      
                                    </Row>
        </Container>
    </div>
  )
}

export default Reviews