'use client'
import React from 'react'
import AllTeacherSection3 from './AllTeacherSection3'
import AllTeacherPagination from './AllTeacherPagination'
import { useTalimContext } from '@/context/TalimContext'

const TeacherMain3 = () => {
    const {totalTeamPages2} = useTalimContext()
  return (
    <>
        <AllTeacherSection3/>
        <AllTeacherPagination totalPage={totalTeamPages2}/>
    </>
  )
}

export default TeacherMain3