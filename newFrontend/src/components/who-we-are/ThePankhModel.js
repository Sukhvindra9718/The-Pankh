import React from "react";

export default class ThePankhModelDetails extends React.Component {
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
                <div className="col-xl-6 col-lg-6">
                  <div className="team-details__top-right">
                    <div className="team-details__top-content">
                      <h3 className="team-details__top-name">
                        The PANKH's Model
                      </h3>
                      <p className="team-details__top-text-1">
                        At PANKH, our "Leave No One Behind"
                      </p>
                      <p className="team-details__top-text-2">
                        initiative embodies our commitment to ensuring that
                        every individual, regardless of their socio-economic
                        status, has the opportunity to thrive. This initiative
                        focuses on inclusive and holistic development, targeting
                        the most marginalized and underprivileged sections of
                        society. Our goal is to bridge the gaps and create a
                        supportive environment where everyone can achieve their
                        full potential.
                      </p>
                      <p
                        className="team-details__top-text-3"
                        style={{ marginBottom: "4rem" }}
                      >
                        Our approach is community-centric and participatory,
                        involving local communities in the planning and
                        implementation processes. This ensures that our
                        initiatives are relevant, effective, and sustainable. We
                        focus on building capacities, fostering resilience, and
                        creating an environment where every individual can
                        contribute to and benefit from the development process.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6"
                  style={{ marginTop: "4rem" }}
                >
                  <div className="team-details__top-left">
                    <div className="team-details__top-img">
                      <img
                        src={
                          publicUrl + "images/whoweare/thepankhmodel.png"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
