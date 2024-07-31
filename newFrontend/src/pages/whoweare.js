import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import WhoweareDetails from "../components/who-we-are/whoweare";

const whoweare = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="Who We Are" currentPage="Who We Are" />
      <WhoweareDetails />
      <FooterOne />
    </>
  );
};

export default whoweare;
