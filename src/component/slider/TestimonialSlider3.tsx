"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
interface Props {
  style: string;
  array: ArrayItems[];
  instructorImg: string;
}
type ArrayItems = {
  id: number,
  imgSrc: string,
  desc: string,
  role: string,
  name: string,
}
type SliderSettings = {
  slidesToShow: number;
  asNavFor?: Slider | undefined; // Use the Slider type here
  autoplay: boolean;
  speed: number;
  arrows: boolean;
  dots: boolean;
};
const TestimonialSlider3:React.FC<Props> = ({style,array,instructorImg}) => {
  const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);
  useEffect(() => {
    const sliderSettings: SliderSettings = {
      slidesToShow: 1,
      asNavFor: imgNavRef.current as Slider, // Use type assertion here
      autoplay: true,
      speed: 1000,
      arrows: false,
      dots: true,
    };
    setSliderSetting(sliderSettings);
  }, []);

  const [sliderSettings, setSliderSetting] = useState<SliderSettings>({
    slidesToShow: 1,
    asNavFor: undefined, // Use undefined instead of null
    autoplay: true,
    speed: 1000,
    arrows: false,
    dots: true,
  });

  const testimonialImagesSettings = {
    slidesToShow: 1,
    draggable: false,
    arrows: false,
    swipe: false,
    fade: true,
    asNavFor: sliderRef.current as Slider, // Use type assertion here
    autoplay: true,
    speed: 1000,
  };
  return (
    <section className={`tl-7-testimonial ${style}`}>
      <div className="container">
        <div className="tl-7-testimonial-row">
          <div className="tl-7-reviewer-img-slider">
            <Slider {...testimonialImagesSettings} ref={imgNavRef}>
              {array.map((item) => (
                <img src={item.imgSrc} alt={item.name} key={item.id} />
              ))}
            </Slider>
          </div>

          <div className="tl-7-testimonial-slider-col">
            <div className="tl-7-testimonial-slider">
              <Slider {...sliderSettings} ref={sliderRef}>
                {array.map((item) => (
                  <div className="tl-7-testimony" key={item.id}>
                    <p className="tl-7-testimony-txt">{item.desc}</p>

                    <div className="tl-7-testimony-bottom">
                      <div className="tl-7-testimony-bottom-left">
                        <h5 className="tl-7-testimony-reviewer-name">
                          {item.name}
                        </h5>
                        <span className="tl-7-testimony-reviewer-role">
                          {item.role}
                        </span>
                      </div>

                      <div className="tl-7-testimony-bottom-right">
                        <img
                          src="assets/images/tl-7/quotation.png"
                          alt="Quotation Mark"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <img
            src={instructorImg}
            alt="Instructor Image"
            className="tl-7-testimonial-right-img"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider3;
