import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-section">
            <div className='text-center'>
                <h1 className='text-white'>Your Personal Trainer is Here</h1>
                 <h1><span className='custom-primary-color'>Build Your own body</span></h1>
                 <p className='text-white py-4'>Here you can Find affordable personal trainers. You can bulid your body best way in here.</p>
                 <Link className='custom-btn' to="/">Explore more</Link>
            </div>
        </div>
    );
};

export default Hero;