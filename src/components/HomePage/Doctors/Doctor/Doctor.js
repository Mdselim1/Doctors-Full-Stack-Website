import React from 'react';
import { Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    
    const {name,img,number } = doctor;

    return (
        <Col lg={4} sm={12}>
            <div className="single-doctor text-center p-4">
            <img className="img-fluid" src={img} alt="" />
            <h3>{name}</h3>
            <h4><i class="fas fa-phone phone-color"></i> +{number}</h4>
            </div>
        </Col>
    );
};

export default Doctor;