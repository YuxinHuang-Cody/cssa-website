import Link from 'next/link'
import React from 'react'
interface FooterProps {
    style: string;
    logo: string;
}
const FooterSection3:React.FC<FooterProps> = ({style,logo}) => {
  return (
    <footer className={`tl-footer tl-7-footer ${style}`}>
        <div className="tl-footer-top">
            <div className="container">
                <div className="row gy-5 justify-content-between">
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="tl-footer-widget tl-3-footer-widget">
                            <Link href="/" className="logo">
                                <img src={logo} alt="Logo"/>
                            </Link>

                            <ul className="tl-footer-links tl-3-footer-contact-infos">
                                <li><a href="tel:8812354873654" className="tl-footer-number">(88)123 5487 3654</a></li>

                                <li>
                                    <p className="tl-3-footer-address">681 Pompton Ave, Cedar Grove, NJ 5479 United States</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 order-1 order-sm-2 order-lg-1">
                        <div className="row gy-5">
                            <div className="col-6 col-xxs-12">
                                <div className="tl-footer-widget tl-3-footer-widget">
                                    <h5 className="tl-footer-widget-title">Our Campus</h5>
                                    <ul className="tl-footer-links">
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/course">Courses</Link></li>
                                        <li><Link href="/contact">Help Centre</Link></li>
                                        <li><Link href="/blog">News</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-xxs-12">
                                <div className="tl-footer-widget tl-3-footer-widget">
                                    <h5 className="tl-footer-widget-title">Academics</h5>
                                    <ul className="tl-footer-links">
                                        <li><a href="#">Programming</a></li>
                                        <li><a href="#">Art &amp; Design</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Engineering</a></li>
                                        <li><a href="#">Photography</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12 order-2 order-sm-1 order-lg-2">
                        <div className="tl-footer-widget tl-3-footer-widget">
                            <h5 className="tl-footer-widget-title">Newsletter</h5>
                            <p className="tl-3-nwsltr-txt">Register now to get latest updates on promotions & coupons.</p>
                            <form action="#" className="tl-3-nwsltr-form">
                                <input type="email" name="nwsltr-mail" id="tl-3-nwsltr-mail" className="tl-3-nwsltr-mail-input" placeholder="Enter Your Email"/>
                                <button className="tl-3-def-btn" id="tl-3-nwsltr-btn">Get Newsletter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tl-footer-bottom">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-md-6">
                        <p className="tl-3-copyright-txt m-0 text-center text-md-start">Copyright © 2023 All Rights Reserved by Talim</p>
                    </div>

                    <div className="col-md-6">
                        <ul className="tl-footer-socials tl-3-footer-socials">
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection3