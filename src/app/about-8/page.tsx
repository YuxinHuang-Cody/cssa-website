import AboutSection8 from '@/component/about/AboutSection8'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout4 from '@/component/layout/Layout4'
import PricingSection2 from '@/component/pricing/PricingSection2'
import ServiceSection2 from '@/component/service/ServiceSection2'
import MembershipSlider from '@/component/slider/MembershipSlider'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim About 8',
    description: 'Developed by Azizur Rahman',
  }
const About8 = () => {
  return (
    <Layout4>
        <BreadcrumbSection title='About Eight' style='tl-breadcrumb-4'/>
        <AboutSection8/>
        <MembershipSlider 
        style="tl-6-membership tl-9-membership" 
        swiperStyle='tl-9-members'
        slideStyle='tl-9-member'
        />
        <ServiceSection2/>
        <PricingSection2/>
    </Layout4>
  )
}

export default About8