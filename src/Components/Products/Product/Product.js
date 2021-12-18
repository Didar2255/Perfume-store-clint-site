import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { productName, productImage, rating, price, _id } = product
    const url = `/product/${_id}`
    return (
        <div>
            <Col>
                <Card className='product-card'>
                    <div className="box">
                        <img src={productImage} alt="" className='img-fluid' />
                        <div className="box-content">
                            <div className="content">
                                <ul className='details-icon'>
                                    <li><Link to='' title='QuickView'><i class="far fa-eye"></i></Link></li>
                                    <li><Link to='' title='Wishlist'><i class="far fa-heart"></i></Link></li>
                                    <li><Link to={url} title='Add to Cart'><i class="fas fa-cart-arrow-down"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Card.Body className='card-body'>
                        <Card.Title>{productName}</Card.Title>
                        <Card.Text>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star "
                                fullSymbol="fas fa-star "
                                readonly
                            />
                            <p className='my-2'>USD : ${price}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;