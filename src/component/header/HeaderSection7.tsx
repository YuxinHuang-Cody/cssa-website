'use client'
import Link from 'next/link'
import React from 'react'
import NavSection from '../navigation/NavSection';
import { useTalimContext } from '@/context/TalimContext';
interface HeaderProps {
    style: string;
    logo: string;
}
const HeaderSection7:React.FC<HeaderProps> = ({style,logo}) => {
    const {isHeaderFixed,handleSidebarOpen} = useTalimContext()
  return (
    <div className={`tl-4-header ${style}`}>
        <div className="tl-8-top-header">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <ul className="tl-8-top-header-contacts">
                            <li><a href="tel:12356877787"><i className="fa-solid fa-phone"></i> (88) 123 568 777 87 </a></li>
                            <li><a href="mailto:info@xyz-text.com"><i className="fa-solid fa-envelope"></i> info@xyz-text.com</a></li>
                            <li><i className="fa-solid fa-location-dot"></i> New Jersey 07052, USA</li>
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <ul className="tl-8-top-header-socials">
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className={`tl-4-bottom-header ${isHeaderFixed? 'sticky' : ''}`}>
            <div className="container">
                <div className="row justify-content-between g-0 align-items-center">
                    <div className="col-xl-2 col-lg-2">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-6">
                                <div className="logo">
                                    <Link href="/">
                                        <img src={logo} alt="Logo"/>
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

                    <div className="col-xxl-5 col-6">
                        <div className="tl-nav-menu tl-4-nav-menu">
                            <NavSection ulPosition='justify-content-center' liStyle=''/>
                        </div>
                    </div>

                    <div className="col-xxl-1 d-xxl-block d-none"></div>

                    <div className="col-4 d-lg-block d-none">
                        <div className="tl-header-actions d-flex justify-content-end">
                            <form action="#" className="tl-nav-search-form tl-4-nav-search-form">
                                <input type="search" name="Search" className="tl-nav-search" placeholder="Search items"/>
                                <button className="tl-searh-btn"><i className="fa-light fa-magnifying-glass"></i></button>
                            </form>
                            <Link 
                            href="/login" 
                            className="tl-def-btn tl-4-def-btn"
                            >
                                <i className="fa-light fa-user"></i> 
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderSection7