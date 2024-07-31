import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamDetailsContent from '../components/team-details/TeamDetailsContent';
import FooterOne from '../common/footer/FooterOne';

const TeamDetails = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Team Details"
                currentPage="Team Details" 
            />
            <TeamDetailsContent />
            <FooterOne />
        </>
    )
}

export default TeamDetails;