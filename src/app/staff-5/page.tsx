import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout9 from '@/component/layout/Layout9'
import TeacherMain5 from '@/component/teacher/TeacherMain5'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Staff 5',
    description: 'Developed by Azizur Rahman',
  }
const Staff5 = () => {
  return (
    <Layout9>
      <BreadcrumbSection title='Staff Five' style='tl-breadcrumb-2'/>
      <TeacherMain5/>
    </Layout9>
  )
}

export default Staff5