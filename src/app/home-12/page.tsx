import BannerSection11 from '@/component/banner/BannerSection11';
import BlogSection8 from '@/component/blog/BlogSection8';
import SubjectSection from '@/component/category/SubjectSection';
import CourseSection3 from '@/component/course/CourseSection3';
import CtaSection5 from '@/component/cta/CtaSection5';
import EventSection2 from '@/component/event/EventSection2';
import FooterSection5 from '@/component/footer/FooterSection5';
import HeaderSection8 from '@/component/header/HeaderSection8';
import MembershipSlider from '@/component/slider/MembershipSlider';
import TeacherSection5 from '@/component/teacher/TeacherSection5';
import TestimonialSection3 from '@/component/testimonial/TestimonialSection3';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim Live Class",
    description: "Developed by Azizur Rahman",
  };  
const Home12 = () => {
  return (
    <div className='home-12'>
        <HeaderSection8
        darkLogo="assets/images/logos/tl-12-logo.png"
        lightLogo="assets/images/logos/tl-12-logo-light.png"
        style=''
        headerStyle=''
        btnStyle='tl-def-btn'
        loginBtn={true}
        />
        <BannerSection11 />
        <SubjectSection />
        <CourseSection3 />
        <TestimonialSection3 />
        <EventSection2 />
        <TeacherSection5 />
        <CtaSection5 />
        <MembershipSlider
        style="tl-4-membership tl-11-section-spacing"
        swiperStyle='tl-12-members'
        slideStyle=''
        />
        <BlogSection8 />
        <FooterSection5 
        style='' 
        darkLogo="assets/images/logos/tl-12-logo.png"
        lightLogo="assets/images/logos/tl-12-logo-light.png"
        foorterDesc='tl-11-footer-descr'
        footerSocial='tl-11-sidebar-socials tl-11-footer-socials tl-12-footer-socials'
        footerLink='tl-12-footer-links'
        />
    </div>
  )
}

export default Home12