import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogOne from '../components/blog/BlogOne';
import FooterOne from '../common/footer/FooterOne';

const BlogVersionOne = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Blog Post"
                currentPage="Blog V-2" 
            />
            <BlogOne />
            <FooterOne />
        </>
    )
}

export default BlogVersionOne;