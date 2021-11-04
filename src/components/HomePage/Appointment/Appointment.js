import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Doctor from '../../images/doctor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment-doctor-box">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="doctor-img">
                            <img className="img-fluid" src={Doctor} alt="" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                        <h4 className="py-4 text-uppercase main-title">Appointment</h4>
                        <h1 className="appointment-title">Make An Appointment <br />Today</h1>
                        <p className="appoinment-para mt-3">It is a long established fact that a reader will be distracted by the reabable of a page when looking at this .</p>
                        <Link className="common-button">Learn More <i className="fas fa-arrow-right ms-3"></i></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Appointment;