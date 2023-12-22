import Link from 'next/link'
import React from 'react'
type Props = {
    footerStyle: string;
}
const FooterSection = ({footerStyle} : Props) => {
  return (
    <footer className={`tl-footer ${footerStyle} tl-1-footer`}>
        <div className="container">
            <div className="tl-footer-top">
                <div className="row gy-5 justify-content-between">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="tl-footer-widget kb-10-footer-widget">
                            <Link href="/" className="logo tl-footer-widget-title">
                                <img src="assets/images/logos/logo-1.png" alt="logo"/>
                            </Link>
                            <p className="tl-1-footer-descr">Nullam nulla eget dui efficitur tempor sit amet quis magna, Suspendisse.</p>
                            <div className="tl-1-footer-socials">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 order-1 order-sm-2 order-lg-1">
                        <div className="row gy-5">
                            <div className="col-6 col-xxs-12">
                                <div className="tl-footer-widget kb-10-footer-widget">
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
                                <div className="tl-footer-widget kb-10-footer-widget">
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

                    <div className="col-lg-4 col-sm-6 col-12 order-2 order-sm-1 order-lg-2">
                        <div className="tl-footer-widget tl-3-footer-widget">
                            <h5 className="tl-footer-widget-title">Subscribe</h5>
                            <form action="#" className="tl-1-nwsltr-form">
                                <input type="email" name="nwsltr-mail" id="tl-1-nwsltr-mail" className="tl-1-nwsltr-mail-input" placeholder="Get news & updates"/>
                                <button className="tl-1-nwsltr-btn" id="tl-1-nwsltr-btn">@</button>
                            </form>
                            <p className="tl-1-nwsltr-txt">Register now to get latest updates on promotions & coupons.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-footer-bottom kb-10-footer-bottom">
                <div className="row gy-4 align-items-center">
                    <div className="col-md-6">
                        <p className="tl-1-copyright-txt m-0">Copyright &copy; 2023 All Rights Reserved by Talim</p>
                    </div>

                    <div className="col-md-6">
                        <ul className="tl-1-footer-bottom-actions">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Term of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection