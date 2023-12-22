'use client'
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
type SliderSettings = {
    slidesToShow: number;
    asNavFor?: Slider | undefined; // Use the Slider type here
    autoplay: boolean;
    speed: number;
    arrows: boolean;
  };
  
const TestimonialSlider7 = () => {
    const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);
  const [sliderSettings, setSliderSetting] = useState<SliderSettings>({
    slidesToShow: 1,
    asNavFor: undefined, // Use undefined instead of null
    autoplay: true,
    speed: 1000,
    arrows: false,
  });

  useEffect(() => {
    const sliderSettings: SliderSettings = {
      slidesToShow: 1,
      asNavFor: imgNavRef.current as Slider, // Use type assertion here
      autoplay: true,
      speed: 1000,
      arrows: false,
    };
    setSliderSetting(sliderSettings);
  }, []);
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

  useEffect(() => {
    if (sliderRef.current) {
      setSliderSetting((prevSettings) => ({
        ...prevSettings,
        asNavFor: imgNavRef.current as Slider, // Use type assertion here
      }));
    }
  }, []);
  return (
    <section className="tl-13-testimonial pt-120 pb-120 bg-defaults" data-background="assets/images/tl-13/testimonial-bg.png">
        <div className="container">
            <h2 className="tl-13-section-title">What <span className="last-word">Student</span> Says?</h2>
            <div className="row gy-4 align-items-center justify-content-center">
                <div className="col-lg-5">
                    <div className="tl-13-testimonial-img">
                        <Slider 
                        className="tl-13-testimonial-user-slider"
                        {...testimonialImagesSettings}
                        ref={imgNavRef}
                        >
                            <img src="assets/images/tl-4/testimony-1.jpg" alt="User Image"/>
                            <img src="assets/images/tl-4/testimony-2.jpg" alt="User Image"/>
                        </Slider>

                        <img src="assets/images/tl-13/quote-icon.png" alt="icon" className="tl-13-testimonial-quote-icon"/>
                    </div>
                </div>

                <div className="col-lg-7">
                    <Slider 
                    className="tl-13-testimonial-slider"
                    {...sliderSettings}
                    ref={sliderRef}
                    >
                        <div className="tl-4-testimony-txt">
                            <p className="tl-4-testimony-review">Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est, vitae tristique metus tempor nibh ultricies.</p>

                            <div className="tl-4-reviewer">
                                <img src="assets/images/tl-4/user-1.jpg" alt="User Image" className="tl-4-reviewer-img"/>

                                <div className="tl-4-reviewer-txt">
                                    <h6 className="tl-4-reviewer-name">Russell Sprout</h6>
                                    <span className="tl-4-reviewer-label">Student, CSE</span>
                                </div>
                            </div>
                        </div>
                        <div className="tl-4-testimony-txt">
                            <p className="tl-4-testimony-review">Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis luctus sem lacinia quis. Quisque amet velit sit amet dui hendrerit ultricies a id ipsum Mauris sit amet lacinia est, vitae tristique metus tempor nibh ultricies.</p>

                            <div className="tl-4-reviewer">
                                <img src="assets/images/tl-4/user-2.jpg" alt="User Image" className="tl-4-reviewer-img"/>

                                <div className="tl-4-reviewer-txt">
                                    <h6 className="tl-4-reviewer-name">Thomas R. Toe</h6>
                                    <span className="tl-4-reviewer-label">B.Tech (CSE) , 2018-2023</span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>


        </div>
    </section>
  )
}

export default TestimonialSlider7