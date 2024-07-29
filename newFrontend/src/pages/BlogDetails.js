import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SingleBlogDetails from '../components/single-blog/SingleBlogDetails';
import FooterOne from '../common/footer/FooterOne';

const BlogDetails = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Blog details"
                currentPage="Blog details" 
            />
            <SingleBlogDetails />
            <FooterOne />
        </>
    )
}

export default BlogDetails;