import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CourseDetailSection from '@/component/course/CourseDetailSection'
import ErrorSection from '@/component/error/ErrorSection'
import Layout5 from '@/component/layout/Layout5'
import { courseList } from '@/data/Data'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'Talim Course Details',
  description: 'Developed by Azizur Rahman',
}
const CourseDetails = ({ params }: { params: { slug: string } }) => {
  const courseInfo = courseList.find((item) => item.slug === params.slug)
  return (
    <Layout5>
        <BreadcrumbSection title='Course Details' style=''/>
        {courseInfo ? (
          <CourseDetailSection courseData={courseInfo}/>
        ):(
          <ErrorSection type='course'/>
        )}
    </Layout5>
  )
}

export default CourseDetails