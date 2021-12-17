import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating'
import './Product.css'

const Product = ({ product }) => {
    const { productName, productImage, rating, price } = product
    return (
        <div>
            <Col>
                <Card className='product-card'>
                    <Card.Img variant="top" src={productImage} />
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