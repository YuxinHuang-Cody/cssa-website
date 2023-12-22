import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import TeacherDetailSection from "@/component/teacher/TeacherDetailSection";
import { teacherList } from "@/data/Data";
import React from "react";
import type { Metadata } from "next";
import ErrorSection from "@/component/error/ErrorSection";

export const metadata: Metadata = {
  title: "Talim Staff Details",
  description: "Developed by Azizur Rahman",
};
const StaffDetails = ({ params }: { params: { slug: string } }) => {
  const teacherData = teacherList.find((item) => item.slug === params.slug);
  return (
    <Layout>
      <BreadcrumbSection title="Staff Details" style="" />
      {teacherData ? (
        <TeacherDetailSection data={teacherData} />
      ) : (
        <ErrorSection type="staff" />
      )}
    </Layout>
  );
};

export default StaffDetails;
