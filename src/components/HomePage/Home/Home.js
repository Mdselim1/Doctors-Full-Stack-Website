import React from 'react';
import Header from '../../Shared/Header/Header';
import Exceptional from '../Exceptional/Exceptional';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeServices />
            <Exceptional/>
        </div>
    );
};

export default Home;