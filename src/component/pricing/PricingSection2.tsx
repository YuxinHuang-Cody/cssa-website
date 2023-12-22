'use client'
import React, { useState } from 'react'
// Define a type for pricing packages
type PricingPackage = {
    title: string;
    subTitle: string;
    price: number;
    imgSrc: string;
    features: { id: number; feature: string; className?: string }[];
  };
  
  // Define an array of pricing packages
  const pricingPackages2: PricingPackage[] = [
    {
      title: 'Beginner',
      subTitle: 'Pay as you go Lesson',
      price: 69,
      imgSrc: "assets/images/tl-9/plan-1.jpg",
      features: [
        {
          id: 0,
          feature: 'Free Platform Access',
        },
        {
          id: 1,
          feature: 'Full Instrument',
        },
        {
          id: 2,
          feature: '4 Hours Session',
        },
        {
          id: 3,
          feature: 'Free Music Book',
          className: 'disabled-feature',
        },
        {
          id: 4,
          feature: '24/7 Support',
          className: 'disabled-feature',
        },
      ],
    },
    {
      title: 'Intermediate',
      subTitle: '5 Private Classes',
      price: 240,
      imgSrc: "assets/images/tl-9/plan-2.jpg",
      features: [
        {
          id: 0,
          feature: 'Free Platform Access',
        },
        {
          id: 1,
          feature: 'Full Instrument',
        },
        {
          id: 2,
          feature: '4 Hours Session',
        },
        {
          id: 3,
          feature: 'Free Music Book',
        },
        {
          id: 4,
          feature: '24/7 Support',
          className: 'disabled-feature',
        },
      ],
    },
    {
      title: 'Master',
      subTitle: '10 Group Classes',
      price: 475,
      imgSrc: "assets/images/tl-9/plan-3.jpg",
      features: [
        {
          id: 0,
          feature: 'Free Platform Access',
        },
        {
          id: 1,
          feature: 'Full Instrument',
        },
        {
          id: 2,
          feature: '4 Hours Session',
        },
        {
          id: 3,
          feature: 'Free Music Book',
        },
        {
          id: 4,
          feature: '24/7 Support',
        },
      ],
    },
  ];
const PricingSection2 = () => {
    const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

    const handleChoosePackage = (index: number) => {
        setSelectedPackage(index);
    };
  return (
    <section className="tl-9-plans tl-9-section-spacing">
        <div className="container">
            <div className="tl-9-section-heading">
                <h2 className="tl-9-section-title pricing-section-2" data-text="OUR Plans">Pricing & Plans</h2>
            </div>

            <div className="row g-4 justify-content-center">
                {pricingPackages2.map((item, index) => (
                  <div className="col-lg-4 col-sm-6 col-8 col-xxs-12" key={index}>
                    <div className="tl-8-single-pricing tl-9-single-pricing">
                        <div className="tl-9-single-pricing-img">
                            <img src={item.imgSrc} alt="Price plan image"/>
                        </div>

                        <div className="tl-9-single-pricing-txt">
                            <div className="tl-8-single-pricing-heading">
                                <h5 className="tl-8-single-pricing-title">{item.title}</h5>
                                <h6 className="tl-8-single-pricing-sub-title">{item.subTitle}</h6>
                                <p className="tl-8-single-pricing-price"><span className="number">${item.price}</span>/Per Course</p>
                            </div>

                            <ul className="tl-8-single-pricing-features">
                                {item.features.map((feature) => (
                                    <li key={feature.id} className={feature.className}>{feature.feature}</li>
                                ))}
                            </ul>
                            <button
                            onClick={() => handleChoosePackage(index)}
                            className={`tl-def-btn ${selectedPackage === index ? 'tl-9-def-btn': ''}`}
                            >
                            {selectedPackage === index ? 'Package Chosen':'Choose Package'}
                            </button>
                        </div>
                    </div>
                </div>  
                ))}
                

            </div>
        </div>
    </section>
  )
}

export default PricingSection2