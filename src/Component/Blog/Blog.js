import React from 'react';
import NavBar from '../../Share/NavBar';
import SocialBar from '../../Share/SocialBar';
import Footer from '../../Share/Footer';
import BlogMain from './BlogMain';
const Blog = () => {
    return (
        <div>
            <NavBar />
            <SocialBar />
            <BlogMain />
            <Footer />
        </div>
    );
};

export default Blog;