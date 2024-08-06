import React from "react";

export default class ContactInfo extends React.Component {
  render() {
    return (
      <>
        <section className="contact-info">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                {/* Contact Info Single */}
                <div className="contact-info__single">
                  <h4 className="contact-info__title">About</h4>
                  <p className="contact-info__text">
                    PANKH is an organization, formed by different diversified
                    experts and social workers.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                {/* Contact Info Single */}
                <div className="contact-info__single">
                  <h4 className="contact-info__title">Address</h4>
                  <p className="contact-info__text">
                    Head Office: PK-22, Ground Floor, Sec-122, Noida (UP)-201307{" "}
                    <br />
                    India
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                {/* Contact Info Single */}
                <div className="contact-info__single contact-info__single-3">
                  <h4 className="contact-info__title">Contact</h4>
                  <p className="contact-info__email-phone">
                    <a
                      href="mailto:mail@thepankh.info"
                      className="contact-info__email"
                    >
                      mail@thepankh.info
                    </a>
                    <a href="tel:0120-6055473" className="contact-info__phone">
                      0120-6055473
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
