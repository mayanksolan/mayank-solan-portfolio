import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Testimonials extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      pauseOnFocus: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (testimonials) {
        return (
          <div className="test-box">
            <div className="test-head">
              <div className="test-name">{testimonials.user}</div>
              <div className="test-desig">{testimonials.designation}</div>
            </div>
            <div className="test-text">{testimonials.text}</div>
          </div>
          //  <li key={testimonials.user}>
          //    <blockquote>
          //      <p>{testimonials.text}</p>
          //      <cite>{testimonials.user}</cite>
          //    </blockquote>
          //  </li>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row" style={{ maxWidth: "90%" }}>
            <h1>Recommendations</h1>
            <Slider {...settings}>{testimonials}</Slider>
            {/* <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
