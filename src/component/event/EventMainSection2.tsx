'use client'
import React from 'react'
import AllEventSection2 from './AllEventSection2'
import AllEventPagination from './AllEventPagination'
import { useTalimContext } from '@/context/TalimContext'

const EventMainSection2 = () => {
    const {totalEventPages2} = useTalimContext()
  return (
    <>
        <AllEventSection2/>
        <div className='tl-pagination-container-dark'>
           <AllEventPagination totalPage={totalEventPages2}/> 
        </div>
    </>
  )
}

export default EventMainSection2