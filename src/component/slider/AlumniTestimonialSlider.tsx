'use client'
import { alumniImgList, alumniTextList } from '@/data/Data';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

// Create a type for the Slider component settings
type SliderSettings = {
  slidesToShow: number;
  asNavFor?: Slider | undefined; // Use the Slider type here
  autoplay: boolean;
  speed: number;
  arrows: boolean;
};

const AlumniTestimonialSlider = () => {
  const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);

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

  const [sliderSettings, setSliderSetting] = useState<SliderSettings>({
    slidesToShow: 1,
    asNavFor: undefined, // Use undefined instead of null
    autoplay: true,
    speed: 1000,
    arrows: false,
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

  useEffect(() => {
    if (sliderRef.current) {
      setSliderSetting((prevSettings) => ({
        ...prevSettings,
        asNavFor: imgNavRef.current as Slider, // Use type assertion here
      }));
    }
  }, []);

  return (
    <section className="tl-5-testimonial">
        <div className="container">
            <div className="tl-5-testimonial-heading d-flex justify-content-between align-items-center">
                <h2 className="tl-5-section-title">Meet Our Alumni</h2>
                <div className="tl-5-testimonial-slider-nav">
                    <button 
                    className="tl-5-testimonial-slider-prev"
                    onClick={() => sliderRef.current?.slickPrev()} 
                    ><i className="fa-light fa-angle-left"></i>
                    </button>

                    <button 
                    className="tl-5-testimonial-slider-next"
                    onClick={() => sliderRef.current?.slickNext()}
                    ><i className="fa-light fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>

        <Slider 
        {...testimonialImagesSettings}
        ref={imgNavRef}
        className="tl-5-testimonial-img-slider"
        >
            {alumniImgList.map((item) => (
              <span className="tl-5-testimonial-img" key={item.id}>
                <img src={item.imgSrc} alt="Alumni Image"/>
            </span>  
            ))}
            
        </Slider>

        <div className="container position-relative">
            <Slider 
            {...sliderSettings}
            ref={sliderRef}
            className="tl-5-testimonial-slider"
            >
                {alumniTextList.map((item) => (
                  <div className="slider-item" key={item.id}>
                    <div className="tl-5-single-testimony">
                        <img className="tl-5-single-testimony-icon" src="assets/images/tl-5/testimonial-icon.png" alt="Quotation Icon"/>

                        <div className="tl-5-single-testimony-txt">
                            <p>{item.text}</p>

                            <div className="tl-5-alumni">
                                <h5 className="tl-5-alumni-name">{item.name}</h5>
                                <div className="tl-5-alumni-label">{item.label}</div>
                            </div>
                        </div>
                    </div>
                </div>  
                ))}
                
            </Slider>
        </div>
    </section>
  );
};

export default AlumniTestimonialSlider;
