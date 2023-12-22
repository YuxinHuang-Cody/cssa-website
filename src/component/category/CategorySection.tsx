'use client'
import React from "react";
import { Nav, Tab } from "react-bootstrap";

const CategorySection = () => {
    return (
      <section className="tl-7-categories tl-7-section-spacing">
        <div className="container">
          <div className="tl-7-section-heading tl-7-categories-heading">
            <h6 className="tl-7-section-sub-title">dance Curriculum</h6>
            <h2 className="tl-7-section-title">
              Choose Your <span className="last-word">Style</span>.
            </h2>
          </div>
  
          <div className="tl-7-categories-row">
            <Tab.Container defaultActiveKey="tl-7-cat-1-tab">
              <Nav variant="tabs" className="nav nav-tabs" id="myTab" role="tablist">
                <Nav.Item>
                  <Nav.Link eventKey="tl-7-cat-1-tab">
                    <span className="tl-7-cate-sub-title">Dance Classes</span>
                    <span className="tl-7-cate-title">Cardio Dance</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tl-7-cat-2-tab">
                    <span className="tl-7-cate-sub-title">Talented Instructors</span>
                    <span className="tl-7-cate-title">Hip Hop Dance</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tl-7-cat-3-tab">
                    <span className="tl-7-cate-sub-title">Booking</span>
                    <span className="tl-7-cate-title">Jazz Dance</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tl-7-cat-4-tab">
                    <span className="tl-7-cate-sub-title">Earn Medals</span>
                    <span className="tl-7-cate-title">Salsa Dance</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="tab-content" id="myTabContent">
                <Tab.Pane eventKey="tl-7-cat-1-tab">
                  <img src="assets/images/tl-7/cate-1.jpg" alt="Dance image" />
                </Tab.Pane>
                <Tab.Pane eventKey="tl-7-cat-2-tab">
                  <img src="assets/images/tl-7/cate-2.jpg" alt="Dance image" />
                </Tab.Pane>
                <Tab.Pane eventKey="tl-7-cat-3-tab">
                  <img src="assets/images/tl-7/cate-3.jpg" alt="Dance Image" />
                </Tab.Pane>
                <Tab.Pane eventKey="tl-7-cat-4-tab">
                  <img src="assets/images/tl-7/cate-4.jpg" alt="Dance Image" />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </section>
    );
  };
  
  export default CategorySection;
  
