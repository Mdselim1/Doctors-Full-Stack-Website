import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import LogIn from '../../images/login.png';


const Login = () => {

    const { register, handleSubmit } = useForm();
    
    const LogInSubmitForm = data => {
        console.log(data);
    }

    return (
        <div>
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <form onSubmit={handleSubmit(LogInSubmitForm)}>      
                <FloatingLabel
                    controlId="floatingInput"
                    label="Enter email"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="Enter your email" {...register('email')} />
                </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Enter password">
                    <Form.Control type="password" placeholder="Enter your password"  {...register('password')} />
                            </FloatingLabel>
                            <button type="submit" className="common-button w-100 border-0"> Log In <i class="fas fa-arrow-circle-right ms-3"></i></button>
                        </form>
                        <h3 className="text-center">Google Log In</h3>
                        <button className="common-button w-100 border-0" type="submit"><i class="fab fa-google me-3"></i> Google Sign In <i class="fas fa-arrow-circle-right ms-3"></i></button>
                    </Col>
                    <Col lg={7}>
                        <img className="img-fluid" src={LogIn} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;