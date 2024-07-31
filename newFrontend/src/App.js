import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from 'wowjs';
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/HomeDefault";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import About from "./pages/About";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Donation from "./pages/Donation";
import DonationList from "./pages/DonationList";
import DonationDetails from "./pages/DonationDetails";
import DonateNow from "./pages/DonateNow";
import Events from "./pages/Events";
import BlogVersionOne from "./pages/BlogVersionOne";
import BlogVersionTwo from "./pages/BlogVersionTwo";
import BlogSidebar from "./pages/BlogSidebar";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ScrollToTopRoute from './components/scroll-to-top-route/ScrollToTopRoute';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

function App() {
  useEffect(() => {
    new WOW.WOW({
        live: false
      }).init();
    }, []
  );
  return (
    <Router>
      <ScrollToTopRoute />
        <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} exact element={<HomeDefault />} />
            <Route path={`${process.env.PUBLIC_URL}/home-two`} exact element={<HomeTwo />} />
            <Route path={`${process.env.PUBLIC_URL}/home-three`} exact element={<HomeThree />} />
            <Route path={`${process.env.PUBLIC_URL}/about`} exact element={<About />} />
            <Route path={`${process.env.PUBLIC_URL}/team`} exact element={<Team />} />
            <Route path={`${process.env.PUBLIC_URL}/team-details`} exact element={<TeamDetails />} />
            <Route path={`${process.env.PUBLIC_URL}/projects`} exact element={<Projects />} />
            <Route path={`${process.env.PUBLIC_URL}/project-details`} exact element={<ProjectDetails />} />
            <Route path={`${process.env.PUBLIC_URL}/testimonials`} exact element={<Testimonials />} />
            <Route path={`${process.env.PUBLIC_URL}/gallery`} exact element={<Gallery />} />
            <Route path={`${process.env.PUBLIC_URL}/donation`} exact element={<Donation />} />
            <Route path={`${process.env.PUBLIC_URL}/donation-list`} exact element={<DonationList />} />
            <Route path={`${process.env.PUBLIC_URL}/donation-details`} exact element={<DonationDetails />} />
            <Route path={`${process.env.PUBLIC_URL}/donate-now`} exact element={<DonateNow />} />
            <Route path={`${process.env.PUBLIC_URL}/Events`} exact element={<Events />} />
            <Route path={`${process.env.PUBLIC_URL}/blog-v-1`} exact element={<BlogVersionOne />} />
            <Route path={`${process.env.PUBLIC_URL}/blog-v-2`} exact element={<BlogVersionTwo />} />
            <Route path={`${process.env.PUBLIC_URL}/blog-sidebar`} exact element={<BlogSidebar />} />
            <Route path={`${process.env.PUBLIC_URL}/blog-details`} exact element={<BlogDetails />} />
            <Route path={`${process.env.PUBLIC_URL}/contact`} exact element={<Contact />} />
            <Route path={`${process.env.PUBLIC_URL}/*`} exact element={<Error />} />
        </Routes>
        <ScrollToTop className="scrollUp" smooth top="1500" component={<FaAngleUp />} />
    </Router>
  );
}

export default App;