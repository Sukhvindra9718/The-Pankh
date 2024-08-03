import React from 'react'
import DashboardOverview from "../Pages/DashboardOverview";
import Gallery from '../Pages/Gallery';
import ContactOverview from '../Pages/ContactOverview';
import BannerOverview from '../Pages/BannerOverview';
import KeyContactsOverview from '../Pages/KeyContactsOverview';
import CarousalOverview from '../Pages/CarousalOverview';
import VolunteerOverview from '../Pages/VolunteerOverview';
import TestimonialOverview from '../Pages/TestimonialOverview';


function Main({ menuActive, submenuActive }) {
  return (
    <div className='main'>
      {menuActive === 0 && <DashboardOverview />}
      {menuActive === 1 && <Gallery submenuActive={submenuActive} />}
      {menuActive === 2 && <ContactOverview />}
      {menuActive === 3 && <BannerOverview />}
      {menuActive === 4 && <KeyContactsOverview />}
      {menuActive === 5 && <CarousalOverview />}
      {menuActive === 6 && <VolunteerOverview />}
      {menuActive === 7 && <TestimonialOverview />}
    </div>

  )
}

export default Main
