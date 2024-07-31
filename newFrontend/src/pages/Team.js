import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamTwo from '../components/team/TeamTwo';
import FooterOne from '../common/footer/FooterOne';

const Team = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Team"
                currentPage="Team" 
            />
            <TeamTwo />
            <FooterOne />
        </>
    )
}

export default Team;