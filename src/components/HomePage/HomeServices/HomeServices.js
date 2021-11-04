import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Flouride from '../../images/fluoride.png';
import Cavity from '../../images/cavity.png';
import TeethWhite from '../../images/whitening.png';
import HomeService from './HomeService/HomeService';
import './HomeServices.css';

const HomeServices = () => {

    const homeservices =[
        {
            title: 'Fluoride TreatMent',
            description: 'Our mission is to provide high quality dentistry in a comfortable efficient and compassionate environment of care.',
            img:Flouride
        },
        {
            title: 'Cavity Feeling',
            description: 'Our mission is to provide high quality dentistry in a comfortable efficient and compassionate environment of care.',
            img:Cavity
        },
        {
            title: 'Teeth Whitening',
            description: 'Our mission is to provide high quality dentistry in a comfortable efficient and compassionate environment of care.',
            img:TeethWhite
        }
    ]

    return (
        <div className="py-5">
            <h3 className="text-center py-5 text-uppercase main-title">Our Services</h3>
            <h1 className="text-center pb-5 main-title-2">Services We Provide</h1>
            <Container className="py-5">
                <Row>
                    {
                        homeservices.map(service => <HomeService service={service} key={service.title}></HomeService>)
                  }
                </Row>
            </Container>
        </div>
    );
};

export default HomeServices;