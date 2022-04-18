import React from 'react';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
const services = [
    {id : 1, name:'Core Strength', title:'It may seem like a no-brainer, but doing core exercises builds core strength. Its hard to strengthen a muscle group without doing exercises to strengthen it. Core exercises dont just help tone and sculpt six-pack abs! Core exercises are great for improving overall balance',price:20,img:'https://fitnesszonedev.wpengine.com/wp-content/uploads/2015/02/blog6.jpg'},
    {id : 2, name:'Muscle Bulding',title:'You have probably heard that you should be incorporating strength training into your exercise routine..Spending your whole day in the gym is not necessary to build muscle. Weight training for 20 to 30 minutes, 2 to 3 times a week is enough to see results. For muscle build you need to eat better.',price:25,img:'https://fitnesszonedev.wpengine.com/wp-content/uploads/2015/02/product8-420x287.jpg'},
    {id : 3, name:'Fat Burning Pro',title:'Everyone has a different reason for working out. Some want to accomplish performance goals, others want to build enough muscle to make their shirtsleeves bulge. But on some level, just about everyone trains to be healthier—and that means they’re working up a sweat and burning through fat.',price:15,img:'https://fitnesszonedev.wpengine.com/wp-content/uploads/2015/02/blog2.jpg'},
]
const Services = () => {
    return (
        <div className='py-4'>
            <div>
                <h3 className='text-center'>Services</h3>
            </div>
        <div className='row container p-4'>
            {
                services.map(service =><Service key={service.id} service = {service}></Service>)
            }
        </div>
        
        </div>
    );
};

export default Services;