import {React, useState, useEffect} from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShopSidebar from '../../Sidebar/ShopSidebar/ShopSidebar';
import './Shop.css';

function Shop() {

    const [products, setproducts] = useState([])

    

    useEffect(() => {
       fetch('http://localhost:8000/products')
       .then( data => data.json())
       .then( data => setproducts(data) )
    }, [] )
    // console.log(products);

    return (
        <div>
            <section className="shop">
                <Container>
                    <Row>
                        <Col>
                            <div className="section-title center mb-5">
                                <h2>Shop Page</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, iste.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <ShopSidebar></ShopSidebar>
                        </Col>
                        <Col md={9}>
                            <div className="products">
                                <Row>

                                    {
                                        products.map(data => 
                                            
                                            <Col md={4}>
                                            <div className="product-item">
                                                <Link to={'/shop/' + data.id}>
                                                    <Card>
                                                        <Card.Img className='product-item-img' src={data.img}></Card.Img>
                                                        <Card.Body>
                                                            <Card.Title className='name text-truncate'>{ data.name }</Card.Title>
                                                            <Card.Text className='price'>

                                                                { data.sale == '0' ?
                                                                    
                                                                        <span style={{marginLeft:'0px'}} className='sale'>{data.price} tk</span>
                                                                    :
                                                                    <>
                                                                        <span className='regular'>{ data.price } tk</span>
                                                                        <span className='sale'>{ data.sale } tk</span>
                                                                    </>
                                                                }
                                                            </Card.Text>
                                                            <Button variant='primary'>Add to Cart</Button>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </div>
                                        </Col>
                                            
                                        ) 
                                    }

                                   
                                    
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
};

export default Shop;
