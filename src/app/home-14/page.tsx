import AboutSection11 from '@/component/about/AboutSection11';
import BannerSection13 from '@/component/banner/BannerSection13';
import BlogSection10 from '@/component/blog/BlogSection10';
import CategorySection2 from '@/component/category/CategorySection2';
import CourseSection5 from '@/component/course/CourseSection5';
import CtaSection6 from '@/component/cta/CtaSection6';
import FooterSection from '@/component/footer/FooterSection';
import HeaderSection10 from '@/component/header/HeaderSection10';
import VideoModal from '@/component/modal/VideoModal';
import SoftwareSlider from '@/component/slider/SoftwareSlider';
import TeacherSection6 from '@/component/teacher/TeacherSection6';
import TestimonialSection4 from '@/component/testimonial/TestimonialSection4';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim Language Club",
    description: "Developed by Azizur Rahman",
  };
const Home14 = () => {
  return (
    <div className='home-14'>
        <HeaderSection10 
        darkLogo="assets/images/logos/tl-14-logo.png"
        lightLogo="assets/images/logos/tl-14-logo-light.png"
        style='tl-14-header'
        btnStyle='tl-14-def-btn'
        />
        <BannerSection13 />
        <CategorySection2 sectionStyle="tl-3-programs-pills tl-14-categories pt-120 pb-120" pageStyle='tl-14' categoryStyle='tl-14-category' />
        <AboutSection11 />
        <CourseSection5 />
        <SoftwareSlider />
        <CtaSection6 />
        <TestimonialSection4 />
        <TeacherSection6 />
        <BlogSection10 />
        <FooterSection footerStyle='tl-14-footer' />
        <VideoModal />
    </div>
  )
}

export default Home14