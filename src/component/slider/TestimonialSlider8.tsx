'use client'
import React, { useRef } from 'react'
import Slider from 'react-slick';
type SliderSettings = {
    slidesToShow: number;
    asNavFor?: Slider | undefined;
    infinite: boolean;
    speed: number;
    slidesToScroll: number;
    arrows: boolean;
  };
const TestimonialSlider8 = () => {
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
    <>
        <Slider ref={sliderRef} {...sliderSettings} className="tl-14-testimonial-slider">
            <div className="tl-14-testimony">
                <img src="assets/images/tl-14/quote-icon.png" alt="Quote Icon"/>
                <p className="tl-14-testimony-txt">I love that solvency lets us manage everything in one place. It's super helpful to be able to listen to voice samples, upload our own lists, and find quality salespeople that can grow with our team.</p>
            </div>

            <div className="tl-14-testimony">
                <img src="assets/images/tl-14/quote-icon.png" alt="Quote Icon"/>
                <p className="tl-14-testimony-txt">I love that solvency lets us manage everything in one place. It's super helpful to be able to listen to voice samples, upload our own lists, and find quality salespeople that can grow with our team.</p>
            </div>

            <div className="tl-14-testimony">
                <img src="assets/images/tl-14/quote-icon.png" alt="Quote Icon"/>
                <p className="tl-14-testimony-txt">I love that solvency lets us manage everything in one place. It's super helpful to be able to listen to voice samples, upload our own lists, and find quality salespeople that can grow with our team.</p>
            </div>

            <div className="tl-14-testimony">
                <img src="assets/images/tl-14/quote-icon.png" alt="Quote Icon"/>
                <p className="tl-14-testimony-txt">I love that solvency lets us manage everything in one place. It's super helpful to be able to listen to voice samples, upload our own lists, and find quality salespeople that can grow with our team.</p>
            </div>
        </Slider>
        <Slider 
        ref={imgNavRef}
        asNavFor={sliderRef.current || undefined}
        slidesToShow={3}
        arrows={false}
        centerMode={true}
        centerPadding='0'
        swipeToSlide={true}
        focusOnSelect={true}
        responsive={[
            {
                breakpoint: 480,
                settings: {
                    // centerMode: false,
                    slidesToShow: 1,
                }
            }
        ]}
        className="tl-14-testimonial-users">
            <div className="tl-14-testimony-user">
                <img src="assets/images/tl-4/user-1.jpg" alt="reviewer image"/>
                <div className="tl-14-testimony-user-txt">
                    <h6 className="tl-14-testimony-user-name">Desmond Eagle</h6>
                    <span className="tl-14-testimony-user-label">Math Teacher</span>
                </div>
            </div>

            <div className="tl-14-testimony-user">
                <img src="assets/images/tl-4/user-2.jpg" alt="reviewer image"/>
                <div className="tl-14-testimony-user-txt">
                    <h6 className="tl-14-testimony-user-name">lauri max</h6>
                    <span className="tl-14-testimony-user-label">Math Teacher</span>
                </div>
            </div>

            <div className="tl-14-testimony-user">
                <img src="assets/images/tl-4/user-3.jpg" alt="reviewer image"/>
                <div className="tl-14-testimony-user-txt">
                    <h6 className="tl-14-testimony-user-name">Yousouf abir</h6>
                    <span className="tl-14-testimony-user-label">Math Teacher</span>
                </div>
            </div>

            <div className="tl-14-testimony-user">
                <img src="assets/images/tl-4/user-4.jpg" alt="reviewer image"/>
                <div className="tl-14-testimony-user-txt">
                    <h6 className="tl-14-testimony-user-name">Ishani shah</h6>
                    <span className="tl-14-testimony-user-label">Math Teacher</span>
                </div>
            </div>
        </Slider>
    </>
  )
}

export default TestimonialSlider8