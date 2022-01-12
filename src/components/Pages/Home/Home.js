import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="slider">
                <Carousel>
                    <Carousel.Item>
                        <img src="https://wallpaperaccess.com/full/87270.jpg" alt='' />
                        <Carousel.Caption>
                            <h2>React for Love</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam dolorum, eligendi iure qui amet ad nisi laborum in accusamus!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="https://c0.wallpaperflare.com/preview/817/378/434/bed-coffee-laptop-hot.jpg" alt='' />
                        <Carousel.Caption>
                            <h2>React for Love</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam dolorum, eligendi iure qui amet ad nisi laborum in accusamus!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="https://c0.wallpaperflare.com/preview/717/27/657/beautiful-blur-casual-close-up.jpg" alt='' />
                        <Carousel.Caption>
                            <h2>React for Love</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam dolorum, eligendi iure qui amet ad nisi laborum in accusamus!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className='services'>
                <Container>
                    <Row>
                        <Col>
                            <div className="section-title">
                                <h2>Our Services</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, molestias?</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className="service-item">
                                <img src="https://www.pngplay.com/wp-content/uploads/7/Customer-Logo-Background-PNG-Image.png" alt="" />
                                <h3>Wordpress</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptate.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="service-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0q-ucZ0S1jvnD2QVYGGiArgn_0CDAiTjzILglvccvPlyJhouHhpxmJaRFmOiSVRl5nQg&usqp=CAU" alt="" />
                                <h3>Laravel</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptate.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="service-item">
                                <img src="https://www.way2smile.com/blog/wp-content/uploads/2021/05/customer-service.jpg" alt="" />
                                <h3>Django</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptate.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Home;
