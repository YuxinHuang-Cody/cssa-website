'use client'
import React from "react";
import { Tab, Nav } from "react-bootstrap";
import CourseTabDesc from "./CourseTabDesc";
import CourseFaq from "./CourseFaq";
import CurriculumAccordion from "./CurriculumAccordion";
import CourseInstructorDetails from "./CourseInstructorDetails";
import CourseReviewSection from "./CourseReviewSection";

const CourseTabSection = () => {
  return (
    <Tab.Container id="myTab" defaultActiveKey="overview-tab">
      <Nav className="nav-tabs tl-course-details-navs">
        <Nav.Item>
          <Nav.Link eventKey="overview-tab">overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="curriculum-tab">curriculum</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="instructor-tab">instructor</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reviews-tab">reviews</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content id="tl-course-tab-content">
        <Tab.Pane eventKey="overview-tab">
          <CourseTabDesc />
          <CourseFaq />
        </Tab.Pane>

        <Tab.Pane eventKey="curriculum-tab">
          <CurriculumAccordion />
        </Tab.Pane>

        <Tab.Pane eventKey="instructor-tab">
          <CourseInstructorDetails />
        </Tab.Pane>

        <Tab.Pane eventKey="reviews-tab">
          <CourseReviewSection />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default CourseTabSection;
