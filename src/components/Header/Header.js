import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/2.png';
import { NavLink } from 'react-router-dom';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Header = ({progress}) => {
    return (
        <>
            <div className="top-bar">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="info">
                                <ul>
                                    <li>01729673492</li>
                                    <li>|</li>
                                    <li>md.rabbi.web@gmail.com</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="social">
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <header className='header shadow'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="logo">
                                <NavLink to='/'><img src={logo} alt=""/></NavLink>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="menu">
                                <ul>
                                    <li><NavLink onClick={() => progress(100)} to='/'>Home</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to='/about'>About Us</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to='/blog'>Blog</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to='/shop'>Shop</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to='/team'>Our Team</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to='/contact'>Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
};

export default Header;
