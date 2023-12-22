import BlogMain6 from '@/component/blog/BlogMain6'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout9 from '@/component/layout/Layout9'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Blog 6',
    description: 'Developed by Azizur Rahman',
  }
const Blog6 = () => {
  return (
    <Layout9> 
        <BreadcrumbSection title='Blog Six' style='tl-breadcrumb-2'/>
        <BlogMain6/>
    </Layout9>
  )
}

export default Blog6