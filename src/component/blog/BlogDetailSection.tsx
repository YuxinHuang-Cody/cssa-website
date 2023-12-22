import { blogList } from '@/data/Data';
import Link from 'next/link';
import React from 'react'
interface BlogProps {
    blogData: {
        imgSrc: string;
        author: string;
        date: string;
        category: string;
        title: string;
        desc: string;
        id: number;
    }
}

const BlogDetailSection:React.FC<BlogProps> = ({blogData}) => {
    const nextArticle = blogList.find((item) => item.id === blogData.id + 1)
    const prevArticle = blogList.find((item) => item.id === blogData.id - 1)
  return (
    <div className="tl-blog-details pt-120 pb-120">
        <div className="container">
            <div className="row gx-0 tl-blog-details-row">
                <div className="col-lg-8">
                    <div className="tl-event-details-left tl-blog-details-left">
                        <div className="tl-blog-details-img">
                            <img src={`/${blogData.imgSrc}`} alt="blog banner"/>

                            <div className="tl-course-details-infos tl-blog-details-infos">
                                <div className="tl-course-details-info tl-blog-details-info">
                                    <h6 className="tl-course-details-info-name tl-blog-details-info-name">
                                        <a href="#"><i className="fa-regular fa-user"></i>{blogData.author}</a>
                                    </h6>
                                </div>

                                <div className="tl-course-details-info tl-blog-details-info">
                                    <h6 className="tl-course-details-info-name tl-blog-details-info-name"><i className="fa-regular fa-layer-group"></i>{blogData.category}</h6>
                                </div>

                                <div className="tl-course-details-info tl-blog-details-info">
                                    <h6 className="tl-course-details-info-name tl-blog-details-info-name"><i className="fa-light fa-calendar-alt"></i>{blogData.date}</h6>
                                </div>
                            </div>
                        </div>

                        <h2 className="tl-event-details-title tl-blog-details-title">{blogData.title}</h2>

                        <div className="tl-event-details-descr tl-blog-details-descr">
                            <p className="tl-blog-details-descr-txt">{blogData.desc}</p>

                            <p className="tl-blog-details-descr-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quo deleniti quae, dolorum aperiam aliquid aliquam, nihil cupiditate officiis ex ipsa? Molestias provident incidunt autem debitis ex, esse sed veritatis!</p>

                            <p className="tl-blog-details-descr-txt tl-event-details-area">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum unde ducimus soluta iusto nulla sint. Illum aperiam labore nemo fugit possimus laudantium, ab, mollitia perspiciatis ducimus laborum laboriosam culpa minus.</p>

                            <p className="tl-blog-details-descr-txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas maiores deleniti laudantium accusamus quos necessitatibus fugit totam fugiat rerum quia explicabo blanditiis asperiores velit vero, magni deserunt. Molestias corrupti numquam temporibus, exercitationem architecto, laboriosam vel obcaecati sint placeat modi tempora natus rem consequatur culpa doloremque.</p>
                        </div>

                        <div className="tl-blog-details-bottom-actions">
                            <div className="tl-blog-details-tags">
                                <a href="#" className="tl-blog-details-tag">Education</a>
                                <a href="#" className="tl-blog-details-tag">Study</a>
                                <a href="#" className="tl-blog-details-tag">LMS</a>
                            </div>

                            <div className="tl-blog-details-shares">
                                <h6 className="tl-blog-details-shares-title">Share:</h6>
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-discord"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="tl-event-details-left tl-blog-details-author mt-30">
                        <h3 className="tl-blog-details-author-title tl-event-details-area-title">About the Author</h3>
                        <div className="tl-course-details-instructor tl-event-details-area">
                            <div className="tl-course-details-instructor-heading">
                                <img className="tl-course-details-instructor-img" src="/assets/images/tl-2/teacher-1.jpg" alt="teacher image"/>

                                <div className="tl-course-details-instructor-info">
                                    <h5 className="tl-course-details-instructor-name"><a href="staff-profile.html">Brian Cumin</a></h5>
                                    <h6 className="tl-staff-profile-role">Head of Department, CSE</h6>
                                    <ul className="tl-course-details-instructor-socials">
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tl-course-details-instructor-txt">
                                <p className="tl-course-details-instructor-intro">Hello! I'm Brian Cumin, your guide in the "Mastering English Speaking" course. As a seasoned language enthusiast with 03+ years of experience, I'm here to help you unlock the world of fluent English communication. Get ready to embark on an exciting journey where we'll build essential skills, explore diverse topics, and boost your confidence in speaking English. Let's make this learning experience impactful and enjoyable together. Ready to get started? Let's dive in!</p>
                            </div>
                        </div>
                    </div>

                    <div className="tl-event-details-left tl-blog-details-bottom-navs mt-30">
                        <div className="row gy-3">
                            <div className="col-md-6 col-12">
                                {(prevArticle && (prevArticle.id >= 0 ))? (
                                <div className="tl-blog-details-bottom-nav">
                                    <span className="tl-blog-details-bottom-nav-arrow"><i className="fa-sharp fa-regular fa-angle-left"></i></span>
                                    <div className="tl-blog-details-bottom-nav-txt">
                                        <span className="tl-blog-details-bottom-nav-subtitle">Previous Article</span>
                                        <h4 className="tl-blog-details-bottom-nav-title">
                                            <Link href={`/blog/${prevArticle?.slug}`}>{prevArticle?.title || "No Previous Articles"}</Link>
                                        </h4>
                                    </div>
                                </div>
                                ) : (
                                    <div className="tl-blog-details-bottom-nav">
                                        <span className="tl-blog-details-bottom-nav-arrow"><i className="fa-sharp fa-regular fa-angle-left"></i></span>
                                        <div className="tl-blog-details-bottom-nav-txt">
                                            <span className="tl-blog-details-bottom-nav-subtitle">Previous Article</span>
                                            <h4 className="tl-blog-details-bottom-nav-title">
                                                <Link href='#'>No Previous Article</Link>
                                            </h4>
                                        </div>
                                     </div>
                                )}

                                
                            </div>
                            <div className="col-md-6 col-12 ms-auto">
                            {(nextArticle  && (nextArticle.id > blogList.length)) ? (
                                 <div  className="tl-blog-details-bottom-nav tl-blog-details-bottom-nav-next">
                                    <span className="tl-blog-details-bottom-nav-arrow"><i className="fa-sharp fa-regular fa-angle-left"></i></span>
                                    <div className="tl-blog-details-bottom-nav-txt">
                                        <span className="tl-blog-details-bottom-nav-subtitle">Next Article</span>
                                        <h4 className="tl-blog-details-bottom-nav-title">
                                            <Link href='#'>No Next Article</Link>
                                        </h4>
                                    </div>
                                </div>
                            ) : (
                                <div className="tl-blog-details-bottom-nav tl-blog-details-bottom-nav-next">
                                <div className="tl-blog-details-bottom-nav-txt">
                                    <span className="tl-blog-details-bottom-nav-subtitle">Next Article</span>
                                    <h4 className="tl-blog-details-bottom-nav-title"><Link href={`${nextArticle ? `/blog/${nextArticle?.slug}`:'#'}`}>{nextArticle?.title || 'No Next Article To Show'}</Link></h4>
                                </div>
                                <span className="tl-blog-details-bottom-nav-arrow"><i className="fa-sharp fa-regular fa-angle-right"></i></span>
                                </div>
                            )}
                            </div>

                        </div>
                    </div>

                    <div className="tl-event-details-left mt-30">
                        <h3 className="tl-event-details-area-title tl-blog-details-author-title">Post Comments</h3>
                        <div className="tl-comment tl-event-details-area">
                            <div>
                                <div className="tl-comment-commenter">
                                    <div className="tl-comment-commenter-img">
                                        <img src="/assets/images/tl-3/author-img.png" alt="commenter image"/>
                                    </div>

                                    <div className="tl-comment-commenter-txt">
                                        <h5 className="tl-comment-commenter-name">Manha Islam</h5>
                                        <h6 className="tl-comment-commenter-date">03 Jan, 2023</h6>
                                    </div>
                                </div>

                                <div className="tl-comment-bottom">
                                    <p className="tl-comment-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia officiis repellat temporibus quibusdam quisquam! Illum consequatur, ea earum quo explicabo voluptas! Obcaecati ea nobis tenetur voluptatum, pariatur eligendi adipisci nam?</p>

                                    <div className="tl-comment-bottom-actions">
                                        <button className="tl-comment-like-btn"><i className="fa-regular fa-heart"></i> Like</button>
                                        <button className="tl-comment-reply-btn"><i className="fa-regular fa-comment"></i> Reply</button>
                                    </div>
                                </div>
                            </div>

                            <div className="tl-comment-reply">
                                <div className="tl-comment-commenter">
                                    <div className="tl-comment-commenter-img">
                                        <img src="/assets/images/tl-4/user-4.jpg" alt="commenter image"/>
                                    </div>

                                    <div className="tl-comment-commenter-txt">
                                        <h5 className="tl-comment-commenter-name">Bristy Anam <span className="tl-comment-commenter-state">Replied to Manha Islam</span></h5>
                                        <h6 className="tl-comment-commenter-date">03 Jan, 2023</h6>
                                    </div>
                                </div>

                                <div className="tl-comment-bottom">
                                    <p className="tl-comment-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia officiis repellat temporibus quibusdam quisquam! Illum consequatur, ea earum quo explicabo voluptas! Obcaecati ea nobis tenetur voluptatum, pariatur eligendi adipisci nam?</p>

                                    <div className="tl-comment-bottom-actions">
                                        <button className="tl-comment-like-btn"><i className="fa-regular fa-heart"></i> Like</button>
                                        <button className="tl-comment-reply-btn"><i className="fa-regular fa-comment"></i> Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tl-comment tl-event-details-area">
                            <div className="tl-comment-commenter">
                                <div className="tl-comment-commenter-img">
                                    <img src="/assets/images/tl-4/user-1.jpg" alt="commenter image"/>
                                </div>

                                <div className="tl-comment-commenter-txt">
                                    <h5 className="tl-comment-commenter-name">Dhurv afran</h5>
                                    <h6 className="tl-comment-commenter-date">03 Jan, 2023</h6>
                                </div>
                            </div>

                            <div className="tl-comment-bottom">
                                <p className="tl-comment-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia officiis repellat temporibus quibusdam quisquam! Illum consequatur, ea earum quo explicabo voluptas! Obcaecati ea nobis tenetur voluptatum, pariatur eligendi adipisci nam?</p>

                                <div className="tl-comment-bottom-actions">
                                    <button className="tl-comment-like-btn"><i className="fa-regular fa-heart"></i> Like</button>
                                    <button className="tl-comment-reply-btn"><i className="fa-regular fa-comment"></i> Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tl-event-details-left mt-30">
                        <h3 className="tl-event-details-area-title tl-blog-details-author-title">Leave a comment</h3>
                        <form action="#" className="tl-comment-form">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <input type="text" name="commenter-name" id="tl-commenter-name-field" placeholder="Enter your name"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" name="commenter-email" id="tl-commenter-email-field" placeholder="Enter your E-mail"/>
                                </div>

                                <div className="col-12">
                                    <textarea name="commenter-comment" id="tl-commenter-txt-field" rows={10} placeholder="Type your comment here"></textarea>
                                </div>
                            </div>

                            <button type="submit" className="tl-def-btn tl-comment-form-btn">Post Comment</button>
                        </form>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="tl-event-details-right">
                        <form className="tl-blog-details-search">
                            <input type="text" name="tl-search" id="tl-blog-details-search" placeholder="Search Here..."/>
                            <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                        </form>
                    </div>

                    <div className="tl-event-details-right tl-upcoming-events">
                        <h3 className="tl-upcoming-events-title">Categories</h3>
                        <ul>
                            <li><a href="#" className="tl-blog-details-category">
                                    <span className="tl-blog-details-category-name">Computer Sceince</span>
                                    <span className="tl-blog-details-category-name">(29)</span>
                                </a></li>
                            <li><a href="#" className="tl-blog-details-category">
                                    <span className="tl-blog-details-category-name">Manifesting</span>
                                    <span className="tl-blog-details-category-name">(18)</span>
                                </a></li>
                            <li><a href="#" className="tl-blog-details-category">
                                    <span className="tl-blog-details-category-name">Tolerance</span>
                                    <span className="tl-blog-details-category-name">(09)</span>
                                </a></li>
                            <li><a href="#" className="tl-blog-details-category">
                                    <span className="tl-blog-details-category-name">Religious</span>
                                    <span className="tl-blog-details-category-name">(19)</span>
                                </a></li>
                            <li><a href="#" className="tl-blog-details-category">
                                    <span className="tl-blog-details-category-name">Buisness</span>
                                    <span className="tl-blog-details-category-name">(13)</span>
                                </a></li>
                            <li><a href="#" className="tl-blog-details-category">
                                    <span className="tl-blog-details-category-name">Lifestyle</span>
                                    <span className="tl-blog-details-category-name">(22)</span>
                                </a></li>
                        </ul>
                    </div>

                    <div className="tl-event-details-right tl-upcoming-events">
                        <h3 className="tl-upcoming-events-title">Recent Blogs</h3>
                        {blogList.slice(0,3).map((item) => (
                            <div className="tl-upcoming-event" key={item.id}>
                                <img className="tl-upcoming-event-img" src={`/${item.imgSrc}`} alt="event image"/>
                                <div className="tl-upcoming-event-txt">
                                    <h4 className="tl-upcoming-event-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                                    <span className="tl-upcoming-event-location"><i className="fa-regular fa-clock"></i> {item.date}</span>
                                </div>
                            </div>
                        ))}
                        
                    </div>

                    <div className="tl-event-details-right tl-upcoming-events">
                        <h3 className="tl-upcoming-events-title">Related Tags</h3>
                        <div className="tl-blog-details-tags flex-wrap">
                            <a href="#" className="tl-blog-details-tag">Education</a>
                            <a href="#" className="tl-blog-details-tag">Study</a>
                            <a href="#" className="tl-blog-details-tag">Mind Training</a>
                            <a href="#" className="tl-blog-details-tag">Focus</a>
                            <a href="#" className="tl-blog-details-tag">Manifestation</a>
                            <a href="#" className="tl-blog-details-tag">LMS</a>
                            <a href="#" className="tl-blog-details-tag">Art</a>
                            <a href="#" className="tl-blog-details-tag">Time Management</a>
                            <a href="#" className="tl-blog-details-tag">Hard Work</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetailSection