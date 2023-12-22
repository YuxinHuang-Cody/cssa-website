import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import EventMainSection3 from '@/component/event/EventMainSection3'
import Layout4 from '@/component/layout/Layout4'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'Talim Event Page 3',
  description: 'Developed by Azizur Rahman',
}
const Event3 = () => {
  return (
    <Layout4>
      <BreadcrumbSection title='Event Three' style='tl-breadcrumb-4'/>
      <EventMainSection3/>
    </Layout4>
  )
}

export default Event3