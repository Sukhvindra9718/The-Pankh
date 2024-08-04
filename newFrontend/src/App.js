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
import Dashboard from "./superAdmin/AdminPanel/AdminPanel";
import ScrollToTopRoute from "./components/scroll-to-top-route/ScrollToTopRoute";
import Login from "./pages/Login";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

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
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          exact
          element={<HomeDefault />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/about`}
          exact
          element={<About />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/team`}
          exact
          element={<Team />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/projects`}
          exact
          element={<Projects />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/project-details`}
          exact
          element={<ProjectDetails />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/testimonials`}
          exact
          element={<Testimonials />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/gallery`}
          exact
          element={<Gallery />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/donation`}
          exact
          element={<Donation />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/donation-details`}
          exact
          element={<DonationDetails />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/donate-now`}
          exact
          element={<DonateNow />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/Events`}
          exact
          element={<Events />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/blogs`}
          exact
          element={<BlogVersionOne />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/blog-details/:id`}
          exact
          element={<BlogDetails />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/contact`}
          exact
          element={<Contact />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/dashboard`}
          exact
          element={<Dashboard />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/login`}
          exact
          element={<Login />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/whoweare`}
          exact
          element={<Whoweare />}
        />
        <Route path={`${process.env.PUBLIC_URL}/*`} exact element={<Error />} />
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
