import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import FeatureTwo from "../components/features/FeatureOne";
import AboutOne from "../components/about/AboutOne";
import CausesFour from "../components/causes/CausesFour";
import ProjectOne from "../components/project/ProjectOne";
import SkillOne from "../components/skills/SkillOne";
import TeamOne from "../components/team/TeamOne";
import VideoOne from "../components/video/VideoOne";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import FooterOne from "../common/footer/FooterOne";
import CeoMessage from "../components/CEOMessage/CeoMessage";

const HomeDefault = () => {
  return (
    <>
      <HeaderOne />
      <HeroOne />
      <FeatureTwo />
      <CeoMessage />
      <AboutOne />
      <CausesFour />
      <ProjectOne />
      <SkillOne />
      <TeamOne />
      <VideoOne />
      <TestimonialOne />
      <FooterOne />
    </>
  );
};

export default HomeDefault;
