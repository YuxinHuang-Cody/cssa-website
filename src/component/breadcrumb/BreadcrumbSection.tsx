import Link from 'next/link';
import React from 'react'
interface BreadcrumbSectionProps {
    title: string;
    style: string;
}
const BreadcrumbSection:React.FC<BreadcrumbSectionProps> = ({title,style}) => {
  return (
    <div className={`tl-breadcrumb ${style} pt-120 pb-120`}>
        <div className="container">
            <div className="row align-items-end">
                <div className="col-md-6">
                    <div className="banner-txt">
                        <h1 className="tl-breadcrumb-title">{title}</h1>
                    </div>
                </div>

                <div className="col-md-6">
                    <ul className="tl-breadcrumb-nav d-flex">
                        <li><Link href="/">Home</Link></li>
                        <li className="current-page">
                            <span className="dvdr"><i className="icofont-simple-right"></i></span>
                            <span>
                                <a href='#'>{title}</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadcrumbSection