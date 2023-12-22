'use client'
import React from 'react'
import AllEventSection3 from './AllEventSection3'
import AllEventPagination from './AllEventPagination'
import { useTalimContext } from '@/context/TalimContext'

const EventMainSection3 = () => {
    const {totalEventPages3} = useTalimContext()
  return (
    <>
        <AllEventSection3/>
        <AllEventPagination totalPage={totalEventPages3}/>
    </>
  )
}

export default EventMainSection3