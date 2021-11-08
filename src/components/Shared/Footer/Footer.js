import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    
    return (
        <footer className="footer-box p-5">
            <Container fluid>
                <Row>
                    <Col lg={3} sm={12}>
                        <div className="footer-signle left-single">
                            <ul className="footer-services">
                                <li>Emergency Dental Care</li>
                                <li>Check Up</li>
                                <li>Treatment and Personal Diseases</li>
                                <li>Tooth Extraction</li>
                                <li>Check up</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} sm={12}>
                        <div className="footer-signle">
                            <h3 className="footer-head-title">Services</h3>
                            <ul className="footer-services">
                                <li>Emergency Dental Care</li>
                                <li>Check Up</li>
                                <li>Treatment and Personal Diseases</li>
                                <li>Tooth Extraction</li>
                                <li>Check up</li>
                                <li>Emergency Dental Care</li>
                                <li>Check up</li>
                                <li>Emergency Dental Care</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} sm={12}>
                        <div className="footer-signle">
                            <h3 className="footer-head-title">Oral Health</h3>
                            <ul className="footer-services">
                            <li>Tooth Extraction</li>
                                <li>Check up</li>
                                <li>Emergency Dental Care</li>
                                <li>Check up</li>
                                <li>Emergency Dental Care</li>
                                <li>Emergency Dental Care</li>
                                <li>Check Up</li>
                                <li>Treatment and Personal Diseases</li>                                
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3} sm={12}>
                        <div className="footer-signle">
                            <h3 className="footer-head-title">Our Address</h3>
                            <h5 className="footer-address">New York , 1010, Hudson Yards</h5>
                            <ul className="social-link mb-3">
                                <li><i class="fab fa-facebook-f"></i></li>
                                <li><i class="fab fa-twitter"></i></li>
                                <li><i class="fab fa-google-plus-g"></i></li>
                            </ul>
                            <h5 className="mt-5 call-now">Call Now</h5>
                            <p className="common-button">+88566414564</p>
                        </div>
                    </Col>
                </Row>
                <div className="footer-copyright text-center mt-5">
                    <p>&copy; All right reserved by 2021 || Selim</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;