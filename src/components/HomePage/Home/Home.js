import React from 'react';
import Header from '../../Shared/Header/Header';
import Appointment from '../Appointment/Appointment';
import Exceptional from '../Exceptional/Exceptional';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeServices />
            <Exceptional />
            <Appointment/>
        </div>
    );
};

export default Home;