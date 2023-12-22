'use client'
import React from 'react'
import AllTeacherSection from './AllTeacherSection'
import AllTeacherPagination from './AllTeacherPagination'
import { useTalimContext } from '@/context/TalimContext'

const TeacherMain = () => {
    const {totalTeamPages} = useTalimContext()
  return (
    <>
        <AllTeacherSection/>
        <AllTeacherPagination totalPage={totalTeamPages
        }/>
    </>
  )
}

export default TeacherMain