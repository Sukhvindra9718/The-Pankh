import React from "react";

export default class WhoweareDetails extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($("#datepicker").length) {
      $("#datepicker").datepicker();
    }

    if ($("#datepicker2").length) {
      $("#datepicker2").datepicker();
    }

    if ($("#datepicker-inline").length) {
      $("#datepicker-inline").datepicker();
    }

    $('input[name="time"]').ptTimeSelect();
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <>
        {/* Team Details Start */}
        <section className="team-details">
          <div className="container">
            <div className="team-details__inner">
              <div className="row">
                <div
                  className="col-xl-6 col-lg-6"
                  style={{ marginTop: "4rem" }}
                >
                  <div className="team-details__top-left">
                    <div className="team-details__top-img">
                      <img
                        src={publicUrl + "assets/images/whoweare/whoweare.jpg"}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__top-right">
                    <div className="team-details__top-content">
                      <h3 className="team-details__top-name">Who We Are</h3>
                      <p className="team-details__top-text-1">
                        PANKH is a non-governmental organization established
                        under the Society Registration Act XXI 1860.
                      </p>
                      <p className="team-details__top-text-2">
                        Our mission is to foster sustainable development through
                        an integrated approach. We employ tested methodologies
                        to identify and address the specific needs of targeted
                        communities, supporting them with strategic initiatives,
                        continuous guidance, and monitoring. Our efforts aim to
                        empower communities by establishing grassroots
                        institutions, facilitating forward linkages, and
                        developing value chains. By enhancing human, social,
                        natural, physical, and financial capital.
                      </p>
                      <p
                        className="team-details__top-text-3"
                        style={{ marginBottom: "4rem" }}
                      >
                        PANKH strives to uplift marginalized population and
                        communities in need. Originally operating as a voluntary
                        organization and catering support to the communities of
                        different age, gender, categories in need since April
                        2012, PANKH was formally registered on May 1, 2015, in
                        Delhi, expanding its support across diverse demographics
                        through self and multiple partners contribution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Details End */}
      </>
    );
  }
}
