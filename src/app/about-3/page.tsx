import AboutSection3 from '@/component/about/AboutSection3'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection2 from '@/component/cta/CtaSection2'
import Layout3 from '@/component/layout/Layout3'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim About 3',
    description: 'Developed by Azizur Rahman',
  }
const About3 = () => {
  return (
    <Layout3>
        <BreadcrumbSection title='About Three' style='tl-breadcrumb-3'/>
        <AboutSection3/>
        <CtaSection2 style='tl-3-cta-inner'/>
    </Layout3>
  )
}

export default About3