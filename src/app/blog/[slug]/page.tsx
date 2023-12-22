import BlogDetailSection from '@/component/blog/BlogDetailSection'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ErrorSection from '@/component/error/ErrorSection'
import Layout5 from '@/component/layout/Layout5'
import { blogList } from '@/data/Data'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'Talim Blog Details',
  description: 'Developed by Azizur Rahman',
}
const BlogDetails = ({ params }: { params: { slug: string } }) => {
  const blogData = blogList.find((item) => item.slug === params.slug)
  return (
    <Layout5>
        <BreadcrumbSection title='Blog Details' style=''/>
        {blogData ? (
          <BlogDetailSection blogData={blogData}/>
        ):(
          <ErrorSection type='blog'/>
        )}
    </Layout5>
  )
}

export default BlogDetails