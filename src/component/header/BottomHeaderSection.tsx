"use client";
import Link from "next/link";
import React from "react";
import NavSection from "../navigation/NavSection";
import { useTalimContext } from "@/context/TalimContext";
const BottomHeaderSection = () => {
  const {isHeaderFixed,handleSidebarOpen} = useTalimContext()
  return (
    <div
      className={`tl-1-header-bottom ${isHeaderFixed? 'sticky':''} green-clr pt-20 pb-20`}
    >
      <div className="container">
        <div className="row g-0 align-items-center">
          <div className="col-xl-2 col-lg-2">
            <div className="row align-items-center">
              <div className="col-lg-12 col-6">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/images/logos/logo.png" alt="Logo" />
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

          <div className="col-7">
            <div className="tl-nav-menu tl-1-nav-menu">
              <NavSection ulPosition="justify-content-center" liStyle=""/>
            </div>
          </div>

          <div className="col-3 d-lg-block d-none">
            <div className="tl-header-actions kb-16-header-actions d-flex justify-content-end align-items-center">
              <Link href="/login">
                <i className="fa-regular fa-user"></i> Sign Up
              </Link>
              <Link href="/register" className="tl-def-btn tl-1-header-btn">
                Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeaderSection;
