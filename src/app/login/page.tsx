import AuthSection from '@/component/authentication/AuthSection';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout5 from '@/component/layout/Layout5'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim Login Page",
    description: "Developed by Azizur Rahman",
  }; 
const Login = () => {
  return (
    <Layout5>
        <BreadcrumbSection title='Login' style=''/>
        <AuthSection login={true}/>
    </Layout5>
  )
}

export default Login