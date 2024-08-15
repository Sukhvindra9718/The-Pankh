import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ErrorContent from '../components/error/ErrorContent';
import FooterOne from '../common/footer/FooterOne';

const SomethingWentWrong = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Something Went Wrong"
                currentPage="Something Went Wrong" 
            />
            <ErrorContent msg={"Something Went Wrong, Please Try Again After Sometime"}/>
            <FooterOne />
        </>
    )
}

export default SomethingWentWrong;