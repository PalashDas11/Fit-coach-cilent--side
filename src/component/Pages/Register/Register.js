import React, { useState } from 'react';
import './Register.css'
import { ToastContainer } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Load from '../Load/Load';


const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login');
    }
    if(user){
        console.log(user);
    }
    if(loading || updating){
        return <Load></Load>
    }


    // create user email and password 

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }
    return (
        <div className='register-form container  py-4'>

            <h2 className=' text-center mt-2'>Please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Our Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='text-white custom-bg-primary mx-auto d-block mb-2 text-center w-100'
                    type="submit"
                    value="Register" />


            </form>

            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Register;