import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../img/google.png'
import Load from '../Load/Load';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMessage;

    if(loading ){
        return <Load></Load>
    }

    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='custom-bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='custom-bg-primary w-50'></div>
            </div>
            {errorMessage}
            <button
                    onClick={() => signInWithGoogle()}
                    className='btn custom-bg-primary d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className=' text-white'>Google Sign In</span>
                </button>
        </div>
    );
};

export default SocialLogin;