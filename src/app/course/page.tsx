import React from 'react'
import type { Metadata } from 'next'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import CourseMainSection from '@/component/course/CourseMainSection'

export const metadata: Metadata = {
  title: 'Talim Course Page 1',
  description: 'Developed by Azizur Rahman',
}
const Course = () => {
  return (
    <Layout>
        <BreadcrumbSection title='Course One' style=''/>
        <CourseMainSection/>
    </Layout>
        
  )
}

export default Course