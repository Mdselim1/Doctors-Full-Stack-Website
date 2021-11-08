import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../Blogs/Blog/Blog';
import DrSaudi from '../../images/people-1.png';
import Jahn from '../../images/people-2.png';
import './Blogs.css';

const Blogs = () => {

    const blog_data = [
        { name: 'Dr. Caudi',img:DrSaudi, date: '23 April , 2021', instruction: '2 times of brush in a day can keep your teath healthy', description: 'It is a long established fact that a reader will be distracted by the reabable of a page when looking at this .' },
        { name: 'Dr. Jahn Micheal',img:Jahn, date: '23 April , 2021', instruction: 'The tooth cancer talking a challange', description: 'It is a long established fact that a reader will be distracted by the reabable of a page when looking at this .' }
    ];


    return (
        <div>
             <h3 className="text-center py-5 text-uppercase main-title">Our Blog</h3>
            <h1 className="text-center pb-5 main-title-2">From Our Blog News</h1>
            <div className="my-5">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="blog-default p-4">
                            <h3 className="blog-name"> Rashed Kabir </h3>
                            <p>22 Aug , 2021</p>
                            <h3> Check At Least A Doctor in a year for your teath</h3>
                            <span><i className="fas fa-long-arrow-alt-right"></i></span>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row>
                                {
                                    blog_data.map(blog=> <Blog key={blog.name} blog={blog}></Blog>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default Blogs;