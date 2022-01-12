import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <section className="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src="https://media.istockphoto.com/photos/urban-happy-business-woman-using-tablet-computer-and-working-picture-id1181830509?k=20&m=1181830509&s=612x612&w=0&h=44r9sBWvOR6AqwKsEy0kA4DPeO7OGoCgMqtqlHmViuI=" alt="" />
                    </Col>
                    <Col md={6}>
                        <div className="about-info">
                            <h2>About Our Business</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eveniet non repellat nostrum provident quaerat id fugiat quo sunt aspernatur magnam nihil, inventore maxime aperiam repellendus earum exercitationem nobis? Error!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cumque exercitationem iste sint, qui temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias explicabo, aut numquam magni nihil autem ipsum inventore corrupti laboriosam et?</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default About;
