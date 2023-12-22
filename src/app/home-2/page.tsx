import AboutSection2 from "@/component/about/AboutSection2";
import BannerSection2 from "@/component/banner/BannerSection2";
import CtaSection from "@/component/cta/CtaSection";
import FooterSection4 from "@/component/footer/FooterSection4";
import HeaderSection6 from "@/component/header/HeaderSection6";
import BlogSlider from "@/component/slider/BlogSlider";
import CourseSlider2 from "@/component/slider/CourseSlider2";
import ServiceSlider from "@/component/slider/ServiceSlider";
import TeacherSection from "@/component/teacher/TeacherSection";
import TestimonialSection from "@/component/testimonial/TestimonialSection";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Talim Kindergarten",
  description: "Developed by Azizur Rahman",
};
const Home2 = () => {
  return (
    <>
      <div className="outer-container">
        <HeaderSection6 
        style="red-clr" 
        lightLogo="assets/images/logos/logo-2-light.png" 
        darkLogo="assets/images/logos/logo-2.png" 
        />
        <BannerSection2 />
        <AboutSection2 />
        <ServiceSlider />
        <CourseSlider2 />
        <CtaSection />
        <TeacherSection />
        <TestimonialSection />
        <BlogSlider />
      </div>
      <FooterSection4
        style="tl-2-footer"
        logo="assets/images/logos/logo-2-light.png"
        form="tl-2-footer-subs-form"
      />
    </>
  );
};

export default Home2;
