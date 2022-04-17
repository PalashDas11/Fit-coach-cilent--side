import React from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className='login-form container mx-auto'>
        
        <h2 className=' text-center mt-2'>Please Register</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
           <div className='custom-bg-primary  mx-auto d-block mb-2 '>
           <Button variant=" text-white mx-auto d-block mb-2 text-center" type="submit">
                Register
            </Button>
           </div>
            
        </Form>
        
        <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
    </div>
    );
};

export default Register;