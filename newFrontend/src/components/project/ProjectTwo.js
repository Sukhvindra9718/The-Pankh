import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProjectTwo() {
  const [projects, setProjects] = useState([]);

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
      } else {
        setProjects([]);
      }
    } catch (error) {
      // navigate("/error");
    }
  };

  useEffect(() => {
    getAllProjects();
    // eslint-disable-next-line
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
              {projects.map((project, index) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                  key={index}
                >
                  <div className="project-one__single" style={{height:"30vh",width:"20vw"}}>
                    <div className="project-one__img">
                      <img src={project?.fileurl} alt="" />
                      <div className="project-one__content">
                        <p className="project-one__sub-title">
                          {project?.title}
                        </p>
                        <h3 className="project-one__title">
                          <Link
                            to={process.env.PUBLIC_URL + `/project-details`}
                          >
                            {project?.description}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div
          className="container text-center"
          style={{ height: "100px" }}
        ></div>
      )}
    </>
  );
}

export default ProjectTwo;
