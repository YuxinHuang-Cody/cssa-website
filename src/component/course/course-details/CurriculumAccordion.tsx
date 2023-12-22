'use client'
import React, { useState } from "react";
import CurriculumData from "./CurriculumData";
const arrayData = [
    {
        id: 0,
        title: 'Foundations of Fluent English Speaking'
    },
    {
        id: 1,
        title: 'Conversational Skills and Strategies'
    },
    {
        id: 2,
        title: 'Fluency Development through Real-world Scenarios'
    },
    {
        id: 3,
        title: 'Cultural Nuances and Cross-cultural Communication'
    }
]
const CurriculumAccordion = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const handleAccordionBtn = (itemId: number) => {
    if (openAccordion === itemId) {
      // Clicking on the active item, do nothing to avoid closing.
      return;
    }
    setOpenAccordion(itemId);
  };
  return (
    <div className="accordion" id="accordionExample">
        {arrayData.map((item) => (
            <div className="tl-event-details-area tl-course-details-curriculum" key={item.id}>
                <h2 className="accordion-header">
                <button 
                className={`accordion-button ${openAccordion === item.id ? '':'collapsed'}`}
                onClick={() => handleAccordionBtn(item.id)}
                >
                    {item.title}
                </button>
                </h2>
                <CurriculumData show={openAccordion === item.id ? true : false} />
            </div>  
        ))}
      
    </div>
  );
};

export default CurriculumAccordion;
