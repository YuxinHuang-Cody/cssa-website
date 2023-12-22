import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout2 from '@/component/layout/Layout2'
import TeacherMain3 from '@/component/teacher/TeacherMain3'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Staff 3',
    description: 'Developed by Azizur Rahman',
  }
const Staff3 = () => {
  return (
    <Layout2>
        <BreadcrumbSection title='Staff Three' style=''/>
        <TeacherMain3/>
    </Layout2>
  )
}

export default Staff3