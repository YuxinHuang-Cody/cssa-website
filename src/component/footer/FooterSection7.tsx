import Link from 'next/link'
import React from 'react'
interface FooterProp {
    logo: string;
    style: string;
    descStyle: string;
    socialStyle: string;
}
const FooterSection7:React.FC<FooterProp> = ({logo, style, descStyle, socialStyle}) => {
  return (
    <footer className={`tl-footer ${style}`}>
        <div className="tl-footer-top">
            <div className="container">
                <div className="row gy-5 justify-content-center">
                    <div className="col-xxl-7 col-xl-6">
                        <div className="row gy-5 justify-content-between">
                            <div className="col-md-5 col-sm-6 col-12">
                                <div className="tl-footer-widget">
                                    <Link href="/" className="logo">
                                        <img src={logo} alt="Logo"/>
                                    </Link>

                                    <p className={descStyle}>Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi.</p>

                                    <ul className={socialStyle}>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-12 text-md-start text-sm-end">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title">Get in touch</h5>

                                    <ul className="tl-footer-links tl-footer-contact-infos">
                                        <li><a href="tel:8812354873654" className="tl-footer-number">(88)123 5487 3654</a></li>

                                        <li>
                                            <p className="tl-footer-address">681 Pompton Ave, Cedar Grove, NJ 5479 United States</p>
                                        </li>

                                        <li><a href="#" className="tl-6-footer-map-btn">Get Directions <i className="fa-light fa-arrow-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-5 col-xl-6">
                        <div className="row gy-5">
                            <div className="col-sm-4 col-6 col-xxs-12">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title">Our Links</h5>
                                    <ul className="tl-footer-links">
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/course">Courses</Link></li>
                                        <li><Link href="/contact">Help Centre</Link></li>
                                        <li><Link href="/blog">News</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6 col-xxs-12 text-md-start text-sm-center">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title">Class</h5>
                                    <ul className="tl-footer-links">
                                        <li><a href="#">Programming</a></li>
                                        <li><a href="#">Art & Design</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Engineering</a></li>
                                        <li><a href="#">Photography</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6 col-xxs-12 text-md-start text-sm-end">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title">Support</h5>
                                    <ul className="tl-footer-links">
                                        <li><Link href="/contact">Help Centre</Link></li>
                                        <li><Link href="#">FAQ</Link></li>
                                        <li><Link href="/contact">Contacts</Link></li>
                                        <li><Link href="#">Security</Link></li>
                                        <li><Link href="#">Private Police</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tl-footer-bottom">
            <div className="container">
                <p className="tl-copyright-txt m-0 text-center">Copyright &copy; 2023 All Rights Reserved by Talim</p>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection7