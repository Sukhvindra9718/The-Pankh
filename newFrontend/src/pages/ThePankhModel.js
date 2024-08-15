import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import ThePankhModelDetails from "../components/who-we-are/ThePankhModel";

const ThePankhModel = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="The PANKH's Model" currentPage="ThePankhModel" />
      <ThePankhModelDetails />
      <FooterOne />
    </>
  );
};

export default ThePankhModel;
