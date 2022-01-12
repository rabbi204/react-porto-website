import {React,useState, useEffect} from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = () => {

    let {productId} = useParams();

    const [singleProduct, setSingleProduct] = useState([]);
    const [related, setRelated] = useState([]);

    let {name, desc, price, sale, stock, img} = singleProduct;

    useEffect(() => {
      fetch('http://localhost:8000/products/' + productId)
      .then( data => data.json() )
      .then( data => {

        setSingleProduct(data)

        fetch('http://localhost:8000/category/' + data.categoryId + '/products')
        .then(data => data.json() )
        .then( data => setRelated(data) )


      } )
    },[])



    return (
        <>
            <section className='single-product'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={ img } alt="" />
                        </Col>
                        <Col md={6}>
                            <div className="product-info">
                                <h2 className='name'>{ name }</h2>
                                <div className="pricing">

                                    {
                                        sale == "0" ?
                                            <span style={{marginLeft:'0px'}} className='sale'>{ price } tk</span>
                                        :
                                            <>
                                                <span className='regular'>{ price } tk</span>
                                                <span className='sale'>{ sale } tk</span>
                                            </>

                                    }

                                    
                                    
                                </div>
                                <div className="desc">
                                    <p>{ desc}</p>
                                </div>

                                { 
                                    stock > 10 ? 
                                        <div className="stock">
                                            {stock} in Stock
                                        </div>
                                    :
                                       stock > 0 ?
                                            <div className="stock out">
                                                {stock} in Stock
                                            </div>
                                        :
                                            <div className="stock out">
                                                Out of Stock
                                            </div>
                                }

                                <div className="cart-btn">
                                    <Button variant='primary'>Add to Cart</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='related'>
                <Container>
                    <Row>
                        <Col>
                            <div className="section-title center">
                                <h2>Related Product</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nihil.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        {
                            related.map( data => 
                                <Col md={3} className='mb-5'>
                                    <div className="related-product">
                                        <Card>
                                            <Card.Img src={data.img}></Card.Img>
                                            <Card.Body>
                                                <Card.Title className='name'>{ data.name }</Card.Title>
                                                <Card.Text className='price'>
                                                    { data.sale == '0' ?
                                                                            
                                                            <span style={{marginLeft:'0px'}} className='sale'>{data.price} tk</span>
                                                        :
                                                        <>
                                                            <span className='regular'>{ data.price } tk</span>
                                                            <span className='sale'>{ data.sale } tk</span>
                                                        </>
                                                    }
{/* 
                                                    <span className='regular'>$340</span>
                                                    <span className='sale'>$120</span> */}
                                                </Card.Text>
                                                <Button variant='primary'>Add to Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        }
                        

                    </Row>
                </Container>
            </section>
        </>
    )
};

export default SingleProduct;
