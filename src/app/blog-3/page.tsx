import BlogMain3 from '@/component/blog/BlogMain3'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout3 from '@/component/layout/Layout3'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Blog 3',
    description: 'Developed by Azizur Rahman',
  }
const Blog3 = () => {
  return (
    <Layout3>
        <BreadcrumbSection title='Blog Three' style='tl-breadcrumb-3'/>
        <BlogMain3/>
    </Layout3>
  )
}

export default Blog3