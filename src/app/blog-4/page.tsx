import BlogMain4 from '@/component/blog/BlogMain4'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout7 from '@/component/layout/Layout7'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Blog 4',
    description: 'Developed by Azizur Rahman',
  }
const Blog4 = () => {
  return (
    <Layout7>
        <BreadcrumbSection title='Blog Four' style=''/>
        <BlogMain4/>
    </Layout7>
  )
}

export default Blog4