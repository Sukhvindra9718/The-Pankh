import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import FooterOne from '../common/footer/FooterOne';

const Contact = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Contact Us"
                currentPage="Contact" 
            />
            <ContactForm />
            <ContactInfo />
            <ContactMap />
            <FooterOne />
        </>
    )
}

export default Contact;