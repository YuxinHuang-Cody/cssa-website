import React from "react";

const BannerSection8 = () => {
  return (
    <section className="tl-9-banner bg-defaults">
      <div
        className="tl-9-banner-bg bg-defaults"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tl-9-banner-txt">
                <h1 className="tl-9-banner-title">
                  Start with your <span className="colored">passion</span>
                </h1>
                <p className="tl-9-banner-descr">
                  Through a combination of lectures, readings, and discussions,
                  students will gain a solid foundation in educational
                  psychology.
                </p>
                <a href="#" className="tl-def-btn tl-9-banner-btn">
                  start learning
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-defaults"
        data-background="assets/images/tl-9/banner-bg.jpg"
      >
        <div className="tl-9-banner-bottom container">
          <div className="row gx-0 gy-3 align-items-center">
            <div className="col-xxl-5 col-xl-4">
              <h3 className="tl-9-banner-bottom-title">
                Private <span className="tl-9-colored">lesson</span>
              </h3>
            </div>

            <div className="col-xxl-5 col-xl-6 col-md-8 col-10 col-xxs-12">
              <p className="tl-9-banner-bottom-descr">
                Through a combination of lectures, readings, and discussions,
                students will gain a solid foundation in educational psychology.
              </p>
            </div>

            <div className="col-xxl-2 col-xl-1 col-md-4 col-2 col-xxs-12">
              <a href="#" className="tl-9-banner-bottom-btn">
                <i className="fa-light fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection8;
