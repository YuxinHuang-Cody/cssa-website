import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout6 from '@/component/layout/Layout6'
import TeacherMain2 from '@/component/teacher/TeacherMain2'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Staff 2',
    description: 'Developed by Azizur Rahman',
  }
const Staff2 = () => {
  return (
    <Layout6>
        <BreadcrumbSection title='Staff Two' style='tl-breadcrumb-2'/>
        <TeacherMain2/>
    </Layout6>
  )
}

export default Staff2