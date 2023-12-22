import React, { useState } from "react";
import NavLink from "./NavLink";
interface DropdownState {
  home: boolean;
  courses: boolean;
  page: boolean;
  blog: boolean;
  about: boolean;
  staff: boolean;
  event: boolean;
  contact: boolean;
  blogPages: boolean;
  auth: boolean;
}

const MobileNavSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<DropdownState>({
    home: false,
    courses: false,
    blog: false,
    page: false,
    about: false,
    staff: false,
    event: false,
    contact: false,
    blogPages: false,
    auth: false,
  });

  // Define the function for handling dropdown toggle
  const handleDropdownToggle = (dropdownName: keyof DropdownState) => {
    setTimeout(() => {
      setIsDropdownOpen((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }, 100);
  };
  return (
    <nav className="mean-nav">
      <ul className="justify-content-center">
        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.home ? "dropdown-open" : ""}>
            Home{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.home ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("home")}
            >
              {isDropdownOpen.home ? "-" : "+"}
            </span>
          </a>

          <ul
            className={`tl-submenu ${
              isDropdownOpen.home ? "d-block" : "d-none"
            }`}
          >
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

        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.courses ? "dropdown-open" : ""}>
            Courses{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.courses ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("courses")}
            >
              {isDropdownOpen.courses ? "-" : "+"}
            </span>
          </a>

          <ul
            className={`tl-submenu ${
              isDropdownOpen.courses ? "d-block" : "d-none"
            }`}
          >
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
              <NavLink href="/course/language-and-culture-exchange-program">
                Course Details
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.page ? "dropdown-open" : ""}>
            Pages{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.page ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("page")}
            >
              {isDropdownOpen.page ? "-" : "+"}
            </span>
          </a>
          <ul
            className={`tl-submenu ${
              isDropdownOpen.page ? "d-block" : "d-none"
            }`}
          >
            <li className="tl-dropdown-2">
              <a className={isDropdownOpen.about ? "inner-dropdown-open" : ""}>
                About{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.about ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("about")}
                >
                  {isDropdownOpen.about ? "-" : "+"}
                </span>
              </a>
              <ul
                className={`tl-submenu tl-submenu-2 ${
                  isDropdownOpen.about ? "d-block" : "d-none"
                }`}
              >
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
              <a className={isDropdownOpen.staff ? "inner-dropdown-open" : ""}>
                Staff{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.staff ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("staff")}
                >
                  {isDropdownOpen.staff ? "-" : "+"}
                </span>
              </a>

              <ul
                className={`tl-submenu tl-submenu-2 ${
                  isDropdownOpen.staff ? "d-block" : "d-none"
                }`}
              >
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
                  <NavLink href="/staff-6">Staff Six</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink href="/staff/nathaneal-down">Staff Profile</NavLink>
            </li>
            <li className="tl-dropdown-2">
              <a className={isDropdownOpen.event ? "inner-dropdown-open" : ""}>
                Event{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.event ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("event")}
                >
                  {isDropdownOpen.event ? "-" : "+"}
                </span>
              </a>
              <ul
                className={`tl-submenu tl-submenu-2 ${
                  isDropdownOpen.event ? "d-block" : "d-none"
                }`}
              >
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
              <NavLink href="/event/blockchain-symposium">
                Event Details
              </NavLink>
            </li>
            <li className="tl-dropdown-2">
              <a className={isDropdownOpen.auth ? "inner-dropdown-open" : ""}>
                Authentication{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.auth ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("auth")}
                >
                  {isDropdownOpen.auth ? "-" : "+"}
                </span>
              </a>
              <ul
                className={`tl-submenu tl-submenu-2 ${
                  isDropdownOpen.auth ? "d-block" : "d-none"
                }`}
              >
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

        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.blog ? "dropdown-open" : ""}>
            Blogs{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.blog ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("blog")}
            >
              {isDropdownOpen.blog ? "-" : "+"}
            </span>
          </a>
          <ul
            className={`tl-submenu ${
              isDropdownOpen.blog ? "d-block" : "d-none"
            }`}
          >
            <li className="tl-dropdown-2">
              <a
                className={
                  isDropdownOpen.blogPages ? "inner-dropdown-open" : ""
                }
              >
                Blog{" "}
                <span
                  className={`inner-mean-expand ${
                    isDropdownOpen.blogPages ? "active" : ""
                  }`}
                  role="button"
                  onClick={() => handleDropdownToggle("blogPages")}
                >
                  {isDropdownOpen.blogPages ? "-" : "+"}
                </span>
              </a>

              <ul
                className={`tl-submenu tl-submenu-2 ${
                  isDropdownOpen.blogPages ? "d-block" : "d-none"
                }`}
              >
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
              <NavLink href="/blog/lms-for-corporate-training-optimizing-employee-learning-and-development">
                Blog Details
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="tl-nav-item tl-dropdown">
          <a className={isDropdownOpen.contact ? "dropdown-open" : ""}>
            Contact{" "}
            <span
              className={`inner-mean-expand ${
                isDropdownOpen.contact ? "active" : ""
              }`}
              role="button"
              onClick={() => handleDropdownToggle("contact")}
            >
              {isDropdownOpen.contact ? "-" : "+"}
            </span>
          </a>
          <ul
            className={`tl-submenu ${
              isDropdownOpen.contact ? "d-block" : "d-none"
            }`}
          >
            <li>
              <NavLink href="/contact">Contact One</NavLink>
            </li>
            <li className="mean-last">
              <NavLink href="/contact-2">Contact Two</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavSection;
