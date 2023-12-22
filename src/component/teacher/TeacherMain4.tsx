'use client'
import React from 'react'
import AllTeacherSection4 from './AllTeacherSection4'
import AllTeacherPagination from './AllTeacherPagination'
import { useTalimContext } from '@/context/TalimContext'

const TeacherMain4 = () => {
    const {totalTeamPages3} = useTalimContext()
  return (
    <>
        <AllTeacherSection4/>
        <AllTeacherPagination totalPage={totalTeamPages3}/>
    </>
  )
}

export default TeacherMain4