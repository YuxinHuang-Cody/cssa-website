import React from "react";

const PricingSection3 = () => {
  return (
    <section className="tl-10-fees-section tl-fees-section p-120">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-5">
            <div className="tl-10-fees-txt">
              <img
                src="assets/images/tl-10/fees-icon.png"
                alt=""
                className="tl-10-fees-img"
              />
              <h2 className="tl-section-title tl-10-fees-title">
                Tuition & <span className="last-word">Fees</span>
              </h2>
              <p className="tl-10-about-descr tl-about-descr">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected randomised words which don't look even slightly
                believable.
              </p>
              <a href="#" className="tl-def-btn-2">
                University Overview{" "}
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="tl-10-tution-details d-flex">
              <div className="tl-10-single-package">
                <h6 className="tl-10-single-package-year">2020 - 2022</h6>
                <h4 className="tl-10-single-package-title">Tuition Costs</h4>

                <ul className="tl-10-tutions">
                  <li className="tl-10-tution-info">
                    <span className="tution-name">Fall 2020</span>
                    <span className="tution-price">
                      <span className="currency">$</span>12,000
                    </span>
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">spring 2020</span>
                    <span className="tution-price">
                      <span className="currency">$</span>15,000
                    </span>
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">summer 2020</span>
                    <span className="tution-price">
                      <span className="currency">$</span>12,000
                    </span>
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">Fall 2021</span>
                    <span className="tution-price">
                      <span className="currency">$</span>14,000
                    </span>
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">summer 2022</span>
                    <span className="tution-price">
                      <span className="currency">$</span>13,000
                    </span>
                  </li>
                </ul>

                <div className="tl-10-tution-total-price">
                  <span className="total-title">Total:</span>
                  <span className="total-price">
                    <span className="currency">$</span>67, 000
                  </span>
                </div>
              </div>

              <div className="tl-10-single-package tl-10-single-package-2">
                <h6 className="tl-10-single-package-year">2020 - 2022</h6>
                <h4 className="tl-10-single-package-title">Tuition Costs</h4>

                <ul className="tl-10-tutions">
                  <li className="tl-10-tution-info">
                    <span className="tution-name">Fall 2020</span>
                    <span className="tution-price">
                      <span className="currency">$</span>12,000
                    </span>
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">spring 2020</span>
                    <span className="tution-price">
                      <span className="currency">$</span>15,000
                    </span>
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">summer 2020</span>
                    <span className="tution-price">
                      <span className="currency">$</span>12,000
                    </span>
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">Fall 2021</span>
                    <span className="tution-price">
                      <span className="currency">$</span>14,000
                    </span>
                  </li>
                  <li className="tl-10-tution-info">
                    <span className="tution-name">summer 2022</span>
                    <span className="tution-price">
                      <span className="currency">$</span>13,000
                    </span>
                  </li>
                </ul>

                <div className="tl-10-tution-total-price">
                  <span className="total-title">Total:</span>
                  <span className="total-price">
                    <span className="currency">$</span>67, 000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection3;
