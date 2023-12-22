'use client'
import { useTalimContext } from '@/context/TalimContext';
import Link from 'next/link'
import React from 'react'
import NavSection from '../navigation/NavSection';
type Props = {
    lightLogo: string;
    darkLogo: string;
    style?: string;
    btnStyle?: string;
}
const HeaderSection10 = ({lightLogo, darkLogo,style,btnStyle} : Props) => {
    const { isDarkTheme, handleSidebarOpen, isHeaderFixed } = useTalimContext();
  return (
    <div className={`tl-header tl-13-header ${style} ${isHeaderFixed ? 'sticky' : ''}`}>
    <div className="container">
        <div className="row g-0 align-items-center">
            <div className="col-xl-2 col-lg-2">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-6">
                        <div className="logo">
                            <Link href="/">
                                <img src={isDarkTheme ? lightLogo : darkLogo} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="d-lg-none d-flex justify-content-end col-6">
                        <button 
                        className="tl-hamburger navbar-toggler"
                        onClick={handleSidebarOpen}
                        >
                            <i className="icofont-navigation-menu"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-8">
                <div className="tl-nav-menu">
                    <NavSection ulPosition='justify-content-center' liStyle='' />
                </div>
            </div>

            <div className="col-2 d-lg-block d-none">
                <div className="tl-header-actions tl-13-header-actions d-flex justify-content-end align-items-center">
                    <Link href="/login">Login</Link>
                    <Link href="/register" className={`tl-def-btn ${btnStyle}`}><i className="fa-regular fa-user"></i> Sign Up</Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HeaderSection10