import React from "react";
import { Link } from "react-router-dom";
import { API_URL,PROD_URL,ENV } from "../../config";
import { useState, useEffect } from "react";
import axios from "axios";

function Breadcrumb(props) {
  const [banner, setBanner] = useState([]);

  let heading = props.heading;
  //   let publicUrl = process.env.PUBLIC_URL + "/";
  let currentPage = props.currentPage ? props.currentPage : heading;
  //   let Img = props.Img ? props.Img : "page-header-bg.jpg";

  const getAllBanner = async () => {
    try {
      const res = await axios.get(
        `${ENV === "dev" ? API_URL:PROD_URL}/api/v1/banner/${props.currentPage}`
      );

      if (res.data.success) {
        setBanner(res.data.banner);
      } else {
        console.log(res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBanner("about");
    return () => {
      setTimeout(() => {
        const $ = window.$;

        if ($(".video-popup").length) {
          $(".video-popup").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false,
          });
        }
      }, 2000);
    };
  }, []);
  console.log(banner);
  return (
    <>
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: `url(${banner.fileurl})`,
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>{heading}</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to={process.env.PUBLIC_URL + `/`}>Home</Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="active">{currentPage}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Breadcrumb;
