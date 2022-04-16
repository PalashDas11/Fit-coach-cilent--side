import React from 'react';
import Service from '../Service/Service';
const services = [
    {id : 1, name:'Core Strength', title:'kdfi lwi emlwie',price:15,img:'https://fitnesszonedev.wpengine.com/wp-content/uploads/2015/02/blog6.jpg'},
    {id : 2, name:'Muscle Bulding',title:' difd psjd osj ao',price:25,img:'https://fitnesszonedev.wpengine.com/wp-content/uploads/2015/02/product8-420x287.jpg'},
    {id : 3, name:'All Round Fitness',title:'dfi osij oij sikj',price:15,img:'https://fitnesszonedev.wpengine.com/wp-content/uploads/2015/02/blog2.jpg'},
]
const Services = () => {
    return (
        <div>
            {
                services.map(service =><Service key={service.id} service = {service}></Service>)
            }
        </div>
    );
};

export default Services;