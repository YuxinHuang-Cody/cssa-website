'use client'
import React from 'react';
import Slider from 'react-slick';
import { memberList } from '@/data/Data'; // Assuming this import path is correct

const MemberSlider = () => {
  const settings = {
    slidesToShow: 5,
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    infinite: true,
    pauseOnHover: true,
    className: "tl-1-members",
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="tl-1-banner-bottom pb-145">
      <h6>&#128151; Memberships and partners</h6>
      <div className="row justify-content-center g-0">
        <div className="col-lg-9">
          <Slider {...settings}>
            {memberList.map((item) => (
              <div className="tl-1-member" key={item.id}>
                <img src={item.imgSrc} alt="Member logo" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MemberSlider;
