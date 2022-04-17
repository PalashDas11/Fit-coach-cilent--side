import React from 'react';
import google from '../../../img/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='custom-bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='custom-bg-primary w-50'></div>
            </div>
            <button
                    // onClick={() => signInWithGoogle()}
                    className='btn custom-bg-primary d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className=' text-white'>Google Sign In</span>
                </button>
        </div>
    );
};

export default SocialLogin;