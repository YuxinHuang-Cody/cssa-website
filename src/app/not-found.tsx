import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout5 from "@/component/layout/Layout5";
import React from "react";
import ErrorSection from "@/component/error/ErrorSection";

export default function NotFound() {
  return (
    <Layout5>
      <BreadcrumbSection title="Page 404" style="" />
      <ErrorSection type="page"/>
    </Layout5>
  );
}
