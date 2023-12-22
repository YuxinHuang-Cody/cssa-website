import AboutSection10 from '@/component/about/AboutSection10';
import BannerSection12 from '@/component/banner/BannerSection12';
import BlogSection9 from '@/component/blog/BlogSection9';
import CategorySection2 from '@/component/category/CategorySection2';
import CourseSection4 from '@/component/course/CourseSection4';
import CtaSection3 from '@/component/cta/CtaSection3';
import EventSection3 from '@/component/event/EventSection3';
import FooterSection3 from '@/component/footer/FooterSection3';

import HeaderSection10 from '@/component/header/HeaderSection10';
import CountrySlider from '@/component/slider/CountrySlider';
import MembershipSlider from '@/component/slider/MembershipSlider';
import TestimonialSlider7 from '@/component/slider/TestimonialSlider7';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim Online Course",
    description: "Developed by Azizur Rahman",
  };
const Home13 = () => {
  return (
    <div className='home-13'>
        <HeaderSection10 
        style='home-13-header'
        darkLogo="assets/images/logos/tl-13-logo.png"
        lightLogo="assets/images/logos/tl-13-logo-light.png"
        />
        <BannerSection12 />
        <CountrySlider />
        <AboutSection10 />
        <CategorySection2 sectionStyle="tl-13-categories pt-60 pb-120" pageStyle='tl-13'/>
        <CourseSection4 />
        <TestimonialSlider7 />
        <EventSection3 />
        <MembershipSlider 
        style='tl-6-membership tl-11-section-spacing'
        swiperStyle='tl-13-members'
        slideStyle='' 
        />
        <BlogSection9 />
        <CtaSection3 style='' lastWord='Shine?' lastMsg='Enroll Today!' />
        <FooterSection3 
        logo="assets/images/logos/tl-13-logo-light.png"
        style=''
        />
    </div>
  )
}

export default Home13