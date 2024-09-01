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
      const res = await axios.get("http://localhost:3001/api/v1/videos");

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
                <div className="col-12">
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
