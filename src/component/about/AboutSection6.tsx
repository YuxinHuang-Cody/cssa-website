'use client'
import React from 'react'
import Slider from 'react-slick';
interface AboutProps{
    padding: string;
    margin: string;
}
const AboutSection6:React.FC<AboutProps> = ({padding,margin}) => {
    const settingsReverse = {
        dots: false,
        arrows: false,
        infinite: true, // Set to true to enable infinite loop
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        rtl: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
      const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4800,
        autoplaySpeed: 0,
        cssEase: "linear",
        vertical: true,
        pauseOnHover: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <section className={`tl-7-about ${padding}`}>
        <div className="container">
            <div className={`tl-7-about-content ${margin}`}>
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-7-about-info-cards">
                            <Slider 
                            className="tl-7-about-info-cards-col tl-7-about-info-cards-col-1 reverse-slider"
                            {...settingsReverse}
                            >
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/tl-7/about-1.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card tl-7-about-timings">
                                        <h5 className="tl-7-about-timings-title">Modern & Contemporize Battle</h5>

                                        <ul>
                                            <li className="tl-7-about-timing"><i className="fa-regular fa-clock"></i>Mon - Fri 8:30 - 10:30</li>
                                            <li className="tl-7-about-timing"><i className="fa-regular fa-clock"></i>Sat - Fri 10:30 - 8:30</li>
                                            <li className="tl-7-about-timing"><i className="fa-regular fa-clock"></i>Sunday Holiday</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/tl-7/about-1.jpg" alt="Dance Image"/>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card tl-7-about-timings">
                                        <h5 className="tl-7-about-timings-title">Modern & Contemporize Battle</h5>

                                        <ul>
                                            <li className="tl-7-about-timing"><i className="fa-regular fa-clock"></i>Mon - Fri 8:30 - 10:30</li>
                                            <li className="tl-7-about-timing"><i className="fa-regular fa-clock"></i>Sat - Fri 10:30 - 8:30</li>
                                            <li className="tl-7-about-timing"><i className="fa-regular fa-clock"></i>Sunday Holiday</li>
                                        </ul>
                                    </div>
                                </div>
                            </Slider>

                            <Slider 
                            className="tl-7-about-info-cards-col tl-7-about-info-cards-col-2"
                            {...settings}
                            >
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/tl-7/about-2.jpg" alt="Dance Image"/>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="tl-7-about-info-card tl-7-about-stat-card">
                                        <img src="assets/images/tl-7/kb-about-stat-icon.png" alt="Icon"/>

                                        <h6><span className="number">23<i className="fa-regular fa-sharp fa-plus"></i></span> years of experience</h6>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="tl-7-about-info-card">
                                        <img src="assets/images/tl-7/about-2.jpg" alt="Dance Image"/>
                                    </div>
                                </div>

                                <div className="slider-item">
                                    <div className="tl-7-about-info-card tl-7-about-stat-card">
                                        <img src="assets/images/tl-7/kb-about-stat-icon.png" alt="Icon"/>

                                        <h6><span className="number">23<i className="fa-regular fa-sharp fa-plus"></i></span> years of experience</h6>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-7-section-heading tl-7-about-heading yellow-clr">
                            <h6 className="tl-7-section-sub-title">dance with us</h6>
                            <h2 className="tl-7-section-title">Throughout the year We Provide <span className="last-word">Numerous</span>.</h2>
                            <p className="tl-7-about-descr">There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected randomized words which don't look even slightly believable.</p>
                            <a href="#" className="tl-def-btn-2">Learn More <i className="fa-regular fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection6