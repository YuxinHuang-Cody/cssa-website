'use client'
import React from 'react'
import AllBlogSection4 from './AllBlogSection4'
import AllBlogPagination from './AllBlogPagination'
import { useTalimContext } from '@/context/TalimContext'

const BlogMain4 = () => {
    const {totalBlogPages} = useTalimContext()
  return (
    <>
        <AllBlogSection4/>
        <AllBlogPagination totalPage={totalBlogPages}/>
    </>
  )
}

export default BlogMain4