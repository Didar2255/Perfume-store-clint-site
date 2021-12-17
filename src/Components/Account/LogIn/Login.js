import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='row p-5'>
            <div className="col-md-5">
                <div className="terms-section">
                    <h4 className='my-4'>Do not have an account ?</h4>
                    <button>Create account</button>
                    <p>Terms & Conditions *</p>
                    <p>Your privacy and security are important to us. For more <br /> information on how we use your data read our</p>
                    <p>Privacy policy</p>
                </div>
            </div>
            <div className="col-md-7">
                <div className="login">
                    <h5>Login</h5>
                    <p>Please login below account detail</p>
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type='email' {...register("Email")} placeholder='Email' />
                            <input type='password' {...register("Password")} placeholder='Password' />
                            <button type='submit'>Sign In</button>
                        </form>
                    </div>
                    <p>Forget account?</p>
                </div>

            </div>
        </div>
    );
};

export default Login;