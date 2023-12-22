import React from 'react'
const classesData = [
    {
      imgSrc: "assets/images/tl-7/class-bg-1.jpg",
      iconSrc: "assets/images/tl-7/class-icon-1.png",
      name: "Hip Hop Dance Class",
      description: "There are many variations of passages of Lorem Ipsum available.",
      link: "#",
    },
    {
      imgSrc: "assets/images/tl-7/class-bg-2.jpg",
      iconSrc: "assets/images/tl-7/class-icon-2.png",
      name: "Jazz Dance Class",
      description: "There are many variations of passages of Lorem Ipsum available.",
      link: "#",
    },
    {
      imgSrc: "assets/images/tl-7/class-bg-3.jpg",
      iconSrc: "assets/images/tl-7/class-icon-3.png",
      name: "Modern Ballet Class",
      description: "There are many variations of passages of Lorem Ipsum available.",
      link: "#",
    },
  ];
const ClassSection = () => {
  return (
    <section className="tl-7-classes tl-7-section-spacing">
        <div className="container">
            <div className="tl-7-section-heading">
                <h6 className="tl-7-section-sub-title">Our classes</h6>
                <h2 className="tl-7-section-title">Think Emotion, When The Show Takes Your <span className="last-word">Breath</span> Away.</h2>
            </div>

            <div className="row tl-7-classes-row justify-content-center">
            {classesData.map((classItem, index) => (
                <div className="col-lg-4 col-sm-6 col-12" key={index}>
                <div className="tl-7-class">
                    <div className="tl-7-class-img">
                    <img src={classItem.imgSrc} alt="Class Background" />
                    </div>

                    <div className="tl-7-class-txt">
                    <div className="tl-7-class-icon">
                        <img src={classItem.iconSrc} alt="Class icon" />
                    </div>
                    <h3 className="tl-7-class-name">{classItem.name}</h3>
                    <p className="tl-7-class-descr">{classItem.description}</p>
                    <a href={classItem.link} className="tl-7-class-btn">
                        <i className="fa-regular fa-arrow-right"></i>
                    </a>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default ClassSection