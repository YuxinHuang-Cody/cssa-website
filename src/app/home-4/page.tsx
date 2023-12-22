import AboutSection4 from '@/component/about/AboutSection4';
import AdmissionSection from '@/component/admission/AdmissionSection';
import BannerSection4 from '@/component/banner/BannerSection4';
import BlogSection3 from '@/component/blog/BlogSection3';
import CampusSection from '@/component/campus/CampusSection';
import ProgramSection from '@/component/campus/ProgramSection';
import ResearchSection from '@/component/campus/ResearchSection';
import FooterSection5 from '@/component/footer/FooterSection5';
import HeaderSection7 from '@/component/header/HeaderSection7';
import TestimonialSlider2 from '@/component/slider/TestimonialSlider2';
import SocialSection from '@/component/social/SocialSection';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim College",
    description: "Developed by Azizur Rahman",
  };
const Home4 = () => {
  return (
    <>
        <HeaderSection7 style='red-clr' logo="assets/images/logos/logo-3-light.png"/>
        <BannerSection4/>
        <AboutSection4/>
        <AdmissionSection style=''/>
        <ProgramSection/>
        <ResearchSection/>
        <CampusSection style="tl-4-campus" textBg=''/>
        <TestimonialSlider2/>
        <BlogSection3/>
        <SocialSection sectionStyle='bg-defaults' cardStyle="tl-4-social"/>
        <FooterSection5 
        style='' 
        darkLogo="assets/images/logos/logo-3.png"
        lightLogo="assets/images/logos/logo-3-light.png"
        foorterDesc="tl-4-footer-descr"
        footerSocial="tl-4-footer-socials"
        />
    </>
  )
}

export default Home4