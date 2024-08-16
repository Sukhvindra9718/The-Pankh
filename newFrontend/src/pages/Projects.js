import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ProjectTwo from '../components/project/ProjectTwo';
import FooterOne from '../common/footer/FooterOne';

const Projects = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Our Projects"
                currentPage="Projects" 
            />
            <ProjectTwo />
            <FooterOne />
        </>
    )
}

export default Projects;