import React from 'react'

const AboutSection2 = () => {
  return (
    <section className="tl-2-about pb-120 pt-120">
        <div className="container">
            <div className="row gy-5 align-items-center tl-2-about-row">
                <div className="col-lg-6">
                    <div className="tl-2-about-img">
                        <img src="assets/images/tl-2/春晚合影.jpeg" alt="Image"/>
                        {/* <img src="assets/images/tl-2/arrow.png" alt="arrow" className="tl-2-about-arrow"/> */}
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tl-2-about-txt">
                        <h2 className="tl-2-section-title">学联简介</h2>
                        {/* <h6 className="tl-2-about-second-title">Play As You Learn</h6> */}
                        <p className="tl-2-about-descr">伯明翰大学中国学联前身为2014年成立于伯明翰大学的中国学生会，是注册于英国伯明翰大学的非盈利，非政治性的官方学生社团。在过去的近十年中，伯明翰大学中国学联作为伯明翰大学服务中国学生的非盈利性组织，极大的帮助了在校的中国留学生适应海外学习、生活、工作环境，并提供各种学术、文化和社交活动，为丰富伯明翰地区师生的课余文化生活做出了卓越的贡献，并受到中国驻英大使馆、伯明翰大学官方的认可。伯明翰大学中国学联正式于2023年6月加入全英学联成为全英学联的地方学联会员单位。</p>
                        <div className="tl-2-about-stats">
                            <div className="tl-2-about-stat">
                                <span className="tl-9-about-stat-num">10</span>
                                <span className="tl-9-about-stat-name">部门</span>
                            </div>

                            <div className="tl-2-about-stat">
                                <span className="tl-9-about-stat-num">100+</span>
                                <span className="tl-9-about-stat-name">成员</span>
                            </div>

                            <div className="tl-2-about-stat">
                                <span className="tl-9-about-stat-num">6000+</span>
                                <span className="tl-9-about-stat-name">服务人数</span>
                            </div>
                        </div>
                        <a href="#" className="tl-2-blog-btn"><span className="tl-2-blog-btn-icon"><i className="fa-regular fa-arrow-up-right"></i></span>阅读更多</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection2