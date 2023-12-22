'use client'
import Link from 'next/link';
import React from 'react'
import NavSection from '../navigation/NavSection';
import { useTalimContext } from '@/context/TalimContext';
interface HeaderProp {
    lightLogo: string;
    darkLogo: string;
}
const HeaderSection9:React.FC<HeaderProp> = ({lightLogo,darkLogo}) => {
    const {isHeaderFixed,isDarkTheme,handleSidebarOpen} = useTalimContext()
  return (
    <div className="tl-header kb-10-header pt-30 pb-0">
        <div className={`kb-10-top-header ${isHeaderFixed ? 'sticky' : '' } pb-30`}>
            <div className="container">
                <div className="row g-0 align-items-center">
                    <div className="col-4 d-lg-block d-none">
                        <ul className="kb-10-top-header-socials tl-6-top-header-socials">
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                        </ul>
                    </div>

                    <div className="col-xl-4 col-lg-3">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-6">
                                <div className="logo text-start text-lg-center">
                                    <Link href="/">
                                        <img src={isDarkTheme ? lightLogo : darkLogo} alt="Logo"/>
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

                    <div className="col-xl-4 col-5  d-lg-block d-none">
                        <div className="tl-header-actions d-flex justify-content-end">
                            <a href="#" className="kb-10-def-btn tl-6-top-header-btn">Subscribe</a>
                            <form action="#" className="tl-nav-search-form">
                                <input type="search" name="Search" className="tl-nav-search" placeholder="Search items"/>
                                <button className="tl-searh-btn"><i className="fa-light fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={`kb-10-bottom-header tl-6-bottom-header ${isHeaderFixed? 'sticky':''} pt-5p pb-5p d-none d-lg-block`}>
            <div className="container">
                <div className="tl-nav-menu">
                    <NavSection ulPosition='justify-content-center' liStyle=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderSection9