import AboutSection7 from '@/component/about/AboutSection7';
import BannerSection7 from '@/component/banner/BannerSection7';
import ContactSection2 from '@/component/contact/ContactSection2';
import CtaSection4 from '@/component/cta/CtaSection4';
import FaqSection from '@/component/faq/FaqSection';
import FooterSection3 from '@/component/footer/FooterSection3';
import HeaderSection5 from '@/component/header/HeaderSection5';
import PricingSection from '@/component/pricing/PricingSection';
import ServiceSection3 from '@/component/service/ServiceSection3';
import DrivingCourseSilder from '@/component/slider/DrivingCourseSilder';
import TestimonialSlider4 from '@/component/slider/TestimonialSlider4';
import TeacherSection3 from '@/component/teacher/TeacherSection3';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim Driving School",
    description: "Developed by Azizur Rahman",
  };  
const Home8 = () => {
  return (
    <>
        <HeaderSection5 style='' logo="assets/images/logos/logo-8.png"/>
        <BannerSection7/>
        <ServiceSection3/>
        <AboutSection7/>
        <DrivingCourseSilder/>
        <TeacherSection3/>
        <PricingSection/>
        <TestimonialSlider4/>
        <FaqSection/>
        <CtaSection4 style=''/>
        <ContactSection2/>
        <FooterSection3 style='tl-8-footer' logo="assets/images/logos/logo-8.png"/>
    </>
  )
}

export default Home8