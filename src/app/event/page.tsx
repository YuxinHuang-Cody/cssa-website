import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout3 from '@/component/layout/Layout3'
import React from 'react'
import type { Metadata } from 'next'
import EventMainSection from '@/component/event/EventMainSection'

export const metadata: Metadata = {
  title: 'Talim Event 1',
  description: 'Developed by Azizur Rahman',
}
const Event = () => {
  return (
    <Layout3>
        <BreadcrumbSection title='Event One' style='tl-breadcrumb-3'/>
        <EventMainSection/>
    </Layout3>
  )
}

export default Event