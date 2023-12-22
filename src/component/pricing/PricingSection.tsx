'use client'
import React, { useState } from 'react';

// Define a type for pricing packages
type PricingPackage = {
  title: string;
  subTitle: string;
  price: number;
  features: { id: number; feature: string; className?: string }[];
};

// Define an array of pricing packages
const pricingPackages: PricingPackage[] = [
  {
    title: 'Basic Plan',
    subTitle: 'There many variations passages',
    price: 240,
    features: [
      {
        id: 0,
        feature: '60 Mins Driving Lesson',
      },
      {
        id: 1,
        feature: 'Additional Time Available',
      },
      {
        id: 2,
        feature: '2 Hour Highway Lesson',
      },
      {
        id: 3,
        feature: 'Car Rental For Road Test',
        className: 'disabled-feature',
      },
      {
        id: 4,
        feature: '7 Hour Pre-Licensing Course',
        className: 'disabled-feature',
      },
    ],
  },
  {
    title: 'Starter Plan',
    subTitle: 'There many variations passages',
    price: 430,
    features: [
      {
        id: 0,
        feature: '60 Mins Driving Lesson',
      },
      {
        id: 1,
        feature: 'Additional Time Available',
      },
      {
        id: 2,
        feature: '2 Hour Highway Lesson',
      },
      {
        id: 3,
        feature: 'Car Rental For Road Test',
      },
      {
        id: 4,
        feature: '7 Hour Pre-Licensing Course',
        className: 'disabled-feature',
      },
    ],
  },
  {
    title: 'Advance Plan',
    subTitle: 'There many variations passages',
    price: 868,
    features: [
      {
        id: 0,
        feature: '60 Mins Driving Lesson',
      },
      {
        id: 1,
        feature: 'Additional Time Available',
      },
      {
        id: 2,
        feature: '2 Hour Highway Lesson',
      },
      {
        id: 3,
        feature: 'Car Rental For Road Test',
      },
      {
        id: 4,
        feature: '7 Hour Pre-Licensing Course',
      },
    ],
  },
];

const PricingSection: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const handleChoosePackage = (index: number) => {
    setSelectedPackage(index);
  };

  return (
    <section className="tl-8-pricing tl-3-section-spacing">
      <div className="container">
        <h2 className="tl-8-section-title">The Right Price For Clients.</h2>

        <div className="row justify-content-center g-4">
          {pricingPackages.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={`tl-8-single-pricing ${
                  selectedPackage === index ? 'tl-8-single-pricing-selected' : ''
                }`}
              >
                <div className="tl-8-single-pricing-heading">
                  {item.title === 'Starter Plan' && (
                    <span className="tl-8-single-pricing-tag">Popular Plan</span>
                  )}
                  <h5 className="tl-8-single-pricing-title">{item.title}</h5>
                  <h6 className="tl-8-single-pricing-sub-title">{item.subTitle}</h6>
                  <p className="tl-8-single-pricing-price">
                    <span className="number">${item.price}</span>/Per Course
                  </p>
                </div>

                <ul className="tl-8-single-pricing-features">
                  {item.features.map((feature) => (
                    <li key={feature.id} className={feature.className}>{feature.feature}</li>
                  ))}
                </ul>

                <button
                  onClick={() => handleChoosePackage(index)}
                  className={`tl-def-btn ${selectedPackage === index ? 'active': ''}`}
                >
                  {selectedPackage === index ? 'Package Chosen':'Choose Package'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


