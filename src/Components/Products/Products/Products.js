import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Container>
                <h2 className='product-title'>Trading Product</h2>
                <Row xs={1} md={4} className="g-4">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;