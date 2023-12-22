'use client'
import React from 'react'
interface CtaProps {
    style: string;
    lastWord: string;
    lastMsg: string;
}
const CtaSection3:React.FC<CtaProps> = ({style,lastWord,lastMsg}) => {
  return (
    <div className={`tl-7-cta ${style}`}>
    <div className="tl-7-cta-bg container">
        <div className="row align-items-center justify-content-between">
            <div className="col-xxl-4">
                <h2 className="tl-7-cta-title">Ready to <span className="last-word">{lastWord}</span> {lastMsg}</h2>
            </div>

            <div className="col-xxl-5 col-md-7">
                <p className="tl-7-cta-descr">Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis.</p>
            </div>

            <div className="col-xxl-3 col-5 text-start text-md-end">
                <a href="#" className="tl-7-def-btn">Join Membership</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default CtaSection3