'use client'
import React from 'react'
import AllBlogSection2 from './AllBlogSection2'
import AllBlogPagination from './AllBlogPagination'
import { useTalimContext } from '@/context/TalimContext'

const BlogMain2 = () => {
    const {totalBlogPages2} = useTalimContext()
  return (
    <>
        <AllBlogSection2/>
        <AllBlogPagination totalPage={totalBlogPages2}/>
    </>
  )
}

export default BlogMain2