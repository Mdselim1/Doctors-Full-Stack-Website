import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerRightImage from '../../images/chair.png'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="banner-img">
            <div>
            <Navbar collapseOnSelect expand="lg">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto text-center">
      <Nav.Link className="black-white" as={Link} to="/home">Home</Nav.Link>
      <Nav.Link className="black-white" as={Link} to="">About</Nav.Link>
      <Nav.Link className="black-white" as={Link} to="">Dental Service</Nav.Link>
      <Nav.Link className="white-black" as={Link} to="">Reviews</Nav.Link>
      <Nav.Link className="white-black" as={Link} to="">Blog</Nav.Link>
      <Nav.Link className="white-black" as={Link} to="">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
            </Navbar>
            </div>
            <div className="banner-content">
            <Container>
                <Row className="align-items-center"> 
                    <Col lg={6} sm={12}>
                    <div className="banner-content-text">
                    <h1 className="banner-text-title">Your New Smile<br /> Start Here</h1>
                            <p className="banner-text-para">Our mission is to provide high quality dentistry in a comfortable,efficient and compassionate environment of care.We further strive to educate our children and parentsin preventative dentistry as a way of life.</p>
                                    <Link className="common-button">Get Appointment <i className="fas fa-arrow-right ms-3"></i></Link>
                                    
            </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <img className="img-fluid" src={bannerRightImage} alt="" />
                    </Col>
            </Row>
            </Container>
            </div>
            </div>
            <div className="banner-under-content">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="similer-box-two">
                            <Row className="align-items-center">
                                <Col lg={4}>
                                <div className="icon-box text-center">
                                        <i className="far fa-clock under-icon"></i>
                                </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="under-text">
                                        <h3>Opening Hours</h3>
                                        <p>24 Hours Support</p>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="similer-box-one">
                            <Row className="align-items-center">
                                <Col lg={4}>
                                        <div className="icon-box text-center">
                                        <i className="fas fa-map-marker-alt under-icon"></i>
                                </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="under-text">
                                        <h3>Our Location</h3>
                                        <p>Brooklyn , NY10006 ,Us</p>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="similer-box-two">
                            <Row className="align-items-center">
                                <Col lg={4}>
                                        <div className="icon-box text-center">
                                        <i className="fas fa-phone-alt under-icon"></i>
                                </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="under-text">
                                        <h3>Contact Us Now</h3>
                                        <p>+880254484546</p>
                                    </div>
                                </Col>
                            </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
        </div>
    );
};

export default Header;