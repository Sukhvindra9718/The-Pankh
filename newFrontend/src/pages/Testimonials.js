import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TestimonialFour from '../components/testimonial/TestimonialFour';
import FooterOne from '../common/footer/FooterOne';

const Testimonials = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Testimonials"
                currentPage="Testimonials" 
            />
            <TestimonialFour />
            <FooterOne />
        </>
    )
}

export default Testimonials;