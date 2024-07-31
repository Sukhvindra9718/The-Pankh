import React from 'react';
import {Link} from 'react-router-dom';

export default class SkillsOne extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        // Popular Causes Progress Bar
        if ($(".count-bar").length) {
            $(".count-bar").appear(
            function () {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
            }, {
                accY: -50
            }
            );
        }

        //Progress Bar / Levels
        if ($(".progress-levels .progress-box .bar-fill").length) {
            $(".progress-box .bar-fill").each(
            function () {
                $(".progress-box .bar-fill").appear(function () {
                var progressWidth = $(this).attr("data-percent");
                $(this).css("width", progressWidth + "%");
                });
            }, {
                accY: 0
            }
            );
        }

        //Fact Counter + Text Count
        if ($(".count-box").length) {
            $(".count-box").appear(
            function () {
                var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                    $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                    $t.find(".count-text").text(this.countNum);
                    }
                });
                }
            }, {
                accY: 0
            }
            );
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="skill-one">
                    <div className="skill-one__container">
                        <div className="skill-one__left">
                            <div className="skill-one__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/skill-one-left-bg.jpg)'}}></div>
                            <div className="skill-one__arrow-box">
                                <div className="skill-one__arrow-box-inner"></div>
                            </div>
                        </div>
                        <div className="skill-one__right">
                            <div className="skill-one__bg-two" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/skill-one-right-bg.jpg)'}}></div>
                            <div className="skill-one__content">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Our Skill Now</span>
                                    <h2 className="section-title__title">We Are To Provide Years Of Skill Now.</h2>
                                </div>
                                <p className="skill-one__text">Lorem ipsum is simply free text dolor sit amet, consectetur
                                    adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm
                                    andhn.</p>
                                <div className="progress-levels">
                                    {/* Skill Box */}
                                    <div className="progress-box">
                                        <div className="inner count-box">
                                            <div className="text">Donating</div>
                                            <div className="bar">
                                                <div className="bar-innner">
                                                    <div className="skill-percent">
                                                        <span className="count-text" data-speed="3000" data-stop="90">0</span>
                                                        <span className="percent">%</span>
                                                    </div>
                                                    <div className="bar-fill" data-percent="90"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Skill Box */}
                                    <div className="progress-box">
                                        <div className="inner count-box">
                                            <div className="text">Fundraise</div>
                                            <div className="bar">
                                                <div className="bar-innner">
                                                    <div className="skill-percent">
                                                        <span className="count-text" data-speed="3000" data-stop="82">0</span>
                                                        <span className="percent">%</span>
                                                    </div>
                                                    <div className="bar-fill" data-percent="82"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Skill Box */}
                                    <div className="progress-box last-child">
                                        <div className="inner count-box">
                                            <div className="text">Consultancy</div>
                                            <div className="bar">
                                                <div className="bar-innner">
                                                    <div className="skill-percent">
                                                        <span className="count-text" data-speed="3000" data-stop="88">0</span>
                                                        <span className="percent">%</span>
                                                    </div>
                                                    <div className="bar-fill" data-percent="88"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn skill-one__btn">Skill More</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}