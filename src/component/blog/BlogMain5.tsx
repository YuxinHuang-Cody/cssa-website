'use client'
import React from 'react'
import AllBlogSection5 from './AllBlogSection5'
import AllBlogPagination from './AllBlogPagination'
import { useTalimContext } from '@/context/TalimContext'

const BlogMain5 = () => {
    const {totalBlogPages2} = useTalimContext()
  return (
    <>
        <AllBlogSection5/>
        <AllBlogPagination totalPage={totalBlogPages2}/>
    </>
  )
}

export default BlogMain5