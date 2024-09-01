import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import GalleryTwo from "../components/gallery/GalleryTwo";

const Gallery = () => {

  return (
    <>
      <HeaderOne />
      <Breadcrumb heading="Videos" currentPage="Videos" />
      <GalleryTwo />
      <FooterOne />
    </>
  );
};

export default Gallery;
