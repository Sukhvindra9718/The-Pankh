import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AboutOne from '../components/about/AboutOne';
import ProjectOne from '../components/project/ProjectOne';
import SkillsOne from '../components/skills/SkillOne';
import TeamOne from '../components/team/TeamOne';
import VideoOne from '../components/video/VideoOne';
import TestimonialOne from '../components/testimonial/TestimonialOne';
// import BlogOne from '../components/blog/BlogOne';
import FooterOne from '../common/footer/FooterOne';
import CounterOne from '../components/counter/CounterOne';
const About = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="About Us"
                currentPage="About" 
            />
            <AboutOne />
            <CounterOne />
            <ProjectOne />
            <SkillsOne />
            <TeamOne />
            <VideoOne />
            <TestimonialOne />
            <FooterOne />
        </>
    )
}

export default About;