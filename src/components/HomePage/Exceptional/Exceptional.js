import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Treatment from '../../images/treatment.png';
import './Exceptional.css';

const Exceptional = () => {
    return (
        <div className="mb-5 pb-5">
            <Container>
            <Row className="align-items-center">
                <Col lg={6} sm={12}>
                        <img className="img-fluid rounded-2" src={Treatment} alt="" />    
                </Col>
                <Col lg={6} sm={12}>
                    <h1 className="banner-text-title">Exceptional Dental Care, On Your Terms</h1>
                    <p className="service-para exceptional-para">We are committed to providing quality dental care to families located in the Huntington Beach area. We treat patients of all ages and provide comprehensive solutions for our patients’ oral health needs. Believing in the importance of listening to our patients, we take the time to truly understand each patient’s needs and goals. By understanding our patients’ objectives, we can provide solutions that will improve their oral health while transforming their smile into something bright and beautiful.We are committed to providing quality dental care to families located in the Huntington Beach area. We treat patients of all ages and provide comprehensive solutions for our patients’ oral health needs. Believing in the importance of listening to our patients, we take the time to truly understand each patient’s needs and goals. By understanding our patients’ objectives, we can provide solutions that will improve their oral health while transforming their smile into something bright and beautiful.</p>
                    <Link className="common-button">Learn More <i className="fas fa-arrow-right ms-3"></i></Link>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Exceptional;