import React from "react";
import { Link } from "react-router-dom";

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
        },
        {
          accY: -50,
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
        },
        {
          accY: 0,
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
              countNum: $t.find(".count-text").text(),
            }).animate(
              {
                countNum: n,
              },
              {
                duration: r,
                easing: "linear",
                step: function () {
                  $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                  $t.find(".count-text").text(this.countNum);
                },
              }
            );
          }
        },
        {
          accY: 0,
        }
      );
    }
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        <section className="skill-one">
          <div className="skill-one__container">
            <div className="skill-one__left">
              <div
                className="skill-one__bg"
                style={{
                  backgroundImage:
                    "url(" +
                    publicUrl +
                    "assets/images/backgrounds/skill-one-left-bg.jpg)",
                }}
              ></div>
              <div className="skill-one__arrow-box">
                <div className="skill-one__arrow-box-inner"></div>
              </div>
            </div>
            <div className="skill-one__right">
              <div
                className="skill-one__bg-two"
                style={{
                  backgroundImage:
                    "url(" +
                    publicUrl +
                    "assets/images/backgrounds/skill-one-right-bg.jpg)",
                }}
              ></div>
              <div className="skill-one__content">
                <div className="section-title text-left">
                  <span className="section-title__tagline">VISION</span>
                </div>
                <p className="skill-one__text">
                  To create a global community where every underprivileged
                  individual is empowered to realize their full potential,
                  becoming valuable contributors to the advancement of society
                  and the prosperity of nations.
                </p>

                <div className="section-title text-left">
                  <span className="section-title__tagline">MISSION</span>
                </div>
                <p className="skill-one__text">
                  To foster self-reliance and dignity among underprivileged
                  communities, particularly women, residing in rural, semi-rural
                  areas, and slums, by nurturing their life skills, economic
                  capabilities, and socio-cultural competencies. PANKH aims to
                  forge an inclusive society where every individual thrives with
                  respect and equality.
                </p>

                <Link
                  to={process.env.PUBLIC_URL + `/whoweare`}
                  className="thm-btn skill-one__btn"
                >
                  Who We Are
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
