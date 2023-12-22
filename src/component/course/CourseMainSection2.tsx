'use client';
import React from 'react'
import AllCourseSection2 from './AllCourseSection2';
import CoursePaginationSection from './CoursePaginationSection';
import { useTalimContext } from '@/context/TalimContext';

const CourseMainSection2 = () => {
    const {totalCoursePages2} = useTalimContext()
  return (
    <>
        <AllCourseSection2/>
        <CoursePaginationSection totalPage={totalCoursePages2} style="tl-pagination tl-pagination-2 pb-120"/>
    </>
  )
}

export default CourseMainSection2