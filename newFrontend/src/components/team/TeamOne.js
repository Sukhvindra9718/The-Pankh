import axios from "axios";
import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class TeamOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volunteers: [], // Initialize state for volunteers
    };
  }

  componentDidMount() {
    this.getAllVolunteers();
  }

  getAllVolunteers = async () => {
    try {
      const res = await axios.get("https://thepankh.info/api/v1/volunteers");

      if (res.data.success) {
        this.setState({ volunteers: res.data.volunteers }); // Update state with fetched volunteers
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { volunteers } = this.state;

    return (
      <>
        {volunteers.length > 0 ? <section className="team-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Expert Team</span>
              <h2 className="section-title__title">Meet Our Volunteer Team.</h2>
            </div>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
              deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {volunteers.map((volunteer, index) => (
                <div className="team-one__single" key={index} style={{marginRight:"1.5rem",marginBottom:"1.5rem"}}>
                  <div className="team-one__img">
                    <img src={volunteer.fileurl} alt="Volunteer Image" />
                  </div>
                  <div className="team-one__content">
                    <h4 className="team-one__name">
                      <Link to={process.env.PUBLIC_URL + `/team-details`}>
                        {volunteer.username}
                      </Link>
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
              ))}
            </Carousel>
          </div>
        </section>:<div className="container" style={{height:"100px"}}>
            <h1></h1>
          </div>}
      </>
    );
  }
}

export default TeamOne;
