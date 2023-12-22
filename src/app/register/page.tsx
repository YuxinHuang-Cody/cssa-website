import AuthSection from '@/component/authentication/AuthSection';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection';
import Layout5 from '@/component/layout/Layout5';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Talim Register Page",
    description: "Developed by Azizur Rahman",
  }; 
const Register = () => {
  return (
    <Layout5>
      <BreadcrumbSection title='Register' style=''/>
      <AuthSection login={false}/>
    </Layout5>
  )
}

export default Register