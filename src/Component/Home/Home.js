import React from 'react';
import SocialBar from '../../Share/SocialBar';
import HomeMain from './HomeMain';
import MySomeProject from './MySomeProject';
import NavBar from '../../Share/NavBar';
import ProvideService from './ProvideService';
import MySomeArticle from './MySomeArticle';
import Footer from '../../Share/Footer';

const Home = () => {
    return (
        <div>
            <SocialBar />
            <NavBar />
            <HomeMain />
            <ProvideService />
            <MySomeProject />
            <MySomeArticle />
            <Footer />
        </div>
    );
};

export default Home;