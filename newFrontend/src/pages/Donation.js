import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DonationListContent from '../components/donation/DonationListContent';
import FooterOne from '../common/footer/FooterOne';

const Donation = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Donation"
                currentPage="Donation" 
            />
            <DonationListContent />
            <FooterOne />
        </>
    )
}

export default Donation;