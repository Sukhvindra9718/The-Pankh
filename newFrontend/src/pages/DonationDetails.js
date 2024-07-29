import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DonationDetailsContent from '../components/donation/DonationDetailsContent';
import FooterOne from '../common/footer/FooterOne';

const DonationDetails = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Donation Details"
                currentPage="Donation Details" 
            />
            <DonationDetailsContent />
            <FooterOne />
        </>
    )
}

export default DonationDetails;