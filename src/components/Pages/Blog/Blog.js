import {React, useState, useEffect} from 'react';
import { Card, Col, Button , Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import './Blog.css';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setInterval(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then( data => data.json() )
            .then( data => setBlogs(data) )
        }, 3000);
        
       

    }, [])
    // console.log(blogs);

    return (
        
        <section className='blog'>
            <Container>
                <Row>
                    <Col>
                        <div className="section-title center">
                            <h2>Our Latest News</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dicta hic amet blanditiis a expedita.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3'>

                    {
                        blogs.length > 0 ?

                        blogs.map(data => 
                            
                            <Col md={3}  className='marginBotom'>
                                <Card>
                                    <Card.Img className='blog-image' src="https://studentexperience.potomacstatecollege.edu/files/7b87b65a-de6d-4c9d-8fcc-0d9aab3d906e/960x627?cb=33a4c332123f9cf47219aa43e9c4a4b3"></Card.Img>
                                    <Card.Body>
                                        <Card.Title className="text-truncate">{ data.title }</Card.Title>
                                        <Card.Text className="text-truncate">
                                            { data.body }
                                        </Card.Text>
                                        <Button variant="primary">Read More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        ) :
                        <>
                            <Col md={4} className='mb-5'>
                                <div className="blog-skeleton">
                                    <Skeleton width={255} height={140}></Skeleton>
                                    <Skeleton width={240} height={20}></Skeleton>
                                    <Skeleton width={255} height={60}></Skeleton>
                                    <Skeleton width={255} height={40}></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="blog-skeleton">
                                    <Skeleton width={255} height={140}></Skeleton>
                                    <Skeleton width={240} height={20}></Skeleton>
                                    <Skeleton width={255} height={60}></Skeleton>
                                    <Skeleton width={255} height={40}></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="blog-skeleton">
                                    <Skeleton width={255} height={140}></Skeleton>
                                    <Skeleton width={240} height={20}></Skeleton>
                                    <Skeleton width={255} height={60}></Skeleton>
                                    <Skeleton width={255} height={40}></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="blog-skeleton">
                                    <Skeleton width={255} height={140}></Skeleton>
                                    <Skeleton width={240} height={20}></Skeleton>
                                    <Skeleton width={255} height={60}></Skeleton>
                                    <Skeleton width={255} height={40}></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="blog-skeleton">
                                    <Skeleton width={255} height={140}></Skeleton>
                                    <Skeleton width={240} height={20}></Skeleton>
                                    <Skeleton width={255} height={60}></Skeleton>
                                    <Skeleton width={255} height={40}></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="blog-skeleton">
                                    <Skeleton width={255} height={140}></Skeleton>
                                    <Skeleton width={240} height={20}></Skeleton>
                                    <Skeleton width={255} height={60}></Skeleton>
                                    <Skeleton width={255} height={40}></Skeleton>
                                </div>
                            </Col>
                        </>

                    }

                   

                    
                   
                </Row>
            </Container>
        </section>

    )
};

export default Blog;
