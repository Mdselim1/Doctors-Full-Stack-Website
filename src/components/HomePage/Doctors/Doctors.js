import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DocImg from '../../images/doctor-small.png';
import Doctor from './Doctor/Doctor';

const Doctors = () => {

    const doctors_data = [
        {name:'Dr. Abal',number:'01932770584',img:DocImg},
        {name:'Dr. Sabal',number:'0193252454',img:DocImg},
        { name: 'Dr. Babal', number: '4444548456', img: DocImg },
    ]

    return (
        <div className="py-5">
            <h3 className="text-center py-5 text-uppercase main-title">Our Doctors</h3>
            <Container>
                <Row>
                    {
                        doctors_data.map(doctor=> <Doctor key={doctor.name} doctor={doctor}></Doctor>)
                    }
                </Row>
            </Container>
            
        </div>
    );
};

export default Doctors;