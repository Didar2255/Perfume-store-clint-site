import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleBlog.css'

const SingleBlog = ({ blog }) => {
    const { name, description, img, date } = blog
    return (
        <Col>
            <Card className='blog-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body className='blog-body'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h5>{date}</h5>
                        {description.slice(0, 200)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleBlog;