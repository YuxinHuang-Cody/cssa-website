'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'
import AllBlogSection7 from './AllBlogSection7'
import AllBlogPagination from './AllBlogPagination'

const BlogMain7 = () => {
    const {totalBlogPages4} = useTalimContext()
  return (
    <>
        <AllBlogSection7/>
        <AllBlogPagination totalPage={totalBlogPages4}/>
    </>
  )
}

export default BlogMain7