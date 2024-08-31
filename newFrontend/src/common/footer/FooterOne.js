import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function FooterOne() {
  let publicUrl = process.env.PUBLIC_URL + "/";
  const [images, setImages] = useState([]);

  // Get Token from Cookie
  const getTokenFromCookie = () => {
    const name = "token=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const getAllImages = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.get(
        "https://thepankh.info/api/v1/images",
        config
      );
      console.log(data)
      setImages(data.images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllImages();
    return () => {
      setTimeout(() => {
        const $ = window.$;

        if ($(".footer-widget-one__twitter-feed-content").length) {
          $(".footer-widget-one__twitter-feed-content").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 500,
            autoplayTimeout: 5000,
            navText: [
              '<span class="fa fa-angle-left"></span>',
              '<span class="fa fa-angle-right"></span>',
            ],
            responsive: {
              0: {
                items: 1,
              },
              768: {
                items: 1,
              },
              991: {
                items: 1,
              },
              1200: {
                items: 1,
              },
            },
          });
        }
      }, 2000);
    };
  }, []);

  const [news, setNews] = React.useState([]);

  const getTwoNews = async () => {
    try {
      const res = await axios.get("https://thepankh.info/api/v1/twonews");
      if (res.data.success) {
        console.log("Fetched news data:", res.data.news); // Log the raw data

        const newslocaldatetime = res.data.news.map((news) => {
          const newsDate = new Date(news.newsdatetime);
          return {
            ...news,
            localeDate: newsDate.toLocaleDateString(),
            localeTime: newsDate.toLocaleTimeString(),
          };
        });

        setNews(newslocaldatetime);
        console.log("Updated news state:", newslocaldatetime); // Log the updated state
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getTwoNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <footer className="site-footer-one">
        <div className="site-footer-one__top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget-one__about">
                  <div className="footer-widget-one__about-logo">
                    <Link to={process.env.PUBLIC_URL + `/`}>
                      <img
                        src={publicUrl + "assets/images/logo/PANKHLogo2.png"}
                        alt=""
                        style={{ height: "48px" }}
                      />
                    </Link>
                  </div>
                  <p className="footer-widget-one__about-text">
                    Our "Leave No One Behind" initiative ensures inclusive and
                    comprehensive development for all sections of society.
                    Here’s a glimpse of what we do...
                  </p>
                  <ul className="list-unstyled footer-widget-one__list">
                    <li>
                      <div className="icon">
                        <span className="icon-place"></span>
                      </div>
                      <div className="text">
                        <p>
                          PK-22, Ground Floor, Sec-122,
                          <br /> Noida (UP)-201307
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-envelope"></span>
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:mail@thepankh.info">
                            mail@thepankh.info
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-call"></span>
                      </div>
                      <div className="text">
                        <p>
                          <a href="tel:0120-6055473">0120-6055473</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget-one__gallery clearfix">
                  <h3 className="footer-widget-one__title">Gallery</h3>
                  <ul className="footer-widget-one__gallery-list list-unstyled clearfix">
                    {
                      images.map((image, index) => (
                        index < 20 && <li key={index}>
                          <div className="footer-widget-one__gallery-img">
                            <img src={image.fileurl} alt="" />
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                `/project-details/${image.id}`
                              }
                            >
                              <span className="fa fa-link"></span>
                            </Link>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__column footer-widget-one__latest-works clearfix">
                  <h3 className="footer-widget-one__title">Latest News</h3>
                  <ul>
                    {news.map((newsItem, index) => (
                      index < 6 && <li key={index}>
                        <div className="footer-widget-one__latest-works-content">
                          <h4 className="footer-widget-one__latest-works-title">
                            <a
                              href={newsItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {newsItem.title}
                            </a>
                          </h4>
                          <p className="footer-widget-one__latest-works-date">
                            {newsItem.localeDate}, {newsItem.localeTime}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <div className="site-footer__bottom-inner">
              <p className="site-footer__bottom-text">
                © 2024 Copyright by <a href="">Pankh</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterOne;

// export default class FooterOne extends React.Component {
//   componentDidMount() {
//     const $ = window.$;

//     if ($(".footer-widget-one__twitter-feed-content").length) {
//       $(".footer-widget-one__twitter-feed-content").owlCarousel({
//         loop: true,
//         autoplay: true,
//         margin: 30,
//         nav: false,
//         dots: true,
//         smartSpeed: 500,
//         autoplayTimeout: 10000,
//         navText: [
//           '<span class="fa fa-angle-left"></span>',
//           '<span class="fa fa-angle-right"></span>',
//         ],
//         responsive: {
//           0: {
//             items: 1,
//           },
//           768: {
//             items: 1,
//           },
//           991: {
//             items: 1,
//           },
//           1200: {
//             items: 1,
//           },
//         },
//       });
//     }
//   }
//   render() {
//     let publicUrl = process.env.PUBLIC_URL + "/";
//     return (
//       <>
//         <footer className="site-footer-one">
//           <div className="site-footer-one__top">
//             <div className="container">
//               <div className="row">
//                 <div
//                   className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
//                   data-wow-delay="100ms"
//                 >
//                   <div className="footer-widget__column footer-widget-one__about">
//                     <div className="footer-widget-one__about-logo">
//                       <Link to={process.env.PUBLIC_URL + `/`}>
//                         <img
//                           src={publicUrl + "assets/images/logo/PANKHLogo2.png"}
//                           alt=""
//                           style={{ height: "48px" }}
//                         />
//                       </Link>
//                     </div>
//                     <p className="footer-widget-one__about-text">
//                       Our "Leave No One Behind" initiative ensures inclusive and
//                       comprehensive development for all sections of society.
//                       Here’s a glimpse of what we do...
//                     </p>
//                     <ul className="list-unstyled footer-widget-one__list">
//                       <li>
//                         <div className="icon">
//                           <span className="icon-place"></span>
//                         </div>
//                         <div className="text">
//                           <p>PK-22, Ground Floor, Sec-122,<br/> Noida (UP)-201307</p>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="icon">
//                           <span className="icon-envelope"></span>
//                         </div>
//                         <div className="text">
//                           <p>
//                             <a href="mailto:mail@thepankh.info">
//                             mail@thepankh.info
//                             </a>
//                           </p>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="icon">
//                           <span className="icon-call"></span>
//                         </div>
//                         <div className="text">
//                           <p>
//                             <a href="tel:0120-6055473">0120-6055473</a>
//                           </p>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div
//                   className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
//                   data-wow-delay="200ms"
//                 >
//                   <div className="footer-widget__column footer-widget-one__gallery clearfix">
//                     <h3 className="footer-widget-one__title">Gallery</h3>
//                     <ul className="footer-widget-one__gallery-list list-unstyled clearfix">
//                       <li>
//                         <div className="footer-widget-one__gallery-img">
//                           <img
//                             src={
//                               publicUrl +
//                               "assets/images/resources/footer-widget-one-gallery-1.jpg"
//                             }
//                             alt=""
//                           />
//                           <Link
//                             to={process.env.PUBLIC_URL + `/project-details`}
//                           >
//                             <span className="fa fa-link"></span>
//                           </Link>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="footer-widget-one__gallery-img">
//                           <img
//                             src={
//                               publicUrl +
//                               "assets/images/resources/footer-widget-one-gallery-2.jpg"
//                             }
//                             alt=""
//                           />
//                           <Link
//                             to={process.env.PUBLIC_URL + `/project-details`}
//                           >
//                             <span className="fa fa-link"></span>
//                           </Link>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="footer-widget-one__gallery-img">
//                           <img
//                             src={
//                               publicUrl +
//                               "assets/images/resources/footer-widget-one-gallery-3.jpg"
//                             }
//                             alt=""
//                           />
//                           <Link
//                             to={process.env.PUBLIC_URL + `/project-details`}
//                           >
//                             <span className="fa fa-link"></span>
//                           </Link>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="footer-widget-one__gallery-img">
//                           <img
//                             src={
//                               publicUrl +
//                               "assets/images/resources/footer-widget-one-gallery-4.jpg"
//                             }
//                             alt=""
//                           />
//                           <Link
//                             to={process.env.PUBLIC_URL + `/project-details`}
//                           >
//                             <span className="fa fa-link"></span>
//                           </Link>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="footer-widget-one__gallery-img">
//                           <img
//                             src={
//                               publicUrl +
//                               "assets/images/resources/footer-widget-one-gallery-5.jpg"
//                             }
//                             alt=""
//                           />
//                           <Link
//                             to={process.env.PUBLIC_URL + `/project-details`}
//                           >
//                             <span className="fa fa-link"></span>
//                           </Link>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="footer-widget-one__gallery-img">
//                           <img
//                             src={
//                               publicUrl +
//                               "assets/images/resources/footer-widget-one-gallery-6.jpg"
//                             }
//                             alt=""
//                           />
//                           <Link
//                             to={process.env.PUBLIC_URL + `/project-details`}
//                           >
//                             <span className="fa fa-link"></span>
//                           </Link>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="footer-widget-one__gallery-img">
//                           <img
//                             src={
//                               publicUrl +
//                               "assets/images/resources/footer-widget-one-gallery-7.jpg"
//                             }
//                             alt=""
//                           />
//                           <Link
//                             to={process.env.PUBLIC_URL + `/project-details`}
//                           >
//                             <span className="fa fa-link"></span>
//                           </Link>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="footer-widget-one__gallery-img">
//                           <img
//                             src={
//                               publicUrl +
//                               "assets/images/resources/footer-widget-one-gallery-8.jpg"
//                             }
//                             alt=""
//                           />
//                           <Link
//                             to={process.env.PUBLIC_URL + `/project-details`}
//                           >
//                             <span className="fa fa-link"></span>
//                           </Link>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="footer-widget-one__gallery-img">
//                           <img
//                             src={
//                               publicUrl +
//                               "assets/images/resources/footer-widget-one-gallery-9.jpg"
//                             }
//                             alt=""
//                           />
//                           <Link
//                             to={process.env.PUBLIC_URL + `/project-details`}
//                           >
//                             <span className="fa fa-link"></span>
//                           </Link>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div
//                   className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
//                   data-wow-delay="300ms"
//                 >
//                   <div className="footer-widget__column footer-widget-one__latest-works clearfix">
//                     <h3 className="footer-widget-one__title">Latest News</h3>
//                     <ul className="footer-widget-one__latest-works-list list-unstyled clearfix">
//                       <li>
//                         <div className="footer-widget-one__latest-works-content">
//                           <h4 className="footer-widget-one__latest-works-title">
//                             <Link to={process.env.PUBLIC_URL + `/blog-details`}>
//                               Change your Life Through Education
//                             </Link>
//                           </h4>
//                           <p className="footer-widget-one__latest-works-date">
//                             July 29, 20222
//                           </p>
//                         </div>
//                       </li>
//                       <li>
//                         <div className="footer-widget-one__latest-works-content">
//                           <h4 className="footer-widget-one__latest-works-title">
//                             <Link to={process.env.PUBLIC_URL + `/blog-details`}>
//                               Donate your woolens this winter
//                             </Link>
//                           </h4>
//                           <p className="footer-widget-one__latest-works-date">
//                             July 29, 20222
//                           </p>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div
//                   className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
//                   data-wow-delay="400ms"
//                 >
//                   <div className="footer-widget__column footer-widget-one__twitter-feed clearfix">
//                     <h3 className="footer-widget-one__title">Twitter Feed</h3>
//                     <div className="owl-carousel owl-theme thm-owl__carousel footer-widget-one__twitter-feed-content">
//                       <div className="footer-widget-one__twitter-feed-single">
//                         <p className="footer-widget-one__twitter-feed-text">
//                           Lorem ipsum is simply free text dolor sit amet,
//                           consectetur adipisicing elit sed do eiusmod tempor
//                           incididunt <a href="#">http://t.twitter.com</a>
//                         </p>
//                         <div className="footer-widget-one__twitter-feed-bottom">
//                           <div className="footer-widget-one__twitter-feed-icon">
//                             <span className="fab fa-twitter"></span>
//                           </div>
//                           <div className="footer-widget-one__twitter-feed-details">
//                             <h5 className="footer-widget-one__twitter-feed-name">
//                               John Smith
//                               <span>@unicktheme</span>
//                             </h5>
//                             <p className="footer-widget-one__twitter-feed-time">
//                               18 Hours Ago
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="footer-widget-one__twitter-feed-single">
//                         <p className="footer-widget-one__twitter-feed-text">
//                           Lorem ipsum is simply free text dolor sit amet,
//                           consectetur adipisicing elit sed do eiusmod tempor
//                           incididunt <a href="#">http://t.twitter.com</a>
//                         </p>
//                         <div className="footer-widget-one__twitter-feed-bottom">
//                           <div className="footer-widget-one__twitter-feed-icon">
//                             <span className="fab fa-twitter"></span>
//                           </div>
//                           <div className="footer-widget-one__twitter-feed-details">
//                             <h5 className="footer-widget-one__twitter-feed-name">
//                               Kavin Smith
//                               <span>@unicktheme</span>
//                             </h5>
//                             <p className="footer-widget-one__twitter-feed-time">
//                               18 Hours Ago
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="footer-widget-one__twitter-feed-single">
//                         <p className="footer-widget-one__twitter-feed-text">
//                           Lorem ipsum is simply free text dolor sit amet,
//                           consectetur adipisicing elit sed do eiusmod tempor
//                           incididunt <a href="#">http://t.twitter.com</a>
//                         </p>
//                         <div className="footer-widget-one__twitter-feed-bottom">
//                           <div className="footer-widget-one__twitter-feed-icon">
//                             <span className="fab fa-twitter"></span>
//                           </div>
//                           <div className="footer-widget-one__twitter-feed-details">
//                             <h5 className="footer-widget-one__twitter-feed-name">
//                               Sara Albart
//                               <span>@unicktheme</span>
//                             </h5>
//                             <p className="footer-widget-one__twitter-feed-time">
//                               18 Hours Ago
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="site-footer__bottom">
//             <div className="container">
//               <div className="site-footer__bottom-inner">
//                 <p className="site-footer__bottom-text">
//                   © 2024 Copyright by <a href="">Pankh</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </>
//     );
//   }
// }
