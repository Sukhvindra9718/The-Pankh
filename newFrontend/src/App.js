import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from "wowjs";
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/HomeDefault";
import About from "./pages/About";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Donation from "./pages/Donation";
import DonationDetails from "./pages/DonationDetails";
import DonateNow from "./pages/DonateNow";
import Events from "./pages/Events";
import BlogVersionOne from "./pages/BlogVersionOne";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Whoweare from "./pages/whoweare";
import Error from "./pages/Error";
import Dashboard from "./SuperAdmin/AdminPanel/AdminPanel";
import ScrollToTopRoute from "./components/scroll-to-top-route/ScrollToTopRoute";
import Login from "./pages/Login";
import ThePankhModel from "./pages/ThePankhModel";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import SomethingWentWrong from "./pages/SomethingWentWrong";
import Images from "./pages/Images";

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <Router>
      <ScrollToTopRoute />
      <Routes>
        <Route path={`/`} exact element={<HomeDefault />} />
        <Route path={`/about`} exact element={<About />} />
        <Route path={`/team`} exact element={<Team />} />
        <Route path={`/projects`} exact element={<Projects />} />
        <Route path={`/project-details`} exact element={<ProjectDetails />} />
        <Route path={`/testimonials`} exact element={<Testimonials />} />
        <Route path={`/videos`} exact element={<Gallery />} />
        <Route path={`/image`} element={<Images />} />
        <Route path={`/donation`} exact element={<Donation />} />
        <Route path={`/donation-details`} exact element={<DonationDetails />} />
        <Route path={`/donate-now`} exact element={<DonateNow />} />
        <Route path={`/Events`} exact element={<Events />} />
        <Route path={`/blogs`} exact element={<BlogVersionOne />} />
        <Route path={`/blog-details/:id`} exact element={<BlogDetails />} />
        <Route path={`/contact`} exact element={<Contact />} />
        <Route path={`/dashboard`} exact element={<Dashboard />} />
        <Route path={`/login`} exact element={<Login />} />
        <Route path={`/whoweare`} exact element={<Whoweare />} />
        <Route path={`/thepankhmodel`} exact element={<ThePankhModel />} />
        
        <Route path={`/error`} exact element={<SomethingWentWrong />} />
        <Route path={`*`} exact element={<Error />} />
      </Routes>
      <ScrollToTop
        className="scrollUp"
        smooth
        top="1500"
        component={<FaAngleUp />}
      />
    </Router>
  );
}

export default App;
