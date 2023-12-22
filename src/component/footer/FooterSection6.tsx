'use client'
import { useTalimContext } from '@/context/TalimContext';
import Link from 'next/link'
import React from 'react'
interface FooterProps {
    lightLogo: string;
    darkLogo: string;
}
const FooterSection6:React.FC<FooterProps> = ({lightLogo,darkLogo}) => {
    const {isDarkTheme} = useTalimContext()
  return (
    <footer className="tl-footer tl-5-footer">
        <div className="tl-footer-top">
            <div className="container">
                <div className="row gy-5 justify-content-between">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="tl-footer-widget">
                            <Link href="/" className="logo">
                                <img src={isDarkTheme? lightLogo : darkLogo} alt="logo"/>
                            </Link>

                            <p className="tl-footer-descr tl-5-footer-descr">Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi.</p>

                            <ul className="tl-3-footer-socials tl-5-footer-socials">
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-sm-2 order-lg-1">
                        <div className="row gy-5">
                            <div className="col-sm-4 col-6 col-xxs-12">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title tl-5-footer-widget-title">Our Links</h5>
                                    <ul className="tl-footer-links tl-5-footer-links">
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/course">Courses</Link></li>
                                        <li><Link href="/contact">Help Centre</Link></li>
                                        <li><Link href="/blog">News</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6 col-xxs-12">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title tl-5-footer-widget-title">Class</h5>
                                    <ul className="tl-footer-links tl-5-footer-links">
                                        <li><a href="#">Programming</a></li>
                                        <li><a href="#">Art &amp; Design</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Engineering</a></li>
                                        <li><a href="#">Photography</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-6 col-xxs-12">
                                <div className="tl-footer-widget">
                                    <h5 className="tl-footer-widget-title tl-5-footer-widget-title">Support</h5>
                                    <ul className="tl-footer-links tl-5-footer-links">
                                        <li><a href="#">Help Centre</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Contacts</a></li>
                                        <li><a href="#">Security</a></li>
                                        <li><a href="#">Private Police</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-12 order-2 order-sm-1 order-lg-2">
                        <div className="tl-footer-widget">
                            <h5 className="tl-footer-widget-title tl-5-footer-widget-title">Get in touch</h5>

                            <ul className="tl-footer-links tl-5-footer-links tl-footer-contact-infos">
                                <li><a href="tel:8812354873654" className="tl-footer-number">(88)123 5487 3654</a></li>

                                <li>
                                    <p className="tl-5-footer-address">681 Pompton Ave, Cedar Grove, NJ 5479 United States</p>
                                </li>

                                <li>
                                    <ul className="tl-5-footer-gallery">
                                        <li>
                                            <a href="assets/images/tl-5/campus-1.jpg" data-fslightbox="footer-gallery">
                                                <img src="assets/images/tl-5/campus-1.jpg" alt=""/>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="assets/images/tl-5/blog-1.jpg" data-fslightbox="footer-gallery">
                                                <img src="assets/images/tl-5/blog-1.jpg" alt=""/>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="assets/images/tl-5/blog-2.jpg" data-fslightbox="footer-gallery">
                                                <img src="assets/images/tl-5/blog-2.jpg" alt=""/>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tl-footer-bottom tl-5-footer-bottom">
            <div className="container">
                <p className="tl-5-copyright-txt m-0 text-center">Copyright © 2023 All Rights Reserved by Talim</p>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection6