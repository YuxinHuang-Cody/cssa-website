import AboutSection2 from '@/component/about/AboutSection2'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection from '@/component/cta/CtaSection'
import Layout6 from '@/component/layout/Layout6'
import AboutTestimonialSlider from '@/component/slider/AboutTestimonialSlider'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim About 2',
    description: 'Developed by Azizur Rahman',
  }
const About2 = () => {
  return (
    <Layout6>
        <BreadcrumbSection title='About Two' style='tl-breadcrumb-2'/>
        <AboutSection2/>
        <AboutTestimonialSlider 
       pageStyle='tl-2' 
       singleCardStyle='tl-single-testimony tl-2-testimony'
       navStyle='tl'
        />
        <CtaSection/>
    </Layout6>
  )
}

export default About2