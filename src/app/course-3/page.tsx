import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CourseMainSection3 from '@/component/course/CourseMainSection3'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Course Page 3',
    description: 'Developed by Azizur Rahman',
  }
const Course3 = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Course Three' style=''/>
        <CourseMainSection3/>
    </Layout5>
  )
}

export default Course3