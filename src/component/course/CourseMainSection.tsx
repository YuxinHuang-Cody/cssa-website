'use client'
import React from 'react'
import AllCourseSection from './AllCourseSection'
import CoursePaginationSection from './CoursePaginationSection'
import { useTalimContext } from '@/context/TalimContext'

const CourseMainSection = () => {
    const {totalCoursePages} = useTalimContext()
  return (
    <>
        <AllCourseSection/>
        <CoursePaginationSection totalPage={totalCoursePages} style="tl-pagination pb-130 tl-pagination-1"/>
    </>
  )
}

export default CourseMainSection