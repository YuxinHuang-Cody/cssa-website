import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout5 from '@/component/layout/Layout5'
import TeacherMain6 from '@/component/teacher/TeacherMain6'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Staff 6',
    description: 'Developed by Azizur Rahman',
  }
const Staff6 = () => {
  return (
    <Layout5>
      <BreadcrumbSection title='Staff Six' style=''/>
      <TeacherMain6/>
    </Layout5>
  )
}

export default Staff6