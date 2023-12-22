import AboutSection9 from '@/component/about/AboutSection9'
import BannerSection9 from '@/component/banner/BannerSection9'
import BlogSection6 from '@/component/blog/BlogSection6';
import CampusSection2 from '@/component/campus/CampusSection2';
import CourseSection2 from '@/component/course/CourseSection2';
import FooterSection7 from '@/component/footer/FooterSection7';
import HeaderSection8 from '@/component/header/HeaderSection8'
import VideoModal from '@/component/modal/VideoModal';
import PricingSection3 from '@/component/pricing/PricingSection3';
import TestimonialSection2 from '@/component/testimonial/TestimonialSection2';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim University 2",
    description: "Developed by Azizur Rahman",
  };  
const Home10 = () => {
  return (
    <div className='home-10'>
        <HeaderSection8 
        style='tl-10-header'
        darkLogo="assets/images/logos/logo-4.png" 
        lightLogo="assets/images/logos/logo-4-light.png"
        headerStyle=''
        btnStyle='tl-def-btn'
        loginBtn={true}
        />
        <BannerSection9 />
        <AboutSection9 />
        <CourseSection2 />
        <CampusSection2 />
        <TestimonialSection2 />
        <PricingSection3 />
        <BlogSection6 />
        <FooterSection7 style='' logo='assets/images/logos/logo-4-light.png' descStyle='tl-footer-descr' socialStyle='tl-footer-socials'/>
        <VideoModal />
    </div>
  )
}

export default Home10