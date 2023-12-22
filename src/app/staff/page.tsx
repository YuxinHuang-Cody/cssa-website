import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import React from 'react'
import type { Metadata } from 'next'
import TeacherMain from '@/component/teacher/TeacherMain'

export const metadata: Metadata = {
  title: 'Talim Staff 1',
  description: 'Developed by Azizur Rahman',
}
const Staff = () => {
  return (
    <Layout>
        <BreadcrumbSection title='Staff One' style=''/>
        <TeacherMain/>
    </Layout>
  )
}

export default Staff