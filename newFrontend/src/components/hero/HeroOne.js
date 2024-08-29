import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation,Autoplay } from "swiper";
import axios from "axios";

function HeroOne() {
  const [sliderData, setSliderData] = useState([]);
  let publicUrl = process.env.PUBLIC_URL + "/";


  const getAllCarousals = async () => {
    try {
      const res = await axios.get("http://165.227.97.26:3001/api/v1/carousals");

      console.log(res.data);
      if (res.data.success) {
        setSliderData(res.data.carousal);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCarousals();
    return () => {};
  }, []);

  return (
    <>
      <section className="main-slider">
        <Swiper
          loop={true}
          slidesPerView={1}
          effect="fade"
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          modules={[EffectFade, Pagination, Navigation,Autoplay]}
          pagination={{
            el: "#main-slider-pagination",
            type: "bullets",
            clickable: true,
          }}
          navigation={{
            nextEl: "#main-slider__swiper-button-next",
            prevEl: "#main-slider__swiper-button-prev",
          }}
          className="swiper-container thm-swiper__slider"
        >
          <div className="swiper-wrapper">
            {/* Start Swiper Slide Single */}
            {sliderData.length > 0 ? (
              sliderData.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage: `url(${item.fileurl})`,
                    }}
                  ></div>
                  <div className="main-slider-shape-1"></div>
                  <div className="main-slider-shape-2"></div>
                  <div className="main-slider-shape-3 zoominout"></div>
                  <div className="main-slider-shape-4 zoominout-2"></div>

                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="main-slider__content">
                          <h2>
                            {item.title}
                          </h2>
                          <p>
                            {item.description}
                          </p>
                          <Link
                            to={process.env.PUBLIC_URL + `/about`}
                            className="thm-btn main-slider__btn"
                          >
                            Learn More
                          </Link>
                          <div className="main-slider-arrow">
                            <img
                              src={
                                publicUrl +
                                "assets/images/shapes/main-slider-shape-1.png"
                              }
                              className="float-bob-x"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage:
                        "url(" +
                        publicUrl +
                        "assets/images/backgrounds/main-slider-1-1.jpg)",
                    }}
                  ></div>
                  <div className="main-slider-shape-1"></div>
                  <div className="main-slider-shape-2"></div>
                  <div className="main-slider-shape-3 zoominout"></div>
                  <div className="main-slider-shape-4 zoominout-2"></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="main-slider__content">
                          <h2>
                           Lets Chenge The World With Humanity.
                          </h2>
                          <p>
                           There are many variations of passages of Lorem Ipsum Fasts by injected humour, or randomised words which...  Leran More  There are many variations of passages of Lorem Ipsum Fasts by injected humour, or randomised words which...  Leran More  There are many variations of passages of Lorem Ipsum Fasts by injected humour, or randomised words which..
                          </p>
                          <Link
                            to={process.env.PUBLIC_URL + `/about`}
                            className="thm-btn main-slider__btn"
                          >
                            Learn More
                          </Link>
                          <div className="main-slider-arrow">
                            <img
                              src={"https://res.cloudinary.com/dk0o7tdks/image/upload/v1724784017/thepankh/carousal/dia4mioscz2ihswgcl0o.jpg"}
                              className="float-bob-x"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage:
                        "url(" +
                        publicUrl +
                        "assets/images/backgrounds/main-slider-1-2.jpg)",
                    }}
                  ></div>
                  <div className="main-slider-shape-1"></div>
                  <div className="main-slider-shape-2"></div>
                  <div className="main-slider-shape-3 zoominout"></div>
                  <div className="main-slider-shape-4 zoominout-2"></div>
                 
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="main-slider__content">
                          <h2>
                            Lets <span>Chenge</span> The World <br /> With
                            Humanity.
                          </h2>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            Fasts by <br /> injected humour, or randomised words
                            which...{" "}
                          </p>
                          <Link
                            to={process.env.PUBLIC_URL + `/about`}
                            className="thm-btn main-slider__btn"
                          >
                            Learn More
                          </Link>
                          <div className="main-slider-arrow">
                            <img
                              src={"https://res.cloudinary.com/dk0o7tdks/image/upload/v1724784017/thepankh/carousal/dia4mioscz2ihswgcl0o.jpg"}
                              className="float-bob-x"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage:
                        "url(" +
                        publicUrl +
                        "assets/images/backgrounds/main-slider-1-3.jpg)",
                    }}
                  ></div>
                  <div className="main-slider-shape-1"></div>
                  <div className="main-slider-shape-2"></div>
                  <div className="main-slider-shape-3 zoominout"></div>
                  <div className="main-slider-shape-4 zoominout-2"></div>
                  
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7">
                        <div className="main-slider__content">
                          <h2>
                            Give the <span>Poor</span> Help <br /> for Families.
                          </h2>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            Fasts by <br /> injected humour, or randomised words
                            which...{" "}
                          </p>
                          <Link
                            to={process.env.PUBLIC_URL + `/about`}
                            className="thm-btn main-slider__btn"
                          >
                            Leran More
                          </Link>
                          <div className="main-slider-arrow">
                            <img
                              src={"https://res.cloudinary.com/dk0o7tdks/image/upload/v1724784060/thepankh/carousal/enriwek9hzfvnb4rqzep.jpg"}
                              className="float-bob-x"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            )}
          </div>

          <div className="swiper-pagination" id="main-slider-pagination"></div>

          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <i className="fa fa-long-arrow-alt-left"></i>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <i className="fa fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
}

export default HeroOne;

