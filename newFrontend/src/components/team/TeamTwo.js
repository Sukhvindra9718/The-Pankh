import React from "react";
import axios from "axios";

export default class TeamTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volunteers: [], // Initialize state for volunteers
      msg:""
    };
  }

  getAllVolunteers = async () => {
    try {
      const res = await axios.get("http://165.227.97.26/api/v1/volunteers");

      if (res.data.success) {
        this.setState({ volunteers: res.data.volunteers }); // Update state with fetched volunteers
      } else {
        this.setState({ msg: res.data.message });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getAllVolunteers();
  }
  render() {
    const { volunteers } = this.state;

    return (
      <>
        {volunteers.length > 0 ? (
          <section className="team-one">
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">Expert Team</span>
                <h2 className="section-title__title">
                  Meet Our Volunteer Team.
                </h2>
              </div>
              <div className="row">
                {volunteers.map((volunteer, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                    data-wow-delay="100ms"
                    key={index}
                  >
                    <div className="team-one__single">
                      <div className="team-one__img">
                        <img src={volunteer.fileurl} alt="" />
                      </div>
                      <div className="team-one__content">
                        <h4 className="team-one__name">
                          <a to="#">{volunteer.username}</a>
                        </h4>
                        <p className="team-one__title">{volunteer.role}</p>
                        <div className="team-one__social">
                          <a href={volunteer.twitterurl}>
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href={volunteer.facebookurl}>
                            <i className="fab fa-facebook"></i>
                          </a>
                          <a href={volunteer.linkedinurl}>
                            <i className="fab fa-linkedin"></i>
                          </a>
                          <a href={volunteer.instagramurl}>
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <div className="container">
            <h1>{this.msg}</h1>
          </div>
        )}
      </>
    );
  }
}
