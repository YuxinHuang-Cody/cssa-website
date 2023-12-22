'use client'
import Link from "next/link";
import React from "react";
import NavSection from "../navigation/NavSection";
import { useTalimContext } from "@/context/TalimContext";
interface HeaderProps {
  style: string;
  logo: string;
}
const HeaderSection3:React.FC<HeaderProps> = ({style,logo}) => {
  const {isHeaderFixed,handleSidebarOpen} = useTalimContext()
  return (
    <div className={`tl-header kb-header-11 ${isHeaderFixed? 'sticky':''} ${style}`}>
      <div className="container position-relative">
        <div className="row g-0 align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="row align-items-center">
              <div className="col-lg-12 col-6">
                <div className="logo">
                  <Link href="/">
                    <img src={logo} alt="Logo" />
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
            <div className="tl-menu-area d-none d-lg-block">
              <div className="tl-nav-menu tl-nav-menu-7">
                <NavSection ulPosition="justify-content-center" liStyle="tl-7-nav-item"/>
              </div>
            </div>
          </div>

          <div className="col-2 d-lg-block d-none position-relative">
            <div className="kb-header-actions-11 d-flex justify-content-end">
              <button className="tl-searh-btn kb-searh-open-btn-11">
                <i className="fa-light fa-magnifying-glass"></i>
              </button>
              <Link href="/login" className="tl-7-def-btn">
                Let's Dance
              </Link>
            </div>

            <form className="tl-7-search-form-modal">
              <input
                type="search"
                name="Search"
                className="tl-7-nav-search"
                placeholder="Search items"
              />
              <button type="submit" className="tl-7-search-btn">
                <i className="fa-regular fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection3;
