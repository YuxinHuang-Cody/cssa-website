'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { testimonialList } from '@/data/Data';

type SliderSettings = {
  slidesToShow: number;
  asNavFor?: Slider | undefined;
  infinite: boolean;
  speed: number;
  slidesToScroll: number;
  arrows: boolean;
};

const TestimonialSlider2: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);

  const sliderSettings: SliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: imgNavRef.current || undefined,
    arrows: false,
  };

  return (
    <section className="tl-4-testimonial tl-3-section-spacing">
      <div className="container">
        <h2 className="tl-4-section-title">
          Trusted by over 42,000+ Students Have To Say
        </h2>

        <div className="tl-4-testimonial-slider owl-carousel">
          <Slider ref={sliderRef} {...sliderSettings}>
            {testimonialList.map((item) => (
              <div key={item.id}>
                <div className="tl-4-testimony">
                  <img
                    src={item.imgSrc}
                    alt="User image"
                    className="tl-4-testimony-img"
                  />

                  <div className="tl-4-testimony-txt">
                    <p className="tl-4-testimony-review">{item.review}</p>

                    <div className="tl-4-reviewer">
                      <div className="tl-4-reviewer-txt">
                        <h6 className="tl-4-reviewer-name">{item.name}</h6>
                        <span className="tl-4-reviewer-label">{item.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="tl-4-testimonial-users">
          <Slider
            ref={imgNavRef}
            asNavFor={sliderRef.current || undefined}
            slidesToShow={testimonialList.length}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {testimonialList.map((item) => (
              <div key={item.id} role='button' onClick={() => sliderRef.current?.slickGoTo(item.id)}>
                <button>
                  {/* Use onClick to manually control the first slider */}
                  <span className="tl-4-reviewer">
                    <img
                      src={item.imgSrc}
                      alt="User Image"
                      className="tl-4-reviewer-img"
                    />

                    <span className="tl-4-reviewer-txt">
                      <span className="tl-4-reviewer-name">{item.name}</span>
                      <span className="tl-4-reviewer-label">{item.label}</span>
                    </span>
                  </span>
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider2;
