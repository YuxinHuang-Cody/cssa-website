import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ContactSection from '@/component/contact/ContactSection'
import Layout2 from '@/component/layout/Layout2'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Contact Page 1',
    description: 'Developed by Azizur Rahman',
  }
const Contact = () => {
  return (
    <Layout2>
        <BreadcrumbSection title='Contact One' style=''/>
        <ContactSection/>
    </Layout2>
  )
}

export default Contact