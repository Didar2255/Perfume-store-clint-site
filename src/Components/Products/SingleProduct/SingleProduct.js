import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth'
import './SingleProduct.css'

const SingleProduct = () => {
    const { id } = useParams()
    const { user } = useAuth()

    const [productDetails, setProductsDetails] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProductsDetails(data))
    }, [id]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <div className="row my-5">
                <div className="col-md-3">
                    <div className="product-img">
                        <img src={productDetails.productImage} alt="" />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="product-info">
                        <h4>{productDetails.productName}</h4>
                        <p>{productDetails.productDescription}</p>
                        <p>Price : ${productDetails.price}</p>
                        <p>Color : {productDetails.Color}</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="purchase-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("productName")}
                                defaultValue={productDetails.productName}
                            />
                            <input {...register("productPrice")}
                                defaultValue={productDetails?.price}
                            />
                            <input {...register("email")}
                                defaultValue={user?.email}
                            />
                            <input {...register("date")}
                                type='date'
                            />
                            <select {...register("color")}>
                                <option value="Black">Black</option>
                                <option value="male">Pink</option>
                                <option value="other">Blue</option>
                            </select>
                            <button type='submit'>Purchase</button>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SingleProduct;