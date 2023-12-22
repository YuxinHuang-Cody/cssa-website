import ArticleSection from '@/component/blog/ArticleSection';
import PopularArticleSection from '@/component/blog/PopularArticleSection';
import FooterSection7 from '@/component/footer/FooterSection7';
import HeaderSection9 from '@/component/header/HeaderSection9';
import VideoModal from '@/component/modal/VideoModal';
import BannerSlider from '@/component/slider/BannerSlider';
import MembershipSlider from '@/component/slider/MembershipSlider';
import TrendingSlider from '@/component/slider/TrendingSlider';
import SocialSection2 from '@/component/social/SocialSection2';
import EditorialSection from '@/component/teacher/EditorialSection';
import VideoSection from '@/component/video/VideoSection';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim Magazine",
    description: "Developed by Azizur Rahman",
  };

const Home6 = () => {
  return (
    <>
        <HeaderSection9 
        darkLogo="assets/images/logos/logo-6.png"
        lightLogo="assets/images/logos/logo-6-light.png"
        />
        <BannerSlider/>
        <TrendingSlider/>
        <ArticleSection/>
        <VideoSection/>
        <PopularArticleSection/>
        <SocialSection2/>
        <EditorialSection/>
        <MembershipSlider 
        style='tl-6-membership pt-120 pb-120' 
        slideStyle='' 
        swiperStyle=''
        />
        <FooterSection7 
        logo="assets/images/logos/logo-6-light.png"
        style='tl-6-footer'
        descStyle="tl-5-footer-descr"
        socialStyle='tl-3-footer-socials tl-6-footer-socials'
        />
        <VideoModal/>
    </>
  )
}

export default Home6