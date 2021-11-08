import React from 'react';
import './Contact.css';

const Contact = () => {

    const handleContactSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="contact-form-box py-4 mb-5">
            <h3 className="text-center py-5 text-uppercase main-title">Contact Us</h3>
            <h1 className="text-center contact-title">Always Connect With Us</h1>
            <div className="contact-form py-5">
            <form onSubmit={handleContactSubmit} className="text-center">
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your Subject" />
                    <textarea cols="15" rows="5" placeholder="Enter your Messege" ></textarea>
                    <button type="submit" className="common-button border-0">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default Contact;