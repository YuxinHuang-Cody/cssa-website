'use client'
import { useTalimContext } from '@/context/TalimContext';
import { blogList } from '@/data/Data';
import Link from 'next/link'
import React from 'react'
interface FooterProps {
    style: string;
    lightLogo: string;
    darkLogo: string;
    foorterDesc: string;
    footerSocial: string;
    footerLink?: string;
}
const FooterSection5:React.FC<FooterProps> = ({style,lightLogo,darkLogo,foorterDesc,footerSocial,footerLink}) => {
    const {isDarkTheme} = useTalimContext()
  return (
    <footer className={`tl-footer tl-4-footer ${style}`}>
        <div className="tl-footer-top">
            <div className="container">
                <div className="row gy-5 justify-content-between">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="tl-footer-widget tl-4-footer-widget">
                            <Link href="/" className="logo tl-footer-widget-title">
                                <img src={isDarkTheme ? lightLogo : darkLogo} alt="logo"/>
                            </Link>

                            <p className={foorterDesc}>Maurus herderite egret orca ac incident. Viramas at deque eu ipsum consenter commode egret t dam celestas beget mi.</p>
                            <div className={footerSocial}>
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
                                <div className="tl-footer-widget tl-4-footer-widget">
                                    <h5 className="tl-footer-widget-title tl-4-footer-widget-title">Our Campus</h5>
                                    <ul className={`tl-footer-links tl-4-footer-links ${footerLink}`}>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/course">Courses</Link></li>
                                        <li><Link href="/contact">Help Centre</Link></li>
                                        <li><Link href="/blog">News</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-xxs-12">
                                <div className="tl-footer-widget tl-4-footer-widget">
                                    <h5 className="tl-footer-widget-title tl-4-footer-widget-title">Academics</h5>
                                    <ul className={`tl-footer-links tl-4-footer-links ${footerLink}`}>
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
                        <div className="tl-footer-widget tl-4-footer-widget">
                            <h5 className="tl-footer-widget-title tl-4-footer-widget-title">Recent Posts</h5>

                            <div className="tl-4-footer-articles">
                                {blogList.slice(4,6).map((item) => (
                                    <div className="tl-4-footer-article" key={item.id}>
                                        <img src={item.imgSrc} alt="Article image" className="tl-4-footer-article-img"/>

                                        <div className="tl-4-footer-article-txt">
                                            <span className="tl-4-footer-article-date">{item.date}</span>
                                            <h5 className="tl-4-footer-article-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h5>
                                        </div>
                                    </div> 
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tl-footer-bottom tl-4-footer-bottom">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-12">
                        <p className="tl-4-copyright-txt m-0 text-center">Copyright © 2023 All Rights Reserved by Talim</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection5