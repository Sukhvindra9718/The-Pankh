import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import RecentEventsOne from '../components/events/RecentEventsOne';
import CausesOne from '../components/causes/CausesOne';
import FooterOne from '../common/footer/FooterOne';

const Events = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Events"
                currentPage="Events" 
            />
            <RecentEventsOne />
            <CausesOne />
            <FooterOne />
        </>
    )
}

export default Events;