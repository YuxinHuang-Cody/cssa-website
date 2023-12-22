import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CourseMainSection4 from '@/component/course/CourseMainSection4'
import Layout4 from '@/component/layout/Layout4'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Course Page 4',
    description: 'Developed by Azizur Rahman',
  }
const Course4 = () => {
  return (
    <Layout4>
        <BreadcrumbSection title='Course Four' style='tl-breadcrumb-4'/>
        <CourseMainSection4/>
    </Layout4>
  )
}

export default Course4