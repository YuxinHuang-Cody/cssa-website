"use client";
import { faqList } from "@/data/Data";
import React from "react";
import AccordionSection from "../accordion/AccordionSection";

const FaqSection = () => {
  return (
    <section className="tl-8-faq tl-3-section-spacing">
      <div className="container">
        <div className="row g-0 align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-6">
            <div className="tl-8-faq-img">
              <img src="assets/images/tl-8/faq.jpg" alt="FAQ image" />
            </div>
          </div>

          <div className="col-xl-5 col-lg-6">
            <h2 className="tl-8-section-title">
              Get Quick Answers Your To Concerns.
            </h2>
            <AccordionSection array={faqList.slice(0,3)}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
