import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import GalleryOne from "../components/gallery/GalleryOne";
import FooterOne from "../common/footer/FooterOne";
import { useLocation } from "react-router-dom";
import GalleryTwo from "../components/gallery/GalleryTwo";

const Gallery = () => {
  const location = useLocation();

  return (
    <>
      <HeaderOne />
      {location.pathname === "/videos" ? (
        <Breadcrumb heading="Videos" currentPage="Videos" />
      ) : (
        <Breadcrumb heading="Images" currentPage="Images" />
      )}
      {location.pathname === "/videos" ? <GalleryTwo /> : <GalleryOne />}
      <FooterOne />
    </>
  );
};

export default Gallery;
