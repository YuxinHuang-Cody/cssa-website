import AboutSection5 from '@/component/about/AboutSection5';
import ConsultSection from '@/component/admission/ConsultSection';
import BannerSection5 from '@/component/banner/BannerSection5';
import BlogSection4 from '@/component/blog/BlogSection4';
import AcademicSection from '@/component/campus/AcademicSection';
import CampusSection from '@/component/campus/CampusSection';
import FooterSection6 from '@/component/footer/FooterSection6';
import HeaderSection8 from '@/component/header/HeaderSection8';
import AlumniTestimonialSlider from '@/component/slider/AlumniTestimonialSlider';
import FacultySlider from '@/component/slider/FacultySlider';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim University",
    description: "Developed by Azizur Rahman",
  };
const Home5 = () => {
  return (
    <>
      <div className="container position-relative">
        <HeaderSection8 
        style='' 
        darkLogo="assets/images/logos/logo-4.png" 
        lightLogo="assets/images/logos/logo-4-light.png"
        headerStyle='tl-header-5'
        btnStyle="tl-5-def-btn"
        loginBtn={true}
        />
      </div>
      <BannerSection5/>
      <AboutSection5 inner=''/>
      <AcademicSection/>
      <CampusSection 
      style="tl-5-campus" 
      textBg='tl-5-campus-txt'
      />
      <FacultySlider/>
      <AlumniTestimonialSlider/>
      <BlogSection4/>
      <ConsultSection padding=''/>
      <FooterSection6 
      darkLogo="assets/images/logos/logo-4.png" 
      lightLogo="assets/images/logos/logo-4-light.png"
      />
    </>
  )
}

export default Home5