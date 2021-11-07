import React from 'react';
import { Col } from 'react-bootstrap';


const Blog = ({ blog }) => {
    
    const { name , date ,img, instruction,description} = blog;


    return (
        <Col lg={6}>
            <div className="single-blog p-4 shadow-lg">
            <div className="d-flex align-items-center justify-content-center">
                <img className="me-3" src={img} alt="" />
                <div>
                    <h6>{name}</h6>
                    <span>{date}</span>
                </div>
            </div>
            <h4>{instruction}</h4>
            <p>{description}</p>
            </div>
        </Col>
    );
};

export default Blog;