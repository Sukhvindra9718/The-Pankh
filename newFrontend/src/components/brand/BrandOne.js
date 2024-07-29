import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

export default class BrandOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="brand-one brand-two">
                    <div className="container">
                        <Swiper 
                            loop={true}
                            spaceBetween={100}
                            slidesPerView={5}
                            speed={1400}
                            freeMode={true}
                            watchSlidesVisibility={true}
                            watchSlidesProgress={true}
                            autoplay={{delay:   5000}}
                            breakpoints={{
                                "0": {
                                    spaceBetween: 30,
                                    slidesPerView: 2
                                },
                                375: {
                                    spaceBetween: 30,
                                    slidesPerView: 2
                                },
                                575: {
                                    spaceBetween: 30,
                                    slidesPerView: 2
                                },
                                767: {
                                    spaceBetween: 50,
                                    slidesPerView: 4
                                },
                                991: {
                                    spaceBetween: 50,
                                    slidesPerView: 5
                                },
                                1199: {
                                    spaceBetween: 100,
                                    slidesPerView: 5
                                }
                            }}
                            className="thm-swiper__slider swiper-container">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/brand-1-1.png"} alt="" /></Link>
                                    <div className="brand-one__overly">
                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/overly-brand-1-1.png"} alt="" /></Link>
                                    </div>
                                </SwiperSlide>
                                {/* swiper-slide */}
                                <SwiperSlide className="swiper-slide">
                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/brand-1-2.png"} alt="" /></Link>
                                    <div className="brand-one__overly">
                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/overly-brand-1-2.png"} alt="" /></Link>
                                    </div>
                                </SwiperSlide>
                                {/* swiper-slide */}
                                <SwiperSlide className="swiper-slide">
                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/brand-1-3.png"} alt="" /></Link>
                                    <div className="brand-one__overly">
                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/overly-brand-1-3.png"} alt="" /></Link>
                                    </div>
                                </SwiperSlide>
                                {/* swiper-slide */}
                                <SwiperSlide className="swiper-slide">
                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/brand-1-4.png"} alt="" /></Link>
                                    <div className="brand-one__overly">
                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/overly-brand-1-4.png"} alt="" /></Link>
                                    </div>
                                </SwiperSlide>
                                {/* swiper-slide */}
                                <SwiperSlide className="swiper-slide">
                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/brand-1-5.png"} alt="" /></Link>
                                    <div className="brand-one__overly">
                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/overly-brand-1-5.png"} alt="" /></Link>
                                    </div>
                                </SwiperSlide>
                                {/* swiper-slide */}
                                <SwiperSlide className="swiper-slide">
                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/brand-1-1.png"} alt="" /></Link>
                                    <div className="brand-one__overly">
                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/overly-brand-1-1.png"} alt="" /></Link>
                                    </div>
                                </SwiperSlide>
                                {/* swiper-slide */}
                                <SwiperSlide className="swiper-slide">
                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/brand-1-2.png"} alt="" /></Link>
                                    <div className="brand-one__overly">
                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/overly-brand-1-2.png"} alt="" /></Link>
                                    </div>
                                </SwiperSlide>
                                {/* swiper-slide */}
                                <SwiperSlide className="swiper-slide">
                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/brand-1-3.png"} alt="" /></Link>
                                    <div className="brand-one__overly">
                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/overly-brand-1-3.png"} alt="" /></Link>
                                    </div>
                                </SwiperSlide>
                                {/* swiper-slide */}
                                <SwiperSlide className="swiper-slide">
                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/brand-1-4.png"} alt="" /></Link>
                                    <div className="brand-one__overly">
                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/overly-brand-1-4.png"} alt="" /></Link>
                                    </div>
                                </SwiperSlide>
                                {/* swiper-slide */}
                                <SwiperSlide className="swiper-slide">
                                    <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/brand-1-5.png"} alt="" /></Link>
                                    <div className="brand-one__overly">
                                        <Link to={process.env.PUBLIC_URL + `/`}><img src={publicUrl+"assets/images/brand/overly-brand-1-5.png"} alt="" /></Link>
                                    </div>
                                </SwiperSlide>
                                {/* swiper-slide */}
                            </div>
                        </Swiper>
                    </div>
                </section>
            </>
        )
    }
}