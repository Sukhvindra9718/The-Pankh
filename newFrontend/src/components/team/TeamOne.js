// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function TeamOne() {
//   const [volunteers, setVolunteers] = useState([]);
//   const getAllVolunteers = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/api/v1/volunteers");

//       if (res.data.success) {
//         setVolunteers(res.data.volunteers);
//       } else {
//         console.log(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllVolunteers();
//     return () => {
//       const $ = window.$;
//       if ($(".testimonial-one__carousel").length) {
//         $(".testimonial-one__carousel").owlCarousel({
//           loop: true,
//           autoplay: true,
//           margin: 30,
//           nav: false,
//           dots: false,
//           smartSpeed: 500,
//           autoplayTimeout: 5000,
//           navText: [
//             '<span class="fa fa-angle-left"></span>',
//             '<span class="fa fa-angle-right"></span>',
//           ],
//           responsive: {
//             0: {
//               items: 1,
//             },
//             768: {
//               items: 2,
//             },
//             991: {
//               items: 3,
//             },
//             1200: {
//               items: 3,
//             },
//           },
//         });
//       }
//     };
//   }, []);

//   return (
//     <>
//       <section className="team-one">
//         <div className="container">
//           <div className="section-title text-center">
//             <span className="section-title__tagline">Expert Team</span>
//             <h2 className="section-title__title">Meet Our Volunteer Team.</h2>
//           </div>
//           <div className="row">
//             {volunteers.length > 0 && (
//               <div
//                 className="wow fadeInLeft owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel"
//                 data-wow-delay="100ms"
//                 key={volunteers.length}
//               >
//                 {volunteers.map((volunteer, index) => (
//                   <>
//                     <div className="team-one__single" key={index}>
//                       <div className="team-one__img">
//                         <img src={volunteer.fileurl} alt="Volunteer Image" />
//                       </div>
//                       <div className="team-one__content">
//                         <h4 className="team-one__name">
//                           <Link to={process.env.PUBLIC_URL + `/team-details`}>
//                             {volunteer.username}
//                           </Link>
//                         </h4>
//                         <p className="team-one__title">{volunteer.role}</p>
//                         <div className="team-one__social">
//                           <a href={volunteer.twitterurl}>
//                             <i className="fab fa-twitter"></i>
//                           </a>
//                           <a href={volunteer.facebookurl}>
//                             <i className="fab fa-facebook"></i>
//                           </a>
//                           <a href={volunteer.linkedinurl}>
//                             <i className="fab fa-linkedin"></i>
//                           </a>
//                           <a href={volunteer.instagramurl}>
//                             <i className="fab fa-instagram"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default TeamOne;





import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TeamOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volunteers: [], // Initialize state for volunteers
    };
  }

  componentDidMount() {
    this.getAllVolunteers();

    const $ = window.$;
    if ($(".testimonial-one__carousel").length) {
      $(".testimonial-one__carousel").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 500,
        autoplayTimeout: 5000,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          991: {
            items: 3,
          },
          1200: {
            items: 3,
          },
        },
      });
    }
  }

  getAllVolunteers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/volunteers");

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
        <section className="team-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Expert Team</span>
              <h2 className="section-title__title">Meet Our Volunteer Team.</h2>
            </div>
            <div className="row">
              {volunteers.length > 0 && (
                <div
                  className="wow fadeInLeft owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel"
                  data-wow-delay="100ms"
                  key={volunteers.length}
                >
                  {volunteers.map((volunteer, index) => (
                    <div className="team-one__single" key={index}>
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
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default TeamOne;
