import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import CounterTwo from "../components/counter/CounterTwo";
import FeatureTwo from "../components/features/FeatureOne";
import AboutOne from "../components/about/AboutOne";
import CausesFour from "../components/causes/CausesFour";
import ProjectOne from "../components/project/ProjectOne";
import BrandTwo from "../components/brand/BrandTwo";
import SkillOne from "../components/skills/SkillOne";
import TeamOne from "../components/team/TeamOne";
import VideoOne from '../components/video/VideoOne';
import TestimonialOne from '../components/testimonial/TestimonialOne';
import BlogSectionThree from '../components/blog/BlogSectionThree';
import FooterOne from '../common/footer/FooterOne';

const HomeDefault = () => {
    return (
        <>
            <HeaderOne />
            <HeroOne />
            <CounterTwo />
            <FeatureTwo />
            <AboutOne />
            <CausesFour />
            <ProjectOne />
            <BrandTwo />
            <SkillOne />
            <TeamOne />
            <VideoOne />
            <TestimonialOne />
            <BlogSectionThree />
            <FooterOne />
        </>
    )
}

export default HomeDefault;