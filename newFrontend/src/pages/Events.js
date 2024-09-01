import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FooterOne from '../common/footer/FooterOne';
import RecentEvents from '../components/events/RecentEvents';

const Events = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb
                heading="Events"
                currentPage="Events"
            />
            <RecentEvents />
            <FooterOne />
        </>
    )
}

export default Events;