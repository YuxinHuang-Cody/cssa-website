import AboutSection from '@/component/about/AboutSection'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import TeacherSlider from '@/component/slider/TeacherSlider'
import TestimonialSlider from '@/component/slider/TestimonialSlider'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Talim About 1',
  description: 'Developed by Azizur Rahman',
}
const About = () => {
  return (
    <Layout>
        <BreadcrumbSection title='About One' style=''/>
        <AboutSection/>
        <TestimonialSlider padding='pb-120'/>
        <TeacherSlider padding='pb-120'/>
    </Layout>
  )
}

export default About