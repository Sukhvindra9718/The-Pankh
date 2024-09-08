import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL,PROD_URL,ENV } from "../../config";
const TestimonialFour = () => {
  const [testimonial, setTestimonial] = useState([]);
  const getAllTestimonials = async () => {
    try {
      const res = await axios.get(`${ENV === "dev" ? API_URL:PROD_URL}/api/v1/testimonials`);

      if (res.data.success) {
        setTestimonial(res.data.testimonial);
      } else {
        setTestimonial([]);
      }
    } catch (error) {
      // navigate("/error");
    }
  };

  useEffect(() => {
    getAllTestimonials();
  }, []);
  return (
    <>
      {testimonial.length > 0 ? (
        <section className="testimonials-page">
          <div className="container">
            <div className="row">
              {testimonial.map((item, index) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                  key={index}
                >
                  {/* Testimonial One single */}
                  <div className="testimonial-one__single">
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
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div
          className="col-12 d-flex align-items-center justify-content-center"
          style={{ height: "20vh" }}
        >
          <p className="text-center">No testimonials found!</p>
        </div>
      )}
    </>
  );
};

export default TestimonialFour;
