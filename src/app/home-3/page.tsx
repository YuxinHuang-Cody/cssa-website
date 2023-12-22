import AboutSection3 from '@/component/about/AboutSection3';
import ConsultSection2 from '@/component/admission/ConsultSection2';
import BannerSection3 from '@/component/banner/BannerSection3';
import BlogSection2 from '@/component/blog/BlogSection2';
import AcademicProgramSection from '@/component/campus/AcademicProgramSection';
import CtaSection2 from '@/component/cta/CtaSection2';
import UpcomingEventSection from '@/component/event/UpcomingEventSection';
import FooterSection2 from '@/component/footer/FooterSection2';
import HeaderSection2 from '@/component/header/HeaderSection2';
import TeacherSection2 from '@/component/teacher/TeacherSection2';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim School",
    description: "Developed by Azizur Rahman",
  };
const Home3 = () => {
  return (
    <>
    <HeaderSection2 
    style='' 
    logo="assets/images/logos/logo-5.png"
    />
    <BannerSection3/>
    <AboutSection3/>
    <AcademicProgramSection/>
    <CtaSection2 style=''/>
    <UpcomingEventSection/>
    <TeacherSection2/>
    <BlogSection2/>
    <ConsultSection2/>
    <FooterSection2 
    darkLogo="assets/images/logos/logo-5-dark.png"
    lightLogo="assets/images/logos/logo-5.png"
    />    
    </>
  )
}

export default Home3