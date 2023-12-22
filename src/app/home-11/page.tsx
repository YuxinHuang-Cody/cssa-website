import BannerSection10 from '@/component/banner/BannerSection10';
import ArticleSection2 from '@/component/blog/ArticleSection2';
import BlogSection7 from '@/component/blog/BlogSection7';
import FooterSection5 from '@/component/footer/FooterSection5';
import HeaderSection8 from '@/component/header/HeaderSection8';
import MembershipSlider from '@/component/slider/MembershipSlider';
import SocialSection from '@/component/social/SocialSection';
import TeacherSection4 from '@/component/teacher/TeacherSection4';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim Magazine 2",
    description: "Developed by Azizur Rahman",
  };  

const Home11 = () => {
  return (
    <div className='home-11'>
        <HeaderSection8
        darkLogo="assets/images/logos/tl-11-logo.png"
        lightLogo="assets/images/logos/tl-11-logo-light.png"
        style=''
        headerStyle=''
        btnStyle=''
        loginBtn={false}
        />
        <BannerSection10 />
        <BlogSection7 />
        <ArticleSection2 />
        <TeacherSection4 />
        <MembershipSlider 
        style='tl-11-membership tl-11-section-spacing' 
        slideStyle='tl-11-member' 
        swiperStyle='tl-11-members'
        />
        <SocialSection 
        sectionStyle='tl-11-socials' 
        cardStyle='tl-4-social tl-11-social'
        btnStyle='tl-11-social-btn'
         />
        <FooterSection5 
        style='' 
        darkLogo="assets/images/logos/tl-11-logo.png"
        lightLogo="assets/images/logos/tl-11-logo-light.png"
        foorterDesc='tl-11-footer-descr'
        footerSocial='tl-11-sidebar-socials tl-11-footer-socials'
        footerLink='tl-11-footer-link'
        />
    </div>
  )
}

export default Home11