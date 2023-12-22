'use client'
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { teacherList } from '@/data/Data';
import Link from 'next/link';
interface PaddingProps {
  padding: string;
}
const TeacherSlider:React.FC<PaddingProps> = ({padding}) => {

  return (
    <section className={`tl-1-teachers ${padding}`}>
      <div className="container">
        <div className="tl-1-section-heading">
          <h2 className="tl-1-section-title">Our Best Teachers</h2>
        </div>

        <Swiper
          className="tl-1-teachers-slider owl-carousel"
          slidesPerView={3}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination= {{
            el: '.swiper-custom-pagination',
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            576: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1200: {
                spaceBetween: 30,
            }
        }}
        >
          {teacherList.slice(0, 6).map((item) => (
            <SwiperSlide className="tl-1-teacher" key={item.id}>
              <img
                src={item.imgSrc}
                alt="Teacher Image"
                className="tl-1-teacher-img"
              />
              <ul className="tl-1-teacher-socials">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div className="tl-1-teacher-info">
                <h5 className="tl-1-teacher-title">
                  <Link href={`/staff/${item.slug}`}>{item.name}</Link>
                </h5>
                <h6 className="tl-1-teacher-sub-title">{item.position}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-custom-pagination"></div>
      </div>
    </section>
  );
};

export default TeacherSlider;
