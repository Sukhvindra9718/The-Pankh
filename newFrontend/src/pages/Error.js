import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ErrorContent from '../components/error/ErrorContent';
import FooterOne from '../common/footer/FooterOne';

const Error = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="404 Error"
                currentPage="404 Error" 
            />
            <ErrorContent msg={"Sorry This Page Not found take a look at our most popular"}/>
            <FooterOne />
        </>
    )
}

export default Error;