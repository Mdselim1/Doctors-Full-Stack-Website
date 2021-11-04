import React from 'react';
import { Col } from 'react-bootstrap';
import './HomeService.css';

const HomeService = ({ service }) => {
    
    const { img, title, description } = service;

    return (
        <Col lg={4} sm={12} className="text-center p-4">
            <img className="pb-5" src={img} alt="" />
            <h2 className="py-4 service-title">{title}</h2>
            <p className="service-para">{description}</p>
        </Col>
    );
};

export default HomeService;