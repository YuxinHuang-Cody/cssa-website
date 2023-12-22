'use client'
import React from 'react'
import AllEventSection from './AllEventSection'
import AllEventPagination from './AllEventPagination'
import { useTalimContext } from '@/context/TalimContext'

const EventMainSection = () => {
    const {totalEventPages} = useTalimContext()
  return (
    <>
        <AllEventSection/>
        <AllEventPagination totalPage={totalEventPages}/>
    </>
  )
}

export default EventMainSection