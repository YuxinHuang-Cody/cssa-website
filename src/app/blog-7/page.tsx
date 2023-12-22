import BlogMain7 from '@/component/blog/BlogMain7'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout4 from '@/component/layout/Layout4'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Blog 7',
    description: 'Developed by Azizur Rahman',
  }
const Blog7 = () => {
  return (
    <Layout4>
        <BreadcrumbSection title='Blog Seven' style='tl-breadcrumb-4'/>
        <BlogMain7/>
    </Layout4>
  )
}

export default Blog7