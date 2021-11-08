import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Exceptional from '../Exceptional/Exceptional';
import HomeServices from '../HomeServices/HomeServices';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeServices />
            <Exceptional />
            <Appointment />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;