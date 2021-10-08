import React from 'react';
import NavBar from '../../Share/NavBar';
import SocialBar from '../../Share/SocialBar';
import Footer from '../../Share/Footer';
import ContactMain from './ContactMain';
const Contact = () => {
    return (
        <div>
            <SocialBar />
            <NavBar />
            <ContactMain />
            <Footer />
        </div>
    );
};

export default Contact;