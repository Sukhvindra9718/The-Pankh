import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProjectOne() {
  const [images, setImages] = useState([]);

  // Get Token from Cookie
  const getTokenFromCookie = () => {
    const name = "token=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const getAllImages = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/images",
        config
      );
      setImages(data.images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);


  return (
    <>
      <section className="project-one">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-title__tagline">Our Causes Events</span>
            <h2 className="section-title__title">
              We Popular To Provide <br /> Best Projects.
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="100ms"
            >
              {/* Project One Single */}
              <div className="project-one__single_main project-one__single">
                <div className="project-one__img_main project-one__img">
                  <img src={images[0]?.fileurl} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title">{images[0]?.title}</p>
                    <h3 className="project-one__title">
                      <Link to={process.env.PUBLIC_URL + `/project-details`}>
                        {images[0]?.description}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              {/* Project Two Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img src={images[1]?.fileurl} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title">{images[1]?.title}</p>
                    <h3 className="project-one__title">
                      <Link to={process.env.PUBLIC_URL + `/project-details`}>
                        {images[1]?.description}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* Project Three Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img src={images[2]?.fileurl} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title">{images[2]?.title}</p>
                    <h3 className="project-one__title">
                      <Link to={process.env.PUBLIC_URL + `/project-details`}>
                        {images[2]?.description}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              {/* Project Four Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img src={images[3]?.fileurl} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title">{images[3]?.title}</p>
                    <h3 className="project-one__title">
                      <Link to={process.env.PUBLIC_URL + `/project-details`}>
                        {images[3]?.description}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* Project Five Single */}
              <div className="project-one__single">
                <div className="project-one__img">
                  <img src={images[4]?.fileurl} alt="" />
                  <div className="project-one__content">
                    <p className="project-one__sub-title">{images[4]?.title}</p>
                    <h3 className="project-one__title">
                      <Link to={process.env.PUBLIC_URL + `/project-details`}>
                        {images[4]?.description}
                      </Link>
                    </h3>
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

export default ProjectOne;

// export default class ProjectOne extends React.Component {
//     render(){
//         let publicUrl = process.env.PUBLIC_URL+'/'
//         return (
//             <>
//                 <section className="project-one">
//                     <div className="container">
//                         <div className="section-title text-center">
//                             <span className="section-title__tagline">Our Causes Events</span>
//                             <h2 className="section-title__title">We Popular To Provide <br /> Best Projects.</h2>
//                         </div>
//                         <div className="row">
//                             <div className="col-xl-4 col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="100ms">
//                                 {/* Project One Single */}
//                                 <div className="project-one__single">
//                                     <div className="project-one__img">
//                                         <img src={publicUrl+"assets/images/project/project-1-1.jpg"} alt="" />
//                                         <div className="project-one__content">
//                                             <p className="project-one__sub-title">Our Best Projects</p>
//                                             <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Event of Shares</Link></h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
//                                 {/* Project Two Single */}
//                                 <div className="project-one__single">
//                                     <div className="project-one__img">
//                                         <img src={publicUrl+"assets/images/project/project-1-2.jpg"} alt="" />
//                                         <div className="project-one__content">
//                                             <p className="project-one__sub-title">Our Best Projects</p>
//                                             <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Provides them Poor</Link>
//                                             </h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* Project Three Single */}
//                                 <div className="project-one__single">
//                                     <div className="project-one__img">
//                                         <img src={publicUrl+"assets/images/project/project-1-3.jpg"} alt="" />
//                                         <div className="project-one__content">
//                                             <p className="project-one__sub-title">Our Best Projects</p>
//                                             <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Children of Poor</Link>
//                                             </h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
//                                 {/* Project Four Single */}
//                                 <div className="project-one__single">
//                                     <div className="project-one__img">
//                                         <img src={publicUrl+"assets/images/project/project-1-4.jpg"} alt="" />
//                                         <div className="project-one__content">
//                                             <p className="project-one__sub-title">Our Best Projects</p>
//                                             <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>History Of Tibet</Link>
//                                             </h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* Project Five Single */}
//                                 <div className="project-one__single">
//                                     <div className="project-one__img">
//                                         <img src={publicUrl+"assets/images/project/project-1-5.jpg"} alt="" />
//                                         <div className="project-one__content">
//                                             <p className="project-one__sub-title">Our Best Projects</p>
//                                             <h3 className="project-one__title"><Link to={process.env.PUBLIC_URL + `/project-details`}>Drought Information</Link></h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </>
//         )
//     }
// }
