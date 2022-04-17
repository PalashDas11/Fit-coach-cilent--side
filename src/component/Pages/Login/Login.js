import React from 'react';
import './Login.css'
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    return (
        <div className='login-form container mx-auto py-4'>
        
        <h2 className=' text-center mt-2'>Please Login</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
           <div className='custom-bg-primary  mx-auto d-block mb-2 '>
           <Button variant=" text-white mx-auto d-block mb-2 text-center" type="submit">
                Login
            </Button>
           </div>
            
        </Form>
        
        <p>New to Genius Car? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
    </div>
    );
};

export default Login;