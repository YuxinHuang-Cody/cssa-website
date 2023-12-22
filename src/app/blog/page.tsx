import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import React from 'react'
import type { Metadata } from 'next'
import BlogMain1 from '@/component/blog/BlogMain1'

export const metadata: Metadata = {
  title: 'Talim Blog 1',
  description: 'Developed by Azizur Rahman',
}
const Blog = () => {
  return (
    <Layout>
        <BreadcrumbSection title='Blog One' style=''/>
        <BlogMain1/>
    </Layout>
  )
}

export default Blog