import React from 'react';
import NavBar from '../../Share/NavBar';
import SocialBar from '../../Share/SocialBar';
import Footer from '../../Share/Footer';
import AboutMain from './AboutMain';

const About = () => {
    return (
        <div>
            <SocialBar />
            <NavBar />
            <AboutMain />
            <Footer />
        </div>
    );
};

export default About;