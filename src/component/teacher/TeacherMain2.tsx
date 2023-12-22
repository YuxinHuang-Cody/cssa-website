'use client'
import React from 'react'
import AllTeacherSection2 from './AllTeacherSection2'
import AllTeacherPagination from './AllTeacherPagination'
import { useTalimContext } from '@/context/TalimContext'

const TeacherMain2 = () => {
    const {totalTeamPages} = useTalimContext()
  return (
    <>
        <AllTeacherSection2/>
        <AllTeacherPagination totalPage={totalTeamPages}/>
    </>
  )
}

export default TeacherMain2