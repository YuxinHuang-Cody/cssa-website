"use client";
import Link from "next/link";
import React from "react";
import NavSection from "../navigation/NavSection";
import { useTalimContext } from "@/context/TalimContext";
interface HeaderProps {
  style: string;
  lightLogo: string;
  darkLogo: string;
  headerStyle: string;
  btnStyle: string;
  loginBtn: boolean;
}
const HeaderSection8: React.FC<HeaderProps> = ({
  style,
  lightLogo,
  darkLogo,
  headerStyle,
  btnStyle,
  loginBtn,
}) => {
  const { isHeaderFixed, isDarkTheme, handleSidebarOpen } = useTalimContext();
  return (
    <div
      className={`tl-header ${headerStyle} ${
        isHeaderFixed ? "sticky" : ""
      } ${style}`}
    >
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

          <div className="col-6">
            <div className="tl-nav-menu">
              <NavSection ulPosition="" liStyle="" />
            </div>
          </div>

          <div className="col-4 d-lg-block d-none">
            <div className="tl-header-actions d-flex justify-content-end">
              {loginBtn ? (
                <>
                  <form action="#" className="tl-nav-search-form">
                    <input
                      type="search"
                      name="Search"
                      className="tl-nav-search"
                      placeholder="Search items"
                    />
                    <button className="tl-searh-btn">
                      <i className="fa-light fa-magnifying-glass"></i>
                    </button>
                  </form>
                  <Link href="/login" className={btnStyle}>
                    <i className="fa-regular fa-user"></i> Login
                  </Link>
                </>
              ) : (
                <>
                  <form
                    action="#"
                    className="tl-nav-search-form kb-10-nav-search-form"
                  >
                    <input
                      type="search"
                      name="Search"
                      className="tl-nav-search kb-10-nav-search"
                      placeholder="Search items"
                    />
                    <button className="tl-searh-btn kb-searh-btn-10">
                      <i className="fa-light fa-magnifying-glass"></i>
                    </button>
                  </form>
                  <Link href="/register" className="kb-10-def-btn">
                    Subscribe
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection8;
