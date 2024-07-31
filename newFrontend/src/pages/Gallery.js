import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import GalleryOne from '../components/gallery/GalleryOne';
import FooterOne from '../common/footer/FooterOne';

const Gallery = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Gallery"
                currentPage="Gallery" 
            />
            <GalleryOne />
            <FooterOne />
        </>
    )
}

export default Gallery;