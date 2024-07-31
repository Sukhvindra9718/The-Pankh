import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ProjectDetailsContent from '../components/project-details/ProjectDetailsContent';
import FooterOne from '../common/footer/FooterOne';

const ProjectDetails = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Projects Details"
                currentPage="Projects Details" 
            />
            <ProjectDetailsContent />
            <FooterOne />
        </>
    )
}

export default ProjectDetails;