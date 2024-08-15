import React from "react";
import DashboardOverview from "../Pages/DashboardOverview";
import Gallery from "../Pages/Gallery";
import ContactOverview from "../Pages/ContactOverview";
import BannerOverview from "../Pages/BannerOverview";
import KeyContactsOverview from "../Pages/KeyContactsOverview";
import CarousalOverview from "../Pages/CarousalOverview";
import VolunteerOverview from "../Pages/VolunteerOverview";
import NewsOverview from "../Pages/NewsOverview";
import TestimonialOverview from "../Pages/TestimonialOverview";
import EventsOverview from "../Pages/EventsOverview";
import ProjectOverview from "../Pages/ProjectOverview";
import FundOverview from "../Pages/FundOverview";
import DonationsOverview from "../Pages/DonationsOverview";
import BankDetailsOverview from "../Pages/BankDetailsOverview";

function Main({ menuActive, submenuActive }) {
  return (
    <div className="main">
      {menuActive === 0 && <DashboardOverview />}
      {menuActive === 1 && <Gallery submenuActive={submenuActive} />}
      {menuActive === 2 && <ContactOverview />}
      {menuActive === 3 && <BannerOverview />}
      {menuActive === 4 && <KeyContactsOverview />}
      {menuActive === 5 && <CarousalOverview />}
      {menuActive === 6 && <VolunteerOverview />}
      {menuActive === 7 && <NewsOverview />}
      {menuActive === 8 && <TestimonialOverview />}
      {menuActive === 9 && <EventsOverview />}
      {menuActive === 10 && <ProjectOverview />}
      {menuActive === 11 && <FundOverview />}
      {menuActive === 12 && <DonationsOverview />}
      {menuActive === 13 && <BankDetailsOverview />}
    </div>
  );
}

export default Main;
