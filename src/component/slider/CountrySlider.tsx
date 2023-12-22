'use client'
import React from 'react'
import Slider from 'react-slick'
const CountrySlider = () => {
    const settings = {
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        speed: 1000,
        infinite: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    }
  return (
    <div className="tl-13-countries-bg">
        <div className="container">
            <div className="tl-13-countries">
                <Slider 
                className="tl-13-countries-row"
                {...settings}
                >
                    <div className="tl-13-country">
                        <span className="fi fi-br fis"></span>
                        <h5 className="tl-13-country-name">Brazil</h5>
                    </div>
                    <div className="tl-13-country">
                        <span className="fi fi-ca fis"></span>
                        <h5 className="tl-13-country-name">Canada</h5>
                    </div>
                    <div className="tl-13-country">
                        <span className="fi fi-de fis"></span>
                        <h5 className="tl-13-country-name">Germany</h5>
                    </div>
                    <div className="tl-13-country">
                        <span className="fi fi-fr fis"></span>
                        <h5 className="tl-13-country-name">France</h5>
                    </div>
                    <div className="tl-13-country">
                        <span className="fi fi-gb fis"></span>
                        <h5 className="tl-13-country-name">England</h5>
                    </div>
                    <div className="tl-13-country">
                        <span className="fi fi-es fis"></span>
                        <h5 className="tl-13-country-name">Spain</h5>
                    </div>
                    <div className="tl-13-country">
                        <span className="fi fi-bd fis"></span>
                        <h5 className="tl-13-country-name">Bangladesh</h5>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default CountrySlider