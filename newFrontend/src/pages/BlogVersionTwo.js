import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogTwo from '../components/blog/BlogTwo';
import FooterOne from '../common/footer/FooterOne';

const BlogVersionTwo = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Blog Post"
                currentPage="Blog V-2" 
            />
            <BlogTwo />
            <FooterOne />
        </>
    )
}

export default BlogVersionTwo;