import {React, useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import './Team.css';
const Team = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        setInterval(() => {
            fetch('https://api.github.com/users')
            .then( data => data.json() )
            .then( data => setUsers(data) ) 
        }, 2000);

        


    }, []);
// console.log(users);
    return (
        <section className="team">
            <Container>
                <Row>
                    <Col>
                        <div className="section-title center">
                            <h2>Our Developers</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iste doloremque ipsam</p>
                        </div>
                    </Col>
                </Row>
                <Row>

                    {

                        users.length > 0 ? 
                        users.map( data => 
                            <Col md={4}>
                                <div className="team-member">
                                    <img src={data.avatar_url} alt="" />
                                    <h3>{ data.login }</h3>
                                    <h4>{ data.node_id }</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio ut, maxime nesciunt voluptate amet voluptatum id ea animi illo.</p>
                                </div>
                            </Col>
                        ) :
                        <>
                            <Col md={4}>
                                <div className="team-skeleton">
                                    <Skeleton width="150px" height="150px" circle={true}></Skeleton>
                                    <Skeleton width="230px" height="22px"></Skeleton>
                                    <Skeleton width="200px" height="16px"></Skeleton>
                                    <Skeleton width="100%" height="14px"></Skeleton>
                                    <Skeleton width="80%" height="14px"></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-skeleton">
                                    <Skeleton width="150px" height="150px" circle={true}></Skeleton>
                                    <Skeleton width="230px" height="22px"></Skeleton>
                                    <Skeleton width="200px" height="16px"></Skeleton>
                                    <Skeleton width="100%" height="14px"></Skeleton>
                                    <Skeleton width="80%" height="14px"></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-skeleton">
                                    <Skeleton width="150px" height="150px" circle={true}></Skeleton>
                                    <Skeleton width="230px" height="22px"></Skeleton>
                                    <Skeleton width="200px" height="16px"></Skeleton>
                                    <Skeleton width="100%" height="14px"></Skeleton>
                                    <Skeleton width="80%" height="14px"></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-skeleton">
                                    <Skeleton width="150px" height="150px" circle={true}></Skeleton>
                                    <Skeleton width="230px" height="22px"></Skeleton>
                                    <Skeleton width="200px" height="16px"></Skeleton>
                                    <Skeleton width="100%" height="14px"></Skeleton>
                                    <Skeleton width="80%" height="14px"></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-skeleton">
                                    <Skeleton width="150px" height="150px" circle={true}></Skeleton>
                                    <Skeleton width="230px" height="22px"></Skeleton>
                                    <Skeleton width="200px" height="16px"></Skeleton>
                                    <Skeleton width="100%" height="14px"></Skeleton>
                                    <Skeleton width="80%" height="14px"></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-skeleton">
                                    <Skeleton width="150px" height="150px" circle={true}></Skeleton>
                                    <Skeleton width="230px" height="22px"></Skeleton>
                                    <Skeleton width="200px" height="16px"></Skeleton>
                                    <Skeleton width="100%" height="14px"></Skeleton>
                                    <Skeleton width="80%" height="14px"></Skeleton>
                                </div>
                            </Col>
                        </>

                    }
                </Row>
            </Container>
        </section>
    )
};

export default Team;
