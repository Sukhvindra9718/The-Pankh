import React from "react";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
import { API_URL,PROD_URL,ENV } from "../../config";
export default class GalleryTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [], // Initialize state for videos
    };
  }

  componentDidMount() {
    this.getAllVideos();
  }

  getAllVideos = async () => {
    try {
      const res = await axios.get(`${ENV === "dev" ? API_URL:PROD_URL}/api/v1/videos`);

      if (res.data.success) {
        this.setState({ videos: res.data.videos }); // Update state with the fetched images
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { videos } = this.state;

    return (
      <>
        <section className="gallery-page">
          <div className="container">
            <div className="row">
              {videos.length > 0 ? (
                videos.map((video, index) => (
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={`${100 * (index + 1)}ms`}
                    key={video.id}
                  >
                    <div className="gallery-page__single">
                      <div className="gallery-page__img">
                        <img
                          src={video.fileurl}
                          alt={video.title || "Thumbnail"}
                        />
                        <div
                          className="gallery-page__icon about-one__video-link"
                          style={{ marginLeft: 0 }}
                        >
                          {/* <a
                            href={video.url}
                            data-video-url={video.url}
                            className="video-popup"
                          >
                            <div className="about-one__video-icon">
                              <span className="fa fa-play"></span>
                              <i className="ripple"></i>
                            </div>
                          </a> */}
                          <ReactPlayer url={video.url} controls />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="col-12 d-flex align-items-center justify-content-center"
                  style={{ height: "20vh" }}
                >
                  <p className="text-center">No video found!</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}
