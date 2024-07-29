import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DonateOne from '../components/donation/DonateOne';
import FooterOne from '../common/footer/FooterOne';

const DonateNow = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Donate Now"
                currentPage="Donate Now" 
            />
            <DonateOne />
            <FooterOne />
        </>
    )
}

export default DonateNow;