import React from 'react';
import {Link} from 'react-router-dom';
import RecentDonation from '../donate-sidebar/RecentDonation';

export default class DonationListContent extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($("#donate-amount__predefined").length) {
            let donateInput = $("#donate-amount");
            $("#donate-amount__predefined")
              .find("li")
              .on("click", function (e) {
                e.preventDefault();
                let amount = $(this).find("a").text();
                donateInput.val(amount);
                $("#donate-amount__predefined").find("li").removeClass("active");
                $(this).addClass("active");
            });
        }

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
                <section className="donations-list">
                    <div className="container">
                        <div className="donations-list__inner">
                            {/* Donations List Single */}
                            <div className="donations-list__single">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="donations-list__right">
                                            <div className="donations-list__content">
                                                <div className="donations-list__category">
                                                    <p>Education</p>
                                                </div>
                                                <h3 className="donations-list__title"><a href="donation-details.html">The African
                                                        Child improving education with donation</a></h3>
                                                <p className="donations-list__text">Aellentesque porttitor lacus quis enim varius
                                                    sed ipsum dnim veniam quis nos trud exercitation dolor ullamco laboris nisi
                                                    ut aliquip ex ea comaody consequat duis aute irure dolor in voluptate
                                                    lorem....</p>
                                                <div className="donations-list__progress">
                                                    <div className="bar">
                                                        <div className="bar-inner count-bar" data-percent="36%">
                                                            <div className="count-text">36%</div>
                                                        </div>
                                                    </div>
                                                    <div className="donations-list__goals">
                                                        <p><span>$25,270</span> Raised</p>
                                                        <p><span>$30,000</span> Goal</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="donations-list__img">
                                            <img src={publicUrl+"assets/images/resources/donations-list-img-1.jpg"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Donations List Single */}
                            <div className="donations-list__single">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="donations-list__right">
                                            <div className="donations-list__content">
                                                <div className="donations-list__category">
                                                    <p>medical</p>
                                                </div>
                                                <h3 className="donations-list__title"><a href="donation-details.html">Help the
                                                        poor children their Pains</a></h3>
                                                <p className="donations-list__text">Aellentesque porttitor lacus quis enim varius
                                                    sed ipsum dnim veniam quis nos trud exercitation dolor ullamco laboris nisi
                                                    ut aliquip ex ea comaody consequat duis aute irure dolor in voluptate
                                                    lorem....</p>
                                                <div className="donations-list__progress">
                                                    <div className="bar">
                                                        <div className="bar-inner count-bar" data-percent="36%">
                                                            <div className="count-text">36%</div>
                                                        </div>
                                                    </div>
                                                    <div className="donations-list__goals">
                                                        <p><span>$25,270</span> Raised</p>
                                                        <p><span>$30,000</span> Goal</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="donations-list__img">
                                            <img src={publicUrl+"assets/images/resources/donations-list-img-2.jpg"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Donations List Single */}
                            <div className="donations-list__single">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="donations-list__right">
                                            <div className="donations-list__content">
                                                <div className="donations-list__category">
                                                    <p>Food</p>
                                                </div>
                                                <h3 className="donations-list__title"><a href="donation-details.html">Feeding the
                                                        Hungry in South Africa</a></h3>
                                                <p className="donations-list__text">Aellentesque porttitor lacus quis enim varius
                                                    sed ipsum dnim veniam quis nos trud exercitation dolor ullamco laboris nisi
                                                    ut aliquip ex ea comaody consequat duis aute irure dolor in voluptate
                                                    lorem....</p>
                                                <div className="donations-list__progress">
                                                    <div className="bar">
                                                        <div className="bar-inner count-bar" data-percent="36%">
                                                            <div className="count-text">36%</div>
                                                        </div>
                                                    </div>
                                                    <div className="donations-list__goals">
                                                        <p><span>$25,270</span> Raised</p>
                                                        <p><span>$30,000</span> Goal</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="donations-list__img">
                                            <img src={publicUrl+"assets/images/resources/donations-list-img-3.jpg"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Donations List Single */}
                            <div className="donations-list__single">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="donations-list__right">
                                            <div className="donations-list__content">
                                                <div className="donations-list__category">
                                                    <p>Education</p>
                                                </div>
                                                <h3 className="donations-list__title"><a href="donation-details.html">Change a
                                                        Life Through Education</a></h3>
                                                <p className="donations-list__text">Aellentesque porttitor lacus quis enim varius
                                                    sed ipsum dnim veniam quis nos trud exercitation dolor ullamco laboris nisi
                                                    ut aliquip ex ea comaody consequat duis aute irure dolor in voluptate
                                                    lorem....</p>
                                                <div className="donations-list__progress">
                                                    <div className="bar">
                                                        <div className="bar-inner count-bar" data-percent="36%">
                                                            <div className="count-text">36%</div>
                                                        </div>
                                                    </div>
                                                    <div className="donations-list__goals">
                                                        <p><span>$25,270</span> Raised</p>
                                                        <p><span>$30,000</span> Goal</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="donations-list__img">
                                            <img src={publicUrl+"assets/images/resources/donations-list-img-4.jpg"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}