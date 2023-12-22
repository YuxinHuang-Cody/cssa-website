import AboutSection6 from '@/component/about/AboutSection6'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CtaSection3 from '@/component/cta/CtaSection3'
import Layout2 from '@/component/layout/Layout2'
import MembershipSlider from '@/component/slider/MembershipSlider'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim About 6',
    description: 'Developed by Azizur Rahman',
  }
const About6 = () => {
  return (
    <Layout2>
        <BreadcrumbSection title='About Six' style=''/>
        <AboutSection6 padding='pt-120' margin='mt-0'/>
        <MembershipSlider style="tl-6-membership tl-7-membership pt-120 pb-120 yellow-clr" slideStyle='' swiperStyle=''/>
        <CtaSection3 style='tl-7-cta-inner' lastWord='Dance?' lastMsg="Now and Let's Move!"/>
    </Layout2>
  )
}

export default About6