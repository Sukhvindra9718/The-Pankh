import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ProjectOne() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

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

  const getAllProjects = async () => {
    const config = {
      headers: {
        Authorization: `${getTokenFromCookie()}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.get(
        "https://thepankh.info/api/v1/projects",
        config
      );
      if (data.success) {
        setProjects(data.projects);
      }else{
        setProjects([])
      }
    } catch (error) {
      // navigate("/error");
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <>
      {projects.length > 0 ? (
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
                    <img src={projects[0]?.fileurl} alt="" />
                    <div className="project-one__content">
                      <p className="project-one__sub-title">
                        {projects[0]?.title}
                      </p>
                      <h3 className="project-one__title">
                        <Link to={process.env.PUBLIC_URL + `/project-details`}>
                          {projects[0]?.description}
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
               {projects[1]?.title && <div className="project-one__single">
                  <div className="project-one__img">
                    <img src={projects[1]?.fileurl} alt="" />
                    <div className="project-one__content">
                      <p className="project-one__sub-title">
                        {projects[1]?.title}
                      </p>
                      <h3 className="project-one__title">
                        <Link to={process.env.PUBLIC_URL + `/project-details`}>
                          {projects[1]?.description}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>}
                {/* Project Three Single */}
                {projects[2]?.title && <div className="project-one__single">
                  <div className="project-one__img">
                    <img src={projects[2]?.fileurl} alt="" />
                    <div className="project-one__content">
                      <p className="project-one__sub-title">
                        {projects[2]?.title}
                      </p>
                      <h3 className="project-one__title">
                        <Link to={process.env.PUBLIC_URL + `/project-details`}>
                          {projects[2]?.description}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>}
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                {/* Project Four Single */}
                {projects[3]?.title && <div className="project-one__single">
                  <div className="project-one__img">
                    <img src={projects[3]?.fileurl} alt="" />
                    <div className="project-one__content">
                      <p className="project-one__sub-title">
                        {projects[3]?.title}
                      </p>
                      <h3 className="project-one__title">
                        <Link to={process.env.PUBLIC_URL + `/project-details`}>
                          {projects[3]?.description}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>}
                {/* Project Five Single */}
                {projects[4]?.title && <div className="project-one__single">
                  <div className="project-one__img">
                    <img src={projects[4]?.fileurl} alt="" />
                    <div className="project-one__content">
                      <p className="project-one__sub-title">
                        {projects[4]?.title}
                      </p>
                      <h3 className="project-one__title">
                        <Link to={process.env.PUBLIC_URL + `/project-details`}>
                          {projects[4]?.description}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="container text-center" style={{height:"100px"}}></div>
      )}
    </>
  );
}

export default ProjectOne;
