'use client'
import AccordionSection from '@/component/accordion/AccordionSection'
import { faqList } from '@/data/Data'
import React from 'react'

const CourseFaq = () => {
  return (
    <div className="tl-event-details-faq tl-event-details-area">
        <h3 className="tl-event-details-area-title">
            Things you'll get to learn from this course
        </h3>

        <AccordionSection array={faqList}/>
    </div>
  )
}

export default CourseFaq