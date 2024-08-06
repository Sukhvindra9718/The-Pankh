import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function TestimonialOne() {
  const [testimonial, setTestimonial] = useState([]);

  const getAllTestimonials = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/testimonials");

      if (res.data.success) {
        setTestimonial(res.data.testimonial);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTestimonials();
    return () => {
      setTimeout(() => {
        const $ = window.$;

        if ($(".testimonial-one__carousel").length) {
          $(".testimonial-one__carousel").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 500,
            autoplayTimeout: 3000,
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
      }, 2000);
    };
  }, []);
  return (
    <>
      <section className="testimonial-one">
        <div className="container">
          <div className="row">
            {testimonial.length > 0 && (
              <div
                className="wow fadeInLeft owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel"
                data-wow-delay="100ms"
              >
                {testimonial.map((item) => (
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
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialOne;


