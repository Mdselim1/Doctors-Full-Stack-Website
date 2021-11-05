import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Testimonial.css';
import WinsonHarry from '../../images/people-1.png';
import LarryHillay from '../../images/people-2.png';
import CamleFloren from '../../images/people-3.png';
import SingleTestimonial from './SingleTestimonial/SingleTestimonial';

const Testimonial = () => {

    const testimonial_data = [
        {
            description: 'It is a long established fact that by the readable content of a lot layout, The problem of using common a more or less distibruting to using content here, Content ',
            name: 'Winson Herry',
            img: WinsonHarry,
            address:'California'
        },
        {
            description: 'It is a long established fact that by the readable content of a lot layout, The problem of using common a more or less distibruting to using content here, Content ',
            name: 'Larry Hillay',
            img: LarryHillay,
            address:'Newyork'
        },
        {
            description: 'It is a long established fact that by the readable content of a lot layout, The problem of using common a more or less distibruting to using content here, Content ',
            name: 'Camle Floren',
            img: CamleFloren,
            address:'San Francisco'
        },
    ]

    return (
        <div className="pb-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} sm={12}>
                    <h4 className="py-4 text-uppercase main-title">Testimonial</h4>
                <h1 className="banner-text-title">What's Our Patient's <br/> Says</h1>
                </Col>
                    <Col lg={6} sm={12}>
                        <div className="text-end">
                        <i className="fas fa-quote-left right-quote"></i>
                    </div>
                </Col>
                </Row>
                <div className="testimonial-review py-5">
                    <Row>
                        {
                            testimonial_data.map(testimonial=> <SingleTestimonial testimonial={testimonial} key={testimonial.name}></SingleTestimonial>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Testimonial;