import React from 'react';
import { Col } from 'react-bootstrap';
import './Blog.css';


const Blog = ({ blog }) => {
    
    const { name , date ,img, instruction,description} = blog;


    return (
        <Col lg={6}>
            <div className="single-blog p-4 shadow-lg">
            <div className="d-flex align-items-center justify-content-center">
                <img className="me-3" src={img} alt="" />
                <div>
                    <h6 className="fw-bold">{name}</h6>
                    <span className="blog-data">{date}</span>
                </div>
            </div>
            <h4 className="my-4 fw-bold">{instruction}</h4>
            <p className="review-para">{description}</p>
            </div>
        </Col>
    );
};

export default Blog;