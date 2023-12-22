import Link from 'next/link';
import React from 'react'
interface FooterProps {
    style: string;
    logo: string;
    form: string;
}
const FooterSection4:React.FC<FooterProps> = ({style,logo,form}) => {
  return (
    <footer className={`tl-footer ${style} bg-defaults`}>
        <div className="container">
            <div className="tl-2-footer-heading">
                <div className="logo">
                    <Link href='/'>
                      <img src={logo} alt="Logo"/>  
                    </Link>
                </div>

                <form 
                action="#" 
                className={`tl-2-footer-subs-form ${form}`}
                >
                    <input type="email" name="email" id="tl-2-footer-subs-input" placeholder="Enter your email"/>
                    <button className="tl-def-btn tl-9-def-btn" type="submit">Sign Up</button>
                </form>
            </div>
        </div>

        <div className="tl-2-footer-widgets tl-9-footer-widgets">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-3 col-6 col-xxs-12">
                        <div className="tl-2-footer-widget tl-2-footer-widget-1">
                            <h5 className="tl-2-footer-widget-title">QUICK LINKS</h5>
                            <ul className="tl-2-footer-links tl-9-footer-links">
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/contact">Admission</Link></li>
                                <li><Link href="/event">Events</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/contact">Contacts</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 col-xxs-12">
                        <div className="tl-2-footer-widget tl-2-footer-widget-2">
                            <h5 className="tl-2-footer-widget-title">popular class</h5>
                            <ul className="tl-2-footer-links tl-9-footer-links">
                                <li><a href="#">Guitar</a></li>
                                <li><a href="#">Piano</a></li>
                                <li><a href="#">Percussion</a></li>
                                <li><a href="#">Violin</a></li>
                                <li><a href="#">Bass Guitar</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 col-xxs-12">
                        <div className="tl-2-footer-widget tl-2-footer-widget-3">
                            <h5 className="tl-2-footer-widget-title">Support</h5>
                            <ul className="tl-2-footer-links tl-9-footer-links">
                                <li><Link href="/contact">Help Center</Link></li>
                                <li><Link href="#">FAQ</Link></li>
                                <li><Link href="/contact">Contacts</Link></li>
                                <li><Link href="#">Security</Link></li>
                                <li><Link href="#">Private Police</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 col-xxs-12">
                        <div className="tl-2-footer-widget tl-2-footer-address">
                            <h5 className="tl-2-footer-widget-title">Get in touch</h5>

                            <ul className="tl-footer-links tl-footer-contact-infos">
                                <li><a href="tel:8812354873654" className="tl-footer-number">(88)123 5487 3654</a></li>
                                <li>
                                    <p className="tl-footer-address">681 Pompton Ave,
                                        Cedar Grove,
                                        NJ 5479 United States</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="tl-2-footer-bottom container">
            <p>Copyright &copy; 2023 All Rights Reserved by Talim</p>
        </div>
    </footer>
  )
}

export default FooterSection4