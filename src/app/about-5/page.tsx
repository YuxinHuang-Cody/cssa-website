import AboutSection5 from '@/component/about/AboutSection5'
import ConsultSection from '@/component/admission/ConsultSection'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout8 from '@/component/layout/Layout8'
import AlumniTestimonialSlider from '@/component/slider/AlumniTestimonialSlider'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim About 5',
    description: 'Developed by Azizur Rahman',
  }
const About5 = () => {
  return (
    <Layout8>
        <BreadcrumbSection title='About Five' style='tl-breadcrumb-2'/>
        <AboutSection5 inner='tl-5-about-inner'/>
        <AlumniTestimonialSlider/>
        <ConsultSection padding='pt-120'/>
    </Layout8>
  )
}

export default About5