import React from 'react'
import NavLink from './NavLink';
interface NavProps {
    ulPosition: string;
    liStyle: string;
}
const NavSection:React.FC<NavProps> = ({ulPosition,liStyle}) => {
  return (
    <ul className={ulPosition}>
        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">
            Home <i className="fa-regular fa-angle-down"></i>
            </a>
            <ul className="tl-submenu">
            <li>
                <NavLink href="/">Online Education (LMS)</NavLink>
            </li>
            <li>
                <NavLink href="/home-2">Kindergarten</NavLink>
            </li>
            <li>
                <NavLink href="/home-3">School</NavLink>
            </li>
            <li>
                <NavLink href="/home-4">College</NavLink>
            </li>
            <li>
                <NavLink href="/home-5">University</NavLink>
            </li>
            <li>
                <NavLink href="/home-6">Magazine</NavLink>
            </li>
            <li>
                <NavLink href="/home-7">Dance School</NavLink>
            </li>
            <li>
                <NavLink href="/home-8">Driving School</NavLink>
            </li>
            <li>
                <NavLink href="/home-9">Music School</NavLink>
            </li>
            <li>
                <NavLink href="/home-10">University Two</NavLink>
            </li>
            <li>
                <NavLink href="/home-11">Magazine Two</NavLink>
            </li>
            <li>
                <NavLink href="/home-12">Live Class</NavLink>
            </li>
            <li>
                <NavLink href="/home-13">Online Course</NavLink>
            </li>
            <li>
                <NavLink href="/home-14">Language Club</NavLink>
            </li>
            </ul>
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">
            Courses <i className="fa-regular fa-angle-down"></i>
            </a>
            <ul className="tl-submenu">
            <li>
                <NavLink href="/course">Course One</NavLink>
            </li>
            <li>
                <NavLink href="/course-2">Course Two</NavLink>
            </li>
            <li>
                <NavLink href="/course-3">Course Three</NavLink>
            </li>
            <li>
                <NavLink href="/course-4">Course Four</NavLink>
            </li>

            <li>
                <NavLink href="/course/language-and-culture-exchange-program">Course Details</NavLink>
            </li>
            </ul>
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">
            Pages <i className="fa-regular fa-angle-down"></i>
            </a>
            <ul className="tl-submenu">
            <li className="tl-dropdown-2">
                <a>
                About <i className="fa-regular fa-angle-right"></i>
                </a>

                <ul className="tl-submenu tl-submenu-2">
                <li>
                    <NavLink href="/about">About One</NavLink>
                </li>
                <li>
                    <NavLink href="/about-2">About Two</NavLink>
                </li>
                <li>
                    <NavLink href="/about-3">About Three</NavLink>
                </li>
                <li>
                    <NavLink href="/about-4">About Four</NavLink>
                </li>
                <li>
                    <NavLink href="/about-5">About Five</NavLink>
                </li>
                <li>
                    <NavLink href="/about-6">About Six</NavLink>
                </li>
                <li>
                    <NavLink href="/about-7">About Seven</NavLink>
                </li>
                <li>
                    <NavLink href="/about-8">About Eight</NavLink>
                </li>
                </ul>
            </li>
            <li className="tl-dropdown-2">
                <a>
                Staff <i className="fa-regular fa-angle-right"></i>
                </a>

                <ul className="tl-submenu tl-submenu-2">
                <li>
                    <NavLink href="/staff">Staff One</NavLink>
                </li>
                <li>
                    <NavLink href="/staff-2">Staff Two</NavLink>
                </li>
                <li>
                    <NavLink href="/staff-3">Staff Three</NavLink>
                </li>
                <li>
                    <NavLink href="/staff-4">Staff Four</NavLink>
                </li>
                <li>
                    <NavLink href="/staff-5">Staff Five</NavLink>
                </li>
                <li>
                    <NavLink href="staff-6">Staff Six</NavLink>
                </li>
                </ul>
            </li>
            <li>
                <NavLink href="/staff/nathaneal-down">Staff Profile</NavLink>
            </li>
            <li className="tl-dropdown-2">
                <a>
                Event <i className="fa-regular fa-angle-right"></i>
                </a>

                <ul className="tl-submenu tl-submenu-2">
                <li>
                    <NavLink href="/event">Event One</NavLink>
                </li>
                <li>
                <NavLink href="/event-2">Event Two</NavLink>
                </li>
                <li>
                    <NavLink href="/event-3">Event Three</NavLink>
                </li>
                </ul>
            </li>
            <li>
                <NavLink href="/event/blockchain-symposium">Event Details</NavLink>
            </li>
            <li className="tl-dropdown-2">
                <a>
                Authentication <i className="fa-regular fa-angle-right"></i>
                </a>

                <ul className="tl-submenu tl-submenu-2">
                <li>
                    <NavLink href="/login">Login</NavLink>
                </li>
                <li>
                <NavLink href="/register">Register</NavLink>
                </li>
                </ul>
            </li>
            </ul>
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a role="button">
            Blog <i className="fa-regular fa-angle-down"></i>
            </a>
            <ul className="tl-submenu">
            <li className="tl-dropdown-2">
                <a>
                Blog <i className="fa-regular fa-angle-right"></i>
                </a>

                <ul className="tl-submenu tl-submenu-2">
                <li>
                    <NavLink href="/blog">Blog One</NavLink>
                </li>
                <li>
                    <NavLink href="/blog-2">Blog Two</NavLink>
                </li>
                <li>
                    <NavLink href="/blog-3">Blog Three</NavLink>
                </li>
                <li>
                    <NavLink href="/blog-4">Blog Four</NavLink>
                </li>
                <li>
                    <NavLink href="/blog-5">Blog Five</NavLink>
                </li>
                <li>
                    <NavLink href="/blog-6">Blog Six</NavLink>
                </li>
                <li>
                    <NavLink href="/blog-7">Blog Seven</NavLink>
                </li>
                </ul>
            </li>
            <li>
                <NavLink href="/blog/lms-for-corporate-training-optimizing-employee-learning-and-development">Blog Details</NavLink>
            </li>
            </ul>
        </li>

        <li className={`tl-nav-item ${liStyle} tl-dropdown`}>
            <a>
            Contact <i className="fa-regular fa-angle-down"></i>
            </a>

            <ul className="tl-submenu">
            <li>
                <NavLink href="/contact">Contact One</NavLink>
            </li>
            <li>
                <NavLink href="/contact-2">Contact Two</NavLink>
            </li>
            </ul>
        </li>
    </ul>
  )
}

export default NavSection