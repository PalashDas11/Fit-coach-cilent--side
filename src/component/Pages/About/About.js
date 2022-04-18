import React from 'react';
import './About.css'
import AboutImg from '../../../img/About.jpg'


const About = () => {
    return (

        <div className='row container align-items-center justify-content-around py-4 '>
            <div className='col-sm-12 col-md-6 col-lg-4 about-img'>
                <img src={AboutImg} alt="" />
            </div>
            <div className='col-sm-12 col-md-6 col-lg-8' >
                <h4>About me-</h4>
                <p>Hi, Welcome to About page- My name is Palash Das, I'm a Front-end developer. I can bulid your website using React, React-Router firebase. I have more experices HTML, CSS, JavaScript. And my goal is will be a Full-Stack Developer.....Thank for reading!</p>
            </div>

        </div>

    );
};

export default About;