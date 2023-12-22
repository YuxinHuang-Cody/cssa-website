import BlogMain2 from '@/component/blog/BlogMain2'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout6 from '@/component/layout/Layout6'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Blog 2',
    description: 'Developed by Azizur Rahman',
  }
const Blog2 = () => {
  return (
    <Layout6>
       <BreadcrumbSection title='Blog Two' style='tl-breadcrumb-2'/> 
       <BlogMain2/>
    </Layout6>
  )
}

export default Blog2