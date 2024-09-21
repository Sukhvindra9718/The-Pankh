import React, { Component } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { API_URL,PROD_URL,ENV } from "../../config";
const responsive = {
  superLargeDesktop: {
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

class TestimonialOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: [],
    };
  }

  componentDidMount() {
    this.getAllTestimonials();
  }

  getAllTestimonials = async () => {
    try {
      const res = await axios.get(`${ENV === "dev" ? API_URL:PROD_URL}/api/v1/testimonials`);

      if (res.data.success) {
        this.setState({ testimonial: res.data.testimonial });
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { testimonial } = this.state;

    return (
      <>
        {testimonial.length > 0 ? (
          <section className="testimonial-one" style={{zIndex:10}}>
            <div className="container">
              <div className="row">
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
                  removeArrowOnDeviceType={[
                    "tablet",
                    "mobile",
                    "desktop",
                    "superLargeDesktop",
                  ]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {testimonial.map((item, index) => (
                    <div className="testimonial-one__single" key={index} style={{marginRight:"1.5rem",marginBottom:"1.5rem"}}>
                      <div className="testimonial-one__img">
                        <img src={item.fileurl} alt="" />
                        <div className="testimonial-one__quote">
                          <span className="fas fa-quote-left"></span>
                        </div>
                      </div>
                      <p className="testimonial-one__text">{item.comment}</p>
                      <div className="testimonial-one__client-info">
                        <h4 className="testimonial-one__client-name">
                          {item.name}
                        </h4>
                        <span className="testimonial-one__client-title">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </section>
        ) : (
          <div className="container" style={{ height: "100px" }}></div>
        )}
      </>
    );
  }
}

export default TestimonialOne;
