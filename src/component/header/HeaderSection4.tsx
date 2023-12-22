'use client'
import Link from "next/link";
import React from "react";
import NavSection from "../navigation/NavSection";
import { useTalimContext } from "@/context/TalimContext";
interface HeaderProps {
  style: string;
  logo: string;
}
const HeaderSection4:React.FC<HeaderProps> = ({style,logo}) => {
  const {isHeaderFixed,handleSidebarOpen} = useTalimContext()
  return (
    <div className={`tl-header tl-9-header ${isHeaderFixed? 'sticky':''} ${style}`}>
      <div className="container">
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
            <div className="tl-nav-menu">
              <NavSection ulPosition="justify-content-center" liStyle="tl-9-nav-item"/>
            </div>
          </div>

          <div className="col-2 d-lg-block d-none">
            <div className="tl-header-actions d-flex justify-content-end">
              <Link href="#" className="tl-def-btn">
                BOOK ONLINE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection4;
