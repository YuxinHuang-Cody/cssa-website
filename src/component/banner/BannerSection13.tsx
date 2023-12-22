import React from 'react'
import BannerSlider2 from '../slider/BannerSlider2'

const BannerSection13 = () => {
  return (
    <section className="tl-14-banner">
        <BannerSlider2 />

        <div className="tl-14-banner-txt">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-10 col-xxs-12">
                        <h1 className="tl-14-banner-title">Enhancing Learning with Language Models.</h1>
                        <p className="tl-14-banner-descr">Through a combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.</p>
                        <form action="#" className="tl-14-banner-search-form">
                            <input type="search" name="Search" className="tl-14-banner-search-field" id="tl-14-banner-search-field" placeholder="Search your course"/>
                            <button type="submit" className="tl-def-btn tl-14-def-btn tl-14-banner-search-btn">Find course</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerSection13