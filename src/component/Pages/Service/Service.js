import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, title, img, price } = service
    console.log(service);
    return (
        <div className='col-sm-12 col-md-3 d-block mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {title}
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h5>${price}<small>/month</small></h5>
                        <Link to="/login" className='custom-btn'>Enroll Now</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;