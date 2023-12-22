import Link from "next/link";
import React from "react";
interface ErrorProps {
  type: string;
}
const ErrorSection: React.FC<ErrorProps> = ({ type }) => {
  return (
    <div className="dynamic-error-page-container">
      <div className="not-found-image-container">
        <img src="/assets/images/404.png" alt="page not found" />
      </div>
      <p className="no-page-found-text">
        The {type} you are looking for does not exist.
      </p>
      <Link href="/" className="tl-def-btn tl-1-header-btn">
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorSection;
