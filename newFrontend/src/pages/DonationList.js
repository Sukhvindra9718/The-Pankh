import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DonationListContent from '../components/donation/DonationListContent';
import FooterOne from '../common/footer/FooterOne';

const DonationList = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Donation List"
                currentPage="Donation List" 
            />
            <DonationListContent />
            <FooterOne />
        </>
    )
}

export default DonationList;