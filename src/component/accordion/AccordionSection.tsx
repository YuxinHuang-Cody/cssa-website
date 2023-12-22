'use client'
import React, { useState } from 'react'
interface AccordionProp {
  array: FaqArray[]
}
type FaqArray = {
  id: number,
  ques: string,
  ans: string,
}
const AccordionSection:React.FC<AccordionProp> = ({array}) => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const handleAccordionBtn = (itemId: number) => {
    if (openAccordion === itemId) {
      // Clicking on the active item, do nothing to avoid closing.
      return;
    }
    setOpenAccordion(itemId);
  };
  return (
    <div className="tl-8-accordion">
        {array.map((item) => (
          <div className={`tl-8-accordion-item ${openAccordion === item.id ? 'open' : ''}`} key={item.id}>
            <div
              className="tl-8-accordion-item-header"
              role="button"
              onClick={() => handleAccordionBtn(item.id)}
            >
              <h6 className="tl-8-accordion-item-title">
                {item.ques}
              </h6>
              <span className="tl-8-accordion-item-expand-icon"></span>
            </div>

            <p className={`tl-8-accordion-item-body ${openAccordion === item.id ? 'open' : ''}`}>
              {item.ans}
            </p>
          </div>
        ))}
      </div>
  )
}

export default AccordionSection