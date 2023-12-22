import AboutSection6 from '@/component/about/AboutSection6';
import BannerSection6 from '@/component/banner/BannerSection6';
import CategorySection from '@/component/category/CategorySection';
import ContactSection from '@/component/contact/ContactSection';
import ClassSection from '@/component/course/ClassSection';
import CtaSection3 from '@/component/cta/CtaSection3';
import EventSection from '@/component/event/EventSection';
import FooterSection3 from '@/component/footer/FooterSection3';
import HeaderSection3 from '@/component/header/HeaderSection3';
import MarqueeTextSection from '@/component/marquee/MarqueeTextSection';
import FacultySlider2 from '@/component/slider/FacultySlider2';
import MembershipSlider from '@/component/slider/MembershipSlider';
import TestimonialSlider3 from '@/component/slider/TestimonialSlider3';
import VideoSection2 from '@/component/video/VideoSection2';
import { testimonialList2 } from '@/data/Data';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim Dance School",
    description: "Developed by Azizur Rahman",
  };    
const Home7 = () => {
  return (
    <>
        <div className="tl-7-header-container">
          <HeaderSection3 style='' logo="assets/images/logos/logo-7.png"/> 
        </div>
        <BannerSection6/>
        <AboutSection6 padding='' margin=''/>
        <MembershipSlider style="tl-6-membership tl-7-membership yellow-clr pt-120 pb-120" slideStyle='' swiperStyle=''/>
        <ClassSection/>
        <VideoSection2/>
        <MarqueeTextSection/>
        <CategorySection/>
        <TestimonialSlider3 
        style='' 
        array={testimonialList2}
        instructorImg="assets/images/tl-7/instructor.png"
        />
        <FacultySlider2/>
        <EventSection/>
        <ContactSection/>
        <CtaSection3 style='' lastWord='Dance?' lastMsg="Now and Let's Move!"/>
        <FooterSection3 style='' logo="assets/images/logos/logo-7.png"/>
    </>
  )
}

export default Home7