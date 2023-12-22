import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import EventMainSection2 from '@/component/event/EventMainSection2'
import Layout2 from '@/component/layout/Layout2'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: 'Talim Event Page 2',
  description: 'Developed by Azizur Rahman',
}
const Event2 = () => {
  return (
    <Layout2>
        <BreadcrumbSection title='Event two' style=''/>
        <EventMainSection2/>
    </Layout2>
  )
}

export default Event2