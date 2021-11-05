import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleTestimonial.css';

const SingleTestimonial = ({ testimonial }) => {

    const { name , description,address , img} = testimonial;
    return (
        <Col lg={4} sm={12}>
            <div className="p-4 shadow">
                <p className="pb-3 review-para">{description}</p>
                <div className="d-flex align-items-center justify-content-center mt-5 py-5">
                    <div className="me-3">
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <h4 className="testo-name">{name}</h4>
                        <span className="testo-address">{address}</span>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default SingleTestimonial;