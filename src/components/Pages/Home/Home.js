import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="slider">
                <Carousel>
                    <Carousel.Item>
                        <img src="https://media.istockphoto.com/photos/online-shopping-picture-id967673584?k=20&m=967673584&s=612x612&w=0&h=mpU2KuFpEqqXYWGfowvEN0bJ91SQy8N-5V7YkZaLWZY=" alt='' />
                        <Carousel.Caption>
                            <h2>React for Love</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam dolorum, eligendi iure qui amet ad nisi laborum in accusamus!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="https://media.istockphoto.com/photos/high-angle-view-asian-chinese-womans-hand-on-mobile-app-for-online-picture-id1300476665?b=1&k=20&m=1300476665&s=170667a&w=0&h=6yLWL7XmKiiMRheXK4E1cdcPOqp54y3Au-mxdbuodyQ=" alt='' />
                        <Carousel.Caption>
                            <h2>React for Love</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quam dolorum, eligendi iure qui amet ad nisi laborum in accusamus!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="https://media.istockphoto.com/photos/young-businesswoman-in-her-new-office-picture-id1304597335?k=20&m=1304597335&s=612x612&w=0&h=yrJuEuj986U5i6nbG0vSTQMMDJc_vgtmRY5rrJR_Wko=" alt='' />
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
                                <img src="https://geekcrunchhosting.com/wp-content/uploads/2019/02/wordpress.jpg" alt="" />
                                <h3>Wordpress</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptate.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="service-item">
                                <img src="https://msatechnosoft.in/blog/wp-content/uploads/2018/09/Laravel-Title-MSA-Technosoft.jpg" alt="" />
                                <h3>Laravel</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptate.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="service-item">
                                <img src="https://lh6.googleusercontent.com/rU8dZ0x67y63AeujFhM79UG_I3ZagEqTmDffagrUVuBI5eXPHtW2Z7zP1KU1MLKtl0wU5eNS_QHU-9v3GUJgxlKYeAR1yKADY8xCj7xMrpL8z9Rr2Zde9_OGsmXTigvBr7DEWggV" alt="" />
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
