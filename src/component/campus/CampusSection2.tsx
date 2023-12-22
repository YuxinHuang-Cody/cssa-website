import React from "react";

const CampusSection2 = () => {
  return (
    <section className="tl-10-campus-section p-120">
      <div className="container">
        <div className="tl-10-section-heading">
          <h2 className="tl-section-title tl-10-campus-section-title">
            <span className="last-word">Campus</span> Life
          </h2>
          <p className="tl-10-secton-descr">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some.
          </p>
        </div>

        <div className="row align-items-center gy-3">
          <div className="col-lg-3 col-6">
            <div className="tl-10-campus-section-single-img">
              <a data-fslightbox href="assets/images/tl-10/campus-1.png">
                <img
                  src="assets/images/tl-10/campus-1.png"
                  alt="Campus Picture"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="tl-10-campus-section-single-img">
              <a data-fslightbox href="assets/images/tl-10/campus-2.png">
                <img
                  src="assets/images/tl-10/campus-2.png"
                  alt="Campus Picture"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="tl-10-campus-section-single-img">
              <a data-fslightbox href="assets/images/tl-10/campus-3.png">
                <img
                  src="assets/images/tl-10/campus-3.png"
                  alt="Campus Picture"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="tl-10-campus-section-single-img">
              <a data-fslightbox href="assets/images/tl-10/campus-4.png">
                <img
                  src="assets/images/tl-10/campus-4.png"
                  alt="Campus Picture"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="tl-10-campus-section-txt">
          <div className="row align-items-center justify-content-center justify-content-lg-start gy-2">
            <div className="col-lg-4 col-9">
              <p>
                Our university takes full advantage of its location in one of
                the most vibrant and diverse cities in the world.
              </p>
            </div>

            <div className="col-lg-4 col-12 text-center">
              <a href="#" className="tl-def-btn-2 tl-10-campus-section-btn">
                More Information <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection2;
