import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout5 from '@/component/layout/Layout5'
import React from 'react'
import type { Metadata } from 'next'
import EventDetailSection from '@/component/event/EventDetailSection'
import { eventList } from '@/data/Data'
import ErrorSection from '@/component/error/ErrorSection'

export const metadata: Metadata = {
  title: 'Talim Event Details',
  description: 'Developed by Azizur Rahman',
}
const EventDetails = ({ params }: { params: { slug: string } }) => {
    const eventData = eventList.find((item) => item.slug === params.slug)
  return (
    <Layout5>
        <BreadcrumbSection title='Event Details' style=''/>
        {eventData ? (
          <EventDetailSection eventData={eventData}/>
        ): (
          <ErrorSection type='event'/>
        )}
    </Layout5>
  )
}

export default EventDetails