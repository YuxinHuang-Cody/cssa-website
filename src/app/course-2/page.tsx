import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CourseMainSection2 from '@/component/course/CourseMainSection2'
import Layout6 from '@/component/layout/Layout6'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'Talim Course Page 2',
  description: 'Developed by Azizur Rahman',
}
const Course2 = () => {
  return (
    <Layout6>
        <BreadcrumbSection title='Course Two' style='tl-breadcrumb-2'/>
        <CourseMainSection2/>
    </Layout6>
  )
}

export default Course2