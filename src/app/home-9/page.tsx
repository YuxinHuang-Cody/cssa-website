import AboutSection8 from '@/component/about/AboutSection8';
import BannerSection8 from '@/component/banner/BannerSection8';
import BlogSection5 from '@/component/blog/BlogSection5';
import ProgramSection2 from '@/component/campus/ProgramSection2';
import FooterSection4 from '@/component/footer/FooterSection4';
import HeaderSection4 from '@/component/header/HeaderSection4';
import PricingSection2 from '@/component/pricing/PricingSection2';
import ServiceSection2 from '@/component/service/ServiceSection2';
import ClassSlider from '@/component/slider/ClassSlider';
import MembershipSlider from '@/component/slider/MembershipSlider';
import MusicEventSlider from '@/component/slider/MusicEventSlider';
import TestimonialSlider3 from '@/component/slider/TestimonialSlider3';
import { testimonialList3 } from '@/data/Data';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim Music School",
    description: "Developed by Azizur Rahman",
  };  
const Home9 = () => {
  return (
    <>
        <HeaderSection4 style='pink-clr' logo="assets/images/logos/logo-9.png"/>
        <BannerSection8/>
        <AboutSection8/>
        <MembershipSlider 
        style='tl-6-membership tl-9-membership'
        swiperStyle='tl-9-members'
        slideStyle='tl-9-member'
        />
        <ProgramSection2/>
        <ServiceSection2/> 
        <ClassSlider/>
        <PricingSection2/>
        <MusicEventSlider/>
        <TestimonialSlider3 
        style='tl-9-testimonial' 
        array={testimonialList3}
        instructorImg="assets/images/tl-9/instructor.jpg"
        />
        <BlogSection5/>
        <FooterSection4 
        style='tl-9-footer'
        logo="assets/images/logos/logo-9.png"
        form='tl-9-footer-subs-form'/>
    </>
  )
}

export default Home9