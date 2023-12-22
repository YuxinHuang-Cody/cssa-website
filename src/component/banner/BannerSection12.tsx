import React from 'react'

const BannerSection12 = () => {
  return (
    <section className="tl-13-banner" data-background="assets/images/tl-13/banner-bg.png" data-bg-color="#f2efe8">
    <div className="container">
        <div className="row gy-5 align-items-center">
            <div className="col-lg-7">
                <div className="tl-13-banner-txt">
                    <h1 className="tl-13-banner-title">Learn Tech Embracing Technology Education Excellence.</h1>
                    <p className="tl-13-banner-descr">Through a combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.</p>
                    <form action="#" className="tl-13-banner-search-form">
                        <input 
                        type="search" 
                        name="search" 
                        id="tl-13-banner-search-input" 
                        placeholder="Search your course"
                        />
                        <button type="submit">Find course</button>
                    </form>
                </div>
            </div>

            <div className="col-lg-5">
                <div className="tl-13-banner-img text-center text-lg-end">
                    <img src="assets/images/tl-13/banner-img.jpg" alt="Banner Image"/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default BannerSection12