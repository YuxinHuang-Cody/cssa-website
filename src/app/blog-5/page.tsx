import BlogMain5 from '@/component/blog/BlogMain5'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout8 from '@/component/layout/Layout8'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Blog 5',
    description: 'Developed by Azizur Rahman',
  }
const Blog5 = () => {
  return (
    <Layout8>
        <BreadcrumbSection title='Blog Five' style='tl-breadcrumb-2'/>
        <BlogMain5/>
    </Layout8>
  )
}

export default Blog5