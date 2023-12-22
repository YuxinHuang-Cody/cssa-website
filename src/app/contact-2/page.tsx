import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ContactSection2 from '@/component/contact/ContactSection2'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Contact Page 2',
    description: 'Developed by Azizur Rahman',
  }
const Contact2 = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Contact two' style=''/>
        <ContactSection2/>
    </Layout5>
  )
}

export default Contact2