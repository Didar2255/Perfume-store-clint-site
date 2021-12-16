import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} />
                <input {...register("lastName")} />
                <input type="number" {...register("age")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;