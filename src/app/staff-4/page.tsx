import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout8 from '@/component/layout/Layout8'
import TeacherMain4 from '@/component/teacher/TeacherMain4'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: 'Talim Staff 4',
    description: 'Developed by Azizur Rahman',
  }
const Staff4 = () => {
  return (
    <Layout8>
        <BreadcrumbSection title='Staff Four' style='tl-breadcrumb-2'/>
        <TeacherMain4/>
    </Layout8>
  )
}

export default Staff4