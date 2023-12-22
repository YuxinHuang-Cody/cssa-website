'use client'
import React from 'react'
import AllBlogSection3 from './AllBlogSection3'
import AllBlogPagination from './AllBlogPagination'
import { useTalimContext } from '@/context/TalimContext'

const BlogMain3 = () => {
    const {totalBlogPages3} = useTalimContext()
  return (
    <>
        <AllBlogSection3/>
        <AllBlogPagination totalPage={totalBlogPages3}/>
    </>
  )
}

export default BlogMain3