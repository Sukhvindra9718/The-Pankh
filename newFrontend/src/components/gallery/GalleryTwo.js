import React from "react";
import axios from "axios";

export default class GalleryTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [], // Initialize state for videos
    };
  }

  componentDidMount() {
    this.getAllVideos();

    const $ = window.$;


    $(document).ready(function () {
      $(".video-popup").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com/",
              id: function () {
                // Extract the video ID from the data-video-url attribute
                const videoId = $(this).data("video-url").split("v=")[1];
                return videoId;
              },
              src: "https://www.youtube.com/embed/%id%?autoplay=1",
            },
          },
          srcAction: "iframe_src",
        },
      });
    });
  }

  getAllVideos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/videos");

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
                        <div className="gallery-page__icon about-one__video-link" style={{marginLeft:0}}>
                          <a
                            href={video.url}
                            data-video-url={video.url} 
                            className="video-popup"
                          >
                             <div className="about-one__video-icon">
                            <span className="fa fa-play"></span>
                            <i className="ripple"></i>
                          </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Default gallery items if no images are fetched
                <>
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="gallery-page__single">
                      <div className="gallery-page__img">
                        <img
                          src={`${publicUrl}assets/images/gallery/gallery-page-1.jpg`}
                          alt=""
                        />
                        <div className="gallery-page__icon">
                          <a
                            className="img-popup"
                            href={`${publicUrl}assets/images/gallery/gallery-page-1.jpg`}
                          >
                            <span className="icon-plus"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="gallery-page__single">
                      <div className="gallery-page__img">
                        <img
                          src={`${publicUrl}assets/images/gallery/gallery-page-2.jpg`}
                          alt=""
                        />
                        <div className="gallery-page__icon">
                          <a
                            href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                            className="video-popup"
                          >
                            <span className="icon-plus"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="gallery-page__single">
                      <div className="gallery-page__img">
                        <img
                          src={`${publicUrl}assets/images/gallery/gallery-page-3.jpg`}
                          alt=""
                        />
                        <div className="gallery-page__icon">
                          <a
                            className="img-popup"
                            href="assets/images/gallery/gallery-page-3.jpg"
                          >
                            <span className="icon-plus"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add more default gallery items as needed */}
                </>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}
